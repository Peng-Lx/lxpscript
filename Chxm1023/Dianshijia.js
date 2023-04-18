/*************************************

项目名称：电视家
下载地址：https://t.cn/A6KxaEw8
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

http:\/\/123\.56\.125\.184\/api\/v3\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/dsj.js

*************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);

chxm1023.data.equityTime = 4092599349000;
chxm1023.data.adEquityTime = 4092599349000;
chxm1023.data.exclusiveTime = 4092599349000;

$done({body : JSON.stringify(chxm1023)});
