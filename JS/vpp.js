function a() {
    const b = "0123456789abcdef";
    let c = "001168.";
    for (let d = 0; d < 32; d++) {
        c += b[Math.floor(Math.random() * b.length)];
    }
    return c;
}

const c = a();

const d = {
    url: 'https://94.74.97.241/5066890-47b2-421a-bc34-873447d6ecee/api/v1/passport/auth/loginByDeviceId',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'BeesVPN/2 CFNetwork/1568.100.1 Darwin/24.0.0',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh-Hans;q=0.9'
    },
    body: JSON.stringify({
        "invite_token": "",
        "device_id": c
    })
};

httpRequest(d, (e, f, g) => {
    if (e) {
        console.log('登录请求失败: ', e);
        $done();
        return;
    }
    try {
        const h = JSON.parse(g);
        const i = h.data.token;

        const j = {
            url: `https://94.74.97.241/5066890-47b2-421a-bc34-873447d6ecee/api/v1/client/appSubscribe?token=${i}`,
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'User-Agent': 'BeesVPN/2 CFNetwork/1568.100.1 Darwin/24.0.0'
            }
        };

        httpRequest(j, (k, l, m) => {
            if (k) {
                console.log('订阅请求失败: ', k);
                $done();
                return;
            }
            try {
                const n = JSON.parse(m);
                let o = "";
                n.data.forEach(p => {
                    p.list.forEach(q => {
                        let r = q.url;
                        let s = q.name;


                        r = r.replace('vless:\\/\\/', 'vless://');
                      //  r = r.replace('trojan:\\/\\/', 'trojan://');
                        o += `名称: ${s}\nURL: ${r}\n\n`;
                    });
                });

                console.log(o);

                if (typeof $notify !== 'undefined') {
                    $notify("VpnSecure 节点信息", "提取并已记录日志", "作者：@baby");
                } else if (typeof $notification !== 'undefined') {
                    $notification.post("VpnSecure 节点信息", "提取并已记录日志", "作者：@baby");
                }
            } catch (error) {
                console.log('解析订阅响应时出错: ', error.message);
            }
            $done();
        });
    } catch (error) {
        console.log('解析登录响应时出错: ', error.message);
        $done();
    }
});

function httpRequest(a, b) {
    if (typeof $httpClient !== 'undefined') {
        if (a.method === 'POST') {
            $httpClient.post(a, b);
        } else {
            $httpClient.get(a, b);
        }
    } else if (typeof $task !== 'undefined') {
        // Quantumult X
        a.method = a.method || 'GET';
        $task.fetch(a).then(response => {
            b(null, response, response.body);
        }, reason => {
            b(reason.error, null, null);
        });
    } else if (typeof $http !== 'undefined') {
        // Loon and Surge
        if (a.method === 'POST') {
            $httpClient.post(a, b);
        } else {
            $httpClient.get(a, b);
        }
    } else {
        console.log('不支持的请求环境');
        $done();
    }
}
