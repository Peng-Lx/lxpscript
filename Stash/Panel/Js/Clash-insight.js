/*
 * Clash Insight(Clash网络流量统计分析)
 *
 * @author RS0485
 * @repo https://github.com/RS0485/network-rules
 * @version 1.2.9
 * @description 分析Clash的连接信息并给出配置优化建议，兼容Stash和Clash客户端，支持被Node.js、Stash 和 Quantumult X 调用
 * @readme https://raw.githubusercontent.com/RS0485/network-rules/main/scripts/clash-insight.md
 * @https://raw.githubusercontent.com/RS0485/network-rules/main/scripts/clash-insight.js
 */

const version = '1.2.9';

const APITypes = {
    Stash: "stash",
    Clash: "clash"
};

const OutputFormats = {
    Tile: "tile",
    Html: "html",
    Json: "json"
};

const Runtimes = {
    Default: "default",
    QuantumultX: "quantumultx",
    Stash: "stash",
    NodeJS: "nodejs"
};

class Settings {
    #runtime;

    server_name;
    output_format;
    api_addr;
    api_token;
    api_type;

    constructor(runtime) {
        this.#runtime = runtime;
    }

    load() {
        const parameter = this.#get_parameter();
        this.#parse_parameter(parameter);
    }

    /**
     * 配置参数获取
     *  - Stash/NodeJS: 从argument获取
     *  - Quantumult X: 从iCloud文件读取
     */
    #get_parameter() {
        var parameter = '';

        if (this.#runtime === Runtimes.Stash || this.#runtime === Runtimes.NodeJS) {
            if (typeof $argument !== 'undefined' && $argument !== '') {
                parameter = $argument;
            }
            else {
                parameter = 'Stash iOS,tile,http://127.0.0.1:9090,api_token1234,stash';
            }
        }
        else if (this.#runtime === Runtimes.QuantumultX) {
            const config_file = 'RS0485/clash-insight.txt';
            const read_bytes = $iCloud.readFile(config_file);

            if (read_bytes === undefined) {
                const write_bytes = new TextEncoder().encode('My Clash,html,http://myclash_address,my_api_token,clash');

                if ($iCloud.writeFile(write_bytes, config_file)) {
                    console.log(`config file ${config_file} was created on icloud storage, please set parameters to this file.`);
                } else {
                    console.log(`config file ${config_file} not found on icloud storage, failed to create a new one!`);
                }
            } else {
                parameter = new TextDecoder().decode(read_bytes).split('\n')[0];
            }
        }
        else {
            throw new Error(`unknown runtime ${this.#runtime}`);
        }

        return parameter;
    }

    /**
     * 解析参数到成员
     */
    #parse_parameter(parameter) {
        const sections = parameter.split(',').map(function (item) {
            return item.trim();
        });

        if (sections.length < 4) {
            throw new Error(`invalid parameter: ${parameter}`);
        }

        this.server_name = sections[0];

        if (sections[1] === 'tile') {
            this.output_format = OutputFormats.Tile;
        }
        else if (sections[1] === 'html') {
            this.output_format = OutputFormats.Html;
        }
        else {
            this.output_format = OutputFormats.Json;
        }

        this.api_addr = sections[2];
        this.api_token = sections[3];

        // 最初发布的版本没有这个字段，采用下面的逻辑往前兼容
        if (sections.length > 4) {
            this.api_type = sections[4] == 'clash' ? APITypes.Clash : APITypes.Stash;
        }
        else {
            this.api_type = APITypes.Stash;
        }

        // 最初版本的 api_addr 包含 "/connections"，新版需移除只保留 base address
        if (this.api_addr.includes('/connections')) {
            this.api_addr = this.api_addr.replace(/\/connections/, '');
        }
        if (this.api_addr.endsWith('/')) {
            this.api_addr = this.api_addr.slice(0, -1);
        }
    }
}

class ConnectionsInsight {
    constructor() {

    }

