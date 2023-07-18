/*
 * 同时查询本地和代理的IP信息(Stash 脚本)
 * 
 * @author RS0485
 * @repo https://github.com/RS0485/network-rules
 * @version 1.0.4
 * @https://raw.githubusercontent.com/RS0485/network-rules/main/scripts/ip-geolocation.js
 */

function getFlagEmoji(countryCode) {
    // author @congcong0806
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

function parse_wftismyip(data) {
    const json_data = JSON.parse(data);

    var ip = json_data.YourFuckingIPAddress;
    var country_code = json_data.YourFuckingCountryCode;
    var country = getFlagEmoji(country_code);
    var loc = json_data.YourFuckingLocation;
    var isp = json_data.YourFuckingISP;

    if (ip.length > 16) {
        ip = ip.substring(0, 16) + '...';
    }

    if (isp.length > 32) {
        isp = isp.substring(0, 32) + '...';
    }

    return {
        ip: ip,
        country: country,
        loc: loc,
        isp: isp
    };
}

async function request_web(req) {
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

async function get_ip_info(policy) {
    const response = await request_web({
        url: `https://wtfismyip.com/json`,
        headers: {
            'Referer': `https://wtfismyip.com/`,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
            'X-Stash-Selected-Proxy': policy
        }
    });

    if (response.statusCode != 200) {
        throw new Error(`API Error ${response.statusCode}`);
    }

    const obj = parse_wftismyip(response.body);
    return `${obj.ip} ${obj.country}\n${obj.loc}, ${obj.isp}`;
}

(async () => {
    try {
        const geoinfo_direct = await get_ip_info('DIRECT');
        const geoinfo_proxy = await get_ip_info('PROXY');

        $done({
            title: "𝐈𝐏 𝐆𝐄𝐎𝐋𝐎𝐂𝐀𝐓𝐈𝐎𝐍",
            content: `${geoinfo_direct}\n${geoinfo_proxy}`,
            icon: "network"
        });

    } catch (err) {
        console.log(`执行异常: ${err}`);

        $done({
            title: "𝐈𝐏 𝐆𝐄𝐎𝐋𝐎𝐂𝐀𝐓𝐈𝐎𝐍",
            content: `${err}`,
            icon: "network"
        });
    }

})()
