/*************************************

项目名称：格式转换
下载地址：https://t.cn/A6KtskIp
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

http:\/\/format-api\.netpock\.com\/api\/user_info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/gszh.js

[mitm]

hostname = format-api.netpock.com

*************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);

chxm1023.data.is_vip = true;
chxm1023.data.wps_size = 999;
chxm1023.data.vip_expiration_time = 4092599350;

$done({body : JSON.stringify(chxm1023)});