    /**
     *
     * @param {*} api_type
     * @param {*} content
     * @returns
     */
    analysis(api_type, content) {
        const json_data = JSON.parse(content);

        // 排除本地连接
        json_data.connections = json_data.connections.filter(function (con) {
            return con.metadata.host !== 'localhost' && con.metadata.host !== 'clash.insight'
                && con.metadata.destinationIP !== '127.0.0.1';
        });

        const active_connection_count = json_data.connections.length;
        // 提示：Stash的connections保护REJECT请求，Clash不包含
        const reject_count = json_data.connections.filter(c => c.chains[0].toUpperCase() === 'REJECT').length;
        const upload_traffic = this.#format_traffic(json_data.uploadTotal);
        const download_traffic = this.#format_traffic(json_data.downloadTotal);

        // 最近15个请求
        json_data.connections.sort(function (a, b) {
            return new Date(b.start) - new Date(a.start);
        });
        const recent_requests = json_data.connections.slice(0, 15);

        // DNS 分析
        // 需覆盖REJECT，因为REJECT也可能进行了解析
        const dns = this.#analysis_dns(json_data.connections, api_type);

        // 请求风暴（包含REJECT）
        const storm_requests = this.#analysis_storm_requests(json_data.connections, api_type);

        // 排除REJECT之后进行后续分析
        json_data.connections = json_data.connections.filter(c => c.chains[0].toUpperCase() !== 'REJECT');

        const policy = this.#analysis_policy(json_data.connections, api_type);
        const network = this.#analysis_network(json_data.connections, api_type);

        return {
            active_connection_count: active_connection_count,
            reject_count: reject_count,
            upload_traffic: upload_traffic,
            download_traffic: download_traffic,
            recent_requests: this.#convert_connections(recent_requests, api_type),
            storm_requests: storm_requests,

            policy: policy,
            dns: dns,
            network: network
        };
    }

    /**
     * 将bytes转换成易于理解的形式
     * @param {*} traffic_in_bytes
     * @returns
     */
    #format_traffic(traffic_in_bytes) {
        const KB = 1000;
        const MB = 1000 * 1000;
        const GB = 1000 * 1000 * 1000;

        var friendly_traffic = 0;
        var friendly_unit = 'B';

        if (traffic_in_bytes < KB) {
            friendly_traffic = traffic_in_bytes;
            friendly_unit = 'B';
        }
        else if (traffic_in_bytes >= KB && traffic_in_bytes < MB) {
            friendly_traffic = traffic_in_bytes / KB;
            friendly_unit = 'KB';
        }
        else if (traffic_in_bytes >= MB && traffic_in_bytes < GB) {
            friendly_traffic = traffic_in_bytes / MB;
            friendly_unit = 'MB';
        }
        else {
            friendly_traffic = traffic_in_bytes / GB;
            friendly_unit = 'GB';
        }

