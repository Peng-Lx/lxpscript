/*************************************

项目功能：绘影字幕 解锁VIP
下载地址：https://t.cn/A6oe27Yx
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

^https:\/\/api\.bluepulse\.cn\/bluepulse-caption-server-front\/api\/v1\/\/user\/app-vip-info url script-response-body 
[mitm] 

hostname = api.bluepulse.cn

*************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);

chxm1023.data.isAppVip = 1;
chxm1023.appVipText = "永久VIP";
chxm1023.registerTime = 4092599350000;

body = JSON.stringify(chxm1023);
$done({body});
