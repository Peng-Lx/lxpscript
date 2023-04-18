/*************************************

项目名称：如期
下载地址：https://t.cn/A6KVkB2y
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

^https:\/\/www\.freshhome\.top url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/rq.js

[mitm]

hostname = www.freshhome.top

*************************************/


body = $response.body.replace(/\"isVip":"\d+"/g, '\"isVip":"1"').replace(/\"vipType":\w+/g, '\"vipType":true').replace(/\"vipEndTime":(.*?)/g, '\"vipEndTime":4092599350000')

$done({body});