        return {
            value: friendly_traffic.toFixed(2),
            unit: friendly_unit
        };
    }

    /**
     * 将Stash/Clash 对象转换成通用对象
     * @param {*} src_connections
     * @param {*} api_type
     * @returns
     */
    #convert_connections(src_connections, api_type) {
        if (typeof src_connections === 'undefined') {
            return undefined;
        }

        var common_connections = [];

        src_connections.forEach(src_connection => {
            const common_connection = {
                start: src_connection.start,
                network: src_connection.metadata.network,
                host: src_connection.metadata.host,
                sourceIP: src_connection.metadata.sourceIP,
                sourcePort: src_connection.metadata.sourcePort,
                destinationIP: src_connection.metadata.destinationIP,
                destinationPort: src_connection.metadata.destinationPort,
                rule: src_connection.rule,
                rulePayload: src_connection.rulePayload,
                chains: src_connection.chains,

                upload: this.#format_traffic(api_type === APITypes.Stash ? src_connection.upload.total : src_connection.upload),
                download: this.#format_traffic(api_type === APITypes.Stash ? src_connection.download.total : src_connection.download),
                dns_resolve_time: api_type === APITypes.Stash ?
                    (src_connection.metadata.tracing.hasOwnProperty("dnsQuery") ? src_connection.metadata.tracing.dnsQuery : 0) : NaN,
                connect_time: api_type === APITypes.Stash ?
                    (src_connection.metadata.tracing.hasOwnProperty("connect") ? src_connection.metadata.tracing.connect : 0) : NaN,
                handshake_time: api_type === APITypes.Stash ?
                    (src_connection.metadata.tracing.hasOwnProperty("handshake") ? src_connection.metadata.tracing.handshake : 0) : NaN
            };

            common_connections.push(common_connection);
        });

        return common_connections;
    }

    /**
     * 分析请求风暴
     * @param {*} connections
     * @param {*} api_type
     */
    #analysis_storm_requests(connections, api_type) {
        const unique_connections = {};
        connections.forEach(connection => {
            const host = connection.metadata.host || `${connection.metadata.destinationIP}:${connection.metadata.destinationPort}`;
            const connection_start = new Date(connection.start);

            if (!unique_connections[host]) {
                unique_connections[host] = {
                    first: connection,
                    count: 1,
                    start_time: connection_start,
                    end_time: connection_start
                };
            } else {
                unique_connections[host].count += 1;
                if (connection_start < unique_connections[host].start_time) {
                    unique_connections[host].start_time = connection_start;
                    unique_connections[host].first = connection;
                }
                if (connection_start > unique_connections[host].end_time) {
                    unique_connections[host].end_time = connection_start;
                }
            }
        });

        const storm_requests = [];
        Object.values(unique_connections).forEach(unique_connection => {
            const time_interval = (unique_connection.end_time.getTime() - unique_connection.start_time.getTime()) / 1000;
            const req_rate = time_interval > 0 ? (unique_connection.count / time_interval).toFixed(2) : 0;
            const active = ((new Date().getTime() - unique_connection.end_time.getTime()) / 1000) < 10;

            // 请求风暴判定条件：
            // 1. 不到1s连发5条请求
            // 2. 请求超过5条并且频率 >= 2 req/s
            if ((time_interval <= 0 && unique_connection.count >= 5) || (unique_connection.count >= 5 && req_rate >= 2)) {
                storm_requests.push({
                    host: unique_connection.first.metadata.host
                        || `${unique_connection.first.metadata.destinationIP}:${unique_connection.first.metadata.destinationPort}`,
                    start_time: unique_connection.start_time,
                    end_time: unique_connection.end_time,
                    time_interval,
                    req_rate,
                    active,
                    count: unique_connection.count,
                    first: this.#convert_connections([unique_connection.first], api_type)[0]
                });
            }
        });

        storm_requests.sort((a, b) => b.req_rate - a.req_rate);

        return storm_requests;
    }

    /**
     * DNS分析
     * @param {*} connections
     * @param {*} api_type
     */
    #analysis_dns(connections, api_type) {
        // 触发DNS解析的记录
        var dns_resolved = [];
        var avg_resolve_time = NaN;

        if (api_type === APITypes.Stash) {
            dns_resolved = connections.filter(c => c.metadata.tracing.hasOwnProperty("dnsQuery"));

            if (dns_resolved.length > 0) {
                const sum = dns_resolved.reduce((acc, curr) => acc + curr.metadata.tracing.dnsQuery, 0);
                avg_resolve_time = (sum / dns_resolved.length).toFixed(2);
            }
        }
        else {
            dns_resolved = connections.filter(c => (c.metadata.host !== '' && c.metadata.destinationIP !== ''));
            avg_resolve_time = NaN;
        }

        // 非必要的DNS解析: 最终出口不是'DIRECT'时走代理，但是该记录触发了DNS解析来匹配规则, 最优的策略是代理的域名不需要DNS解析时间
        // 数量越少越好，当数量比较多时建议对规则进行优化
        const redundant_dns = dns_resolved.filter(c => c.chains[0].toUpperCase() !== 'DIRECT');

        // 异常的DNS解析时间：> 120ms
        let abnormal_dns_resolved = [];
        if (api_type === APITypes.Stash) {
            abnormal_dns_resolved = dns_resolved.filter(c => c.metadata.tracing.dnsQuery > 120);
        }

        return {
            dns_resolve_count: dns_resolved.length,
            avg_resolve_time: avg_resolve_time,

            redundant_dns: this.#convert_connections(redundant_dns, api_type),
            abnormal_dns_resolved: this.#convert_connections(abnormal_dns_resolved, api_type)
        };
    }

    /**
     * 网络连接类型分析
     * @param {*} connections
     * @param {*} api_type
     * @returns
     */
    #analysis_network(connections, api_type) {
        // 网络类型分类
        const network_tcp = connections.filter(c => (c.metadata.network.toUpperCase() === 'TCP'));
        const network_udp = connections.filter(c => (c.metadata.network.toUpperCase() === 'UDP'));
        const network_http = connections.filter(c => (c.metadata.network.toUpperCase() === 'HTTP' || c.metadata.network.toUpperCase() === 'HTTPS'));

        // 平均TCP 连接时间分析: TCP+HTTPS
        var avg_tcp_connect_time = NaN;
        var tcp_connection_count = network_tcp.length + network_http.length;

        if (api_type === APITypes.Stash && (tcp_connection_count > 0)) {
            const sum_tcp = network_tcp.reduce((acc, curr) => acc + curr.metadata.tracing.connect, 0);
            const sum_http = network_http.reduce((acc, curr) => acc + curr.metadata.tracing.connect, 0);

            avg_tcp_connect_time = ((sum_tcp + sum_http) / tcp_connection_count).toFixed(2);
        }

        // UDP异常（下行流量=0）
        let network_udp_err = [];
        if (api_type === APITypes.Stash) {
            network_udp_err = network_udp.filter(c => (c.download.total <= 0));
        } else {
            network_udp_err = network_udp.filter(c => (c.download <= 0));
        }

        return {
            tcp_connection_count: tcp_connection_count,
            avg_tcp_connect_time: avg_tcp_connect_time,

            network_tcp_count: network_tcp.length,
            network_udp_count: network_udp.length,
            network_http_count: network_http.length,
            network_udp_err: this.#convert_connections(network_udp_err, api_type),
        };
    }

    /**
     * 策略分析
     * @param {*} connections
     * @param {*} api_type
     * @returns
     */
    #analysis_policy(connections, api_type) {
        // 平均代理握手时间分析
        const proxied_connections = connections.filter(c => c.chains[0].toUpperCase() !== 'DIRECT');
        var avg_proxy_handshake_time = NaN;

        if (api_type === APITypes.Stash && proxied_connections.length > 0) {
            const sum = proxied_connections.reduce((acc, curr) =>
                acc + (curr.metadata.tracing.hasOwnProperty("handshake") ? curr.metadata.tracing.handshake : 0), 0);
            avg_proxy_handshake_time = (sum / proxied_connections.length).toFixed(2);
        }

        // 未匹配规则的记录
        // 数量越多说明规则越不完善
        const final_matched = connections.filter(c => c.rule.toUpperCase() === 'MATCH');

        return {
            proxied_count: proxied_connections.length,
            avg_proxy_handshake_time: avg_proxy_handshake_time,

            final_matched: this.#convert_connections(final_matched, api_type)
        };
    }
}

