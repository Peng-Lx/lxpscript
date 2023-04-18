/*************************************

项目名称：猫头鹰文件
下载地址：https://t.cn/A6Kotbjs
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]
^https:\/\/www\.skyjos\.cn url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mtywj.js

[mitm]

hostname = www.skyjos.cn

*************************************/


body = $response.body.replace(/\"memberLevel":(.*?)/g, '\"memberLevel":3').replace(/\"succ":"(.*?)"/g, '\"succ":"true"').replace(/\"dispName":"(.*?)"/g, '\"dispName":"chxm1023"').replace(/\"expireAt":"(.*?)"/g, '\"expireAt":"4092599349000"')

$done({body});