class ProxiesInsight {
    constructor() {

    }

    analysis(api_type, proxies_content, providers_proxies_content) {
        const proxies_data = JSON.parse(proxies_content);
        const providers_data = JSON.parse(providers_proxies_content);

        return {
            proxies: this.#analysis_proxies(api_type, proxies_data),
            providers: this.#analysis_providers(api_type, providers_data)
        };
    }

    #analysis_proxies(api_type, proxies_data) {
        const new_proxies = [];
        const provider_keys = Object.keys(proxies_data.proxies);

        provider_keys.forEach(key => {
            const chain = [];
            const proxy = proxies_data.proxies[key];

            var current_node = proxy;
            while (current_node && current_node.all && current_node.now) {
                const next_node_name = current_node.now;
                chain.push(next_node_name);

                current_node = proxies_data.proxies[next_node_name];
            }

            const history = proxy.history?.[0];
            new_proxies.push({
                name: proxy.name,
                chain,
                type: proxy.type,
                udp: proxy.udp,
                delay: api_type === APITypes.Stash ? proxy.delay : (history?.delay),
                test_time: api_type === APITypes.Stash ? undefined : (history?.time.split('.')[0].replace('T', ' ')),
            });
        });

        return new_proxies;
    }

    #analysis_providers(api_type, providers_proxies_data) {
        const new_providers = [];
        const provider_keys = Object.keys(providers_proxies_data.providers);

        provider_keys.forEach(key => {
            const provider = providers_proxies_data.providers[key];

            if (provider.updatedAt && provider.vehicleType.toUpperCase() !== 'COMPATIBLE') {
                const first_proxy = provider.proxies?.[0];
                const history = first_proxy?.history?.[0];

                new_providers.push({
                    name: provider.name,
                    servers: provider.proxies?.length ?? 0,
                    updatedAt: provider.updatedAt.split('.')[0].replace('T', ' '),
                    type: provider.vehicleType,
                    delay: api_type === APITypes.Stash ? (first_proxy?.delay ?? undefined) : (history?.delay ?? undefined),
                    test_time: api_type === APITypes.Stash ? undefined : (history?.time.replace('T', ' ').split('.')[0] ?? undefined),
                });
            }
        });

        return new_providers;
    }
}

class ReportGenerator {
    constructor() {

    }

    generate_tile_object(connections_result, settings) {
        const body = {
            title: `${settings.server_name} Insight`,
            content: `↑ ${connections_result.upload_traffic.value} ${connections_result.upload_traffic.unit}   ↓ ${connections_result.download_traffic.value} ${connections_result.download_traffic.unit}
连接: ${connections_result.active_connection_count}  UDP: ${connections_result.network.network_udp_count}  MATCH: ${connections_result.policy.final_matched.length}
冗余DNS: ${connections_result.dns.redundant_dns.length}  解析缓慢: ${connections_result.dns.abnormal_dns_resolved.length}`,
            icon: "arrow.up.arrow.down.circle.fill"
        };

        return body;
    }

    generate_json(connections_result, proxies_result, settings) {
        const json = {
            version: version,
            server_name: settings.server_name,
            api_type: settings.api_type,
            api_addr: settings.api_addr,
            payload: {
                connections: connections_result,
                proxies: proxies_result
            }
        };

        return JSON.stringify(json);
    }

    generate_html(connections_result, proxies_result, settings) {
        var html = `<!DOCTYPE html>
    <html>

    <head>
        <title>
            Clash Insight by RS0485
        </title>
        <style>
            table {
                border-collapse: collapse;
                width: 100%;
                border: 1px solid #dddddd;
            }

            thead {
                background: #cecece;
            }

            th,
            td {
                text-align: left;
                padding: 5px;
                border: 1px solid #dddddd;
                color: #3F3F3F;
            }

            tr:nth-child(even) {
                background: #f2f2f2;
            }

            h1 span {
                background-color: #000000;
                color: #00FF00;
                padding: 5px 5px;
            }

            .red-text {
                color: red;
                font-weight: bold;
            }

            .dimmed-cell {
                opacity: 0.5;
            }

            span[class*="policy-REJECT" i] {
                color: red;
                font-weight: bold;
            }

            span[class*="policy-DIRECT" i]{
                color: green;
                font-weight: bold;
            }

            span[class*="network-tcp" i] {
                color: #008000; /* green */
                font-weight: bold;
            }

            span[class*="network-udp" i] {
                color: #0000FF; /* blue */
                font-weight: bold;
            }

            span[class*="network-http" i] {
                color: #E65100; /* orange */
                font-weight: bold;
            }

            span[class*="network-https" i] {
                color: #800080; /* purple */
                font-weight: bold;
            }
        </style>
    </head>

    <body>
        <h1>${settings.server_name} <span>Insight</span></h1>
        <p>v${version} by <a title="Visit source code on github" href="https://github.com/RS0485/network-rules">RS0485</a></p>
        ${this.#generate_summary(connections_result)}
        ${this.#generate_network_stats(connections_result)}
        ${this.#generate_proxies_summary(proxies_result)}
        ${this.#generate_connection_insights(connections_result)}

        <script>
            // Dim cells with the text "NaN"
            var cells = document.querySelectorAll("td");
            for (var i = 0; i < cells.length; i++) {
                if (cells[i].textContent === "NaN") {
                    cells[i].classList.add("dimmed-cell");
                }
            }
      </script>
    </body>
    </html>`;

        return html;
    }

    #generate_summary(connections_result) {
        var html = '';
        var active_connection_table = [];

        {
            active_connection_table.push([
                '上传',
                '下载',
                '活跃连接',
                'DNS解析数',
                '平均DNS解析时间',
                'TCP连接数',
                '平均TCP连接时间',
                '代理连接数',
                '平均代理握手时间']);

            active_connection_table.push([
                `${connections_result.upload_traffic.value} ${connections_result.upload_traffic.unit}`,
                `${connections_result.download_traffic.value} ${connections_result.download_traffic.unit}`,
                `${connections_result.active_connection_count}`,
                `${connections_result.dns.dns_resolve_count}`,
                `${connections_result.dns.avg_resolve_time}${isNaN(connections_result.dns.avg_resolve_time) ? '' : ' ms'}`,
                `${connections_result.network.tcp_connection_count}`,
                `${connections_result.network.avg_tcp_connect_time}${isNaN(connections_result.network.avg_tcp_connect_time) ? '' : ' ms'}`,
                `${connections_result.policy.proxied_count}`,
                `${connections_result.policy.avg_proxy_handshake_time}${isNaN(connections_result.policy.avg_proxy_handshake_time) ? '' : ' ms'}`]);
        }

        html += this.#create_table_node('连接统计', '', '', active_connection_table);

        return html;
    }

    #generate_network_stats(connections_result) {
        var html = '';
        var active_connection_table = [];

        active_connection_table.push([
            'REJECT',
            'TCP',
            'UDP',
            'HTTP(S)']);

        active_connection_table.push([
            `${connections_result.reject_count}`,
            `${connections_result.network.network_tcp_count}`,
            `${connections_result.network.network_udp_count}`,
            `${connections_result.network.network_http_count}`]);

        html += this.#create_table_node('', '活跃连接', '', active_connection_table);

        return html;
    }

    #generate_connection_insights(connections_result) {
        var html = '';

        html += this.#create_insight_node(
            '最近请求',
            '以下是最近的15个请求（不包含本地回环）。',
            '',
            connections_result.recent_requests);

        html += this.#generate_storm_requests_report(connections_result);

        html += this.#create_insight_node(
            '不必要的DNS解析',
            '以下域名的最终出口不是直连，无需在本地进行DNS解析。<b>列表中的域名浪费了一次DNS解析时间。</b>',
            '当数量较多时，DNS解析可能会导致网速变慢。建议进行优化，例如在规则列表将IP相关的规则放在域名规则后面，或者使用no-resolve规则避免DNS解析，也可以将常用域名添加到代理规则中。',
            connections_result.dns.redundant_dns);

        html += this.#create_insight_node(
            'DNS解析时间异常',
            '以下域名的DNS解析时间异常，超过了120ms，可能导致首次连接速度较慢。',
            'DNS解析慢可能是由于网络环境等因素引起的。如果在网络正常的情况下，异常数量较多，建议配置更快的DNS服务器。',
            connections_result.dns.abnormal_dns_resolved);

        html += this.#create_insight_node(
            '规则未匹配',
            '以下请求未匹配任何规则，最终触发了<b>MATCH</b>。',
            '这种情况一般会触发DNS解析（如果规则列表包含IP相关的规则）。为节省DNS解析时间，建议将常用的代理域名添加到规则列表中。',
            connections_result.policy.final_matched);

        html += this.#create_insight_node(
            'UDP转发异常',
            '以下UDP请求只有上行流量，下行流量为0。若多次刷新后仍无下行流量，则可确认该UDP请求转发异常。',
            '为确保UDP请求的正确转发，需满足以下两点：1、服务器必须支持UDP转发；2、本地DNS解析需保持准确无误（未被污染）。<span class="red-text">请注意，Clash进行UDP请求时只在本地进行DNS解析。</span>',
            connections_result.network.network_udp_err);

        return html;
    }

    #generate_proxies_summary(proxies_result) {
        var html = '';
        var proxies_summary_table = [];

        proxies_summary_table.push([
            'name',
            'type',
            'chain / info',
            'udp',
            'delay',
            'test time']);

        proxies_result.proxies.forEach(proxy => {
            if (!['DIRECT', 'REJECT'].includes(proxy.name.toUpperCase())) {
                proxies_summary_table.push([
                    proxy.name,
                    proxy.type,
                    `<span class="policy-${proxy.chain[proxy.chain.length - 1]}">${proxy.chain.join(' → ')}</span>`,
                    proxy.udp ?? '',
                    proxy.delay ? (proxy.delay === 65535 ? '<span class="red-text">timeout</span>' : `${proxy.delay} ms`) : '',
                    proxy.test_time ?? '']);
            }
        });

        proxies_result.providers.forEach(provider => {
            proxies_summary_table.push([
                provider.name,
                `Proxy Provider / ${provider.type}`,
                `<span>Σ ${provider.servers}</span> <span>↻ ${provider.updatedAt}</span>`,
                '-',
                provider.delay ? (provider.delay === 65535 ? '<span class="red-text">timeout</span>' : `${provider.delay} ms`) : '',
                provider.test_time ?? '']);
        });

        html += this.#create_table_node('代理信息', '', '', proxies_summary_table);

        return html;
    }

    #generate_storm_requests_report(connections_result) {
        var html = '';
        var storm_requests_table = [];

        storm_requests_table.push([
            '#',
            'network',
            'host / ip:port',
            'rule',
            'outbound',
            'active',
            'start time',
            'time interval',
            'count',
            'request rate']);

        var idx = 0;
        connections_result.storm_requests.forEach(store_request => {
            idx++;

            storm_requests_table.push([
                idx,
                `<span class="network-${store_request.first.network}">${store_request.first.network.toUpperCase()}</span>`,
                `${store_request.host}`,
                `${store_request.first.rule}: ${store_request.first.rulePayload}`,
                `<span class="policy-${store_request.first.chains[0]}">${store_request.first.chains[0]}</span>`,
                `${store_request.active}`,
                `${store_request.start_time.getHours().toString().padStart(2, '0')}:${store_request.start_time.getMinutes().toString().padStart(2, '0')}:${store_request.start_time.getSeconds().toString().padStart(2, '0')}.${store_request.start_time.getMilliseconds().toString().padStart(3, '0')}`,
                `${store_request.time_interval} s`,
                `${store_request.count}`,
                `${store_request.req_rate} req/s`]);
        });

        html += this.#create_table_node(
            '请求风暴',
            '以下请求在短时间内连续发出（大于每秒 2 个请求），可能会严重消耗设备资源和电量。',
            '请尝试稍后刷新页面，如果请求风暴持续存在，这可能意味着该应用程序存在 BUG 或在后台非法获取数据。建议立即定位相关应用程序并卸载。',
            storm_requests_table);

        return html;
    }

    #create_table_node(title, description, tips, rows) {
        let node_content = '';

        if (title) {
            node_content += `<h2>${title}</h2>`;
        }

        if (description) {
            node_content += `<p>${description}</p>`;
        }

        if (tips) {
            node_content += `<p>${tips}</p>`;
        }

        if (rows && rows.length > 0) {
            node_content += `<table>
            <thead>
              <tr>
                ${rows[0].map(cell => `<th>${cell}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${rows.slice(1)
                    .map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`)
                    .join('')}
            </tbody>
          </table>`;
        }

        return node_content;
    }

    #create_insight_node(title, description, tips, connections) {
        var insight_table = [];

        {
            insight_table.push([
                '#',
                'network',
                'host',
                'destination',
                'rule',
                'outbound',
                'traffic',
                'dns resolve',
                'connect',
                'handshake']);
        }

        // We need to keep titles for empty entries so we can not return here
        if (!connections || connections.length < 1) {
            connections = [];
        }

        var idx = 0;
        connections.forEach(record => {
            idx++;
            const upload = record.upload;
            const download = record.download;

            {
                insight_table.push([
                    idx,
                    `<span class="network-${record.network}">${record.network.toUpperCase()}</span>`,
                    `${record.host}`,
                    `${record.destinationIP}:${record.destinationPort}`,
                    `${record.rule}: ${record.rulePayload}`,
                    `<span class="policy-${record.chains[0]}">${record.chains[0]}</span>`,
                    `↑ ${upload.value} ${upload.unit}  ↓ ${download.value} ${download.unit}`,
                    `${record.dns_resolve_time}${isNaN(record.dns_resolve_time) ? '' : ' ms'}`,
                    `${record.connect_time}${isNaN(record.connect_time) ? '' : ' ms'}`,
                    `${record.handshake_time}${isNaN(record.handshake_time) ? '' : ' ms'}`]);
            }
        });

        return this.#create_table_node(title, description, tips, insight_table);
    }
}

class ClashInsightApp {
    #runtime;
    #settings;
    #request_timeout = 3000;

    constructor() {

    }

    async run() {
        try {
            this.#detect_runtime();
            this.#load_settings(this.#runtime);

            const report = await this.#procss(this.#runtime, this.#settings, this.#request_timeout);
            $done(report);
        } catch (err) {
            console.log(`执行异常: ${err}`);

            $done({
                status: this.#runtime === Runtimes.Stash ? 500 : 'HTTP/1.1 500 Internal Server Error',
                headers: {
                    'Content-Type': 'text/html;charset=UTF-8',
                    'Served-By': `Clash Insight v${version}`
                },
                body: `Server Error: ${err}`,
                content: `Server Error: ${err}`
            });
        }
    }

    #detect_runtime() {
        if (typeof $notify !== 'undefined' && typeof $task !== 'undefined') {
            this.#runtime = Runtimes.QuantumultX;
        }
        else if (typeof $environment !== 'undefined' && typeof $environment["stash-version"] !== 'undefined') {
            this.#runtime = Runtimes.Stash;
        }
        else if (typeof process !== 'undefined' && typeof module !== 'undefined') {
            this.#runtime = Runtimes.NodeJS;
        }
        else {
            throw new Error('unknown runtime!');
        }
    }

    #load_settings(runtime) {
        this.#settings = new Settings(runtime);
        this.#settings.load();
    }

    async #procss(runtime, settings, request_timeout) {
        const req = {
            url: `${settings.api_addr}/connections`,
            timeout: request_timeout,
            headers: { 'Authorization': `Bearer ${settings.api_token}` }
        };

        const report = new ReportGenerator();

        var connections_result;
        {
            const connections_response = await this.#http_request(req, runtime);
            if (connections_response.statusCode != 200) {
                throw new Error(`HTTP code ${connections_response.statusCode}, URL=${req.url}`);
            }

            const connections_insight = new ConnectionsInsight();
            connections_result = connections_insight.analysis(settings.api_type, connections_response.body);
        }

        if (settings.output_format === OutputFormats.Tile) {
            const tile = report.generate_tile_object(connections_result, settings);

            return tile;
        }

        var proxies_result;
        {
            req.url = `${settings.api_addr}/proxies`;
            const proxies_response = await this.#http_request(req, runtime);
            if (proxies_response.statusCode != 200) {
                throw new Error(`HTTP code ${proxies_response.statusCode}, URL=${req.url}`);
            }

            req.url = `${settings.api_addr}/providers/proxies`;
            const providers_proxies_response = await this.#http_request(req, runtime);
            if (providers_proxies_response.statusCode != 200) {
                throw new Error(`HTTP code ${providers_proxies_response.statusCode}, URL=${req.url}`);
            }

            const proxies_insight = new ProxiesInsight();
            proxies_result = proxies_insight.analysis(settings.api_type, proxies_response.body, providers_proxies_response.body);
        }

        var content;
        var content_type;
        if (settings.output_format === OutputFormats.Json) {
            content = report.generate_json(connections_result, proxies_result, settings);
            content_type = 'application/json;charset=UTF-8';
        }
        else {
            content = report.generate_html(connections_result, proxies_result, settings);
            content_type = 'text/html;charset=UTF-8';
        }

        return {
            status: runtime === Runtimes.Stash ? 200 : 'HTTP/1.1 200 OK',
            headers: {
                'Content-Type': content_type,
                'Served-By': `Clash Insight v${version}`
            },
            body: content
        };
    }

    async #http_request(req, runtime) {
        if (runtime === Runtimes.Stash) {
            return new Promise((resolve, reject) => {
                $httpClient.get(req, (error, response, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({ statusCode: response.status, body: data });
                    }
                });
            });
        }
        else if (runtime === Runtimes.QuantumultX) {
            return new Promise((resolve, reject) => {
                $task.fetch(req).then(response => {
                    resolve({ statusCode: response.statusCode, body: response.body });
                }, reason => {
                    reject(reason);
                });
            });
        }
        else {
            var request = require('request');

            return new Promise((resolve, reject) => {
                request(req, (error, response, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({ statusCode: response.statusCode, body: data });
                    }
                });
            });
        }
    }
}

if (typeof process !== 'undefined' && typeof module !== 'undefined') {
    // Run a local server on NodeJS
    const express = require('express');
    const app = express();

    app.use('/stashapi', express.static(__dirname + '/stashapi'));
    app.use('*', function (req, res) {
        global.$argument = `Clash Traffic,${req.originalUrl.includes('/json') ? 'json' : 'html'},http://127.0.0.1:9090,,clash`;
        //global.$argument = `Stash Traffic,${req.originalUrl.includes('/json') ? 'json' : 'html'},http://127.0.0.1:8000/stashapi,,stash`
        global.$done = function (data) {
            for (const headerName in data.headers) {
                res.set(headerName, data.headers[headerName]);
            }
            res.send(data.body ? data.body : 'Empty Response');
        };

        const clash_insight = new ClashInsightApp();
        clash_insight.run();
    });

    const PORT = 8000;
    app.listen(PORT, function () {
        console.log(`Clash Insight is listening on port ${PORT}`);
    });
} else {
    const clash_insight = new ClashInsightApp();
    clash_insight.run();
}
