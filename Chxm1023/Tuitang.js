/*************************************

项目功能：推糖 解锁VIP
下载地址：https://t.cn/Ai3pMcdl
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

^https:\/\/api\.duitang\.com\/napi url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/tuitang.js

[mitm] 

hostname = api.duitang.com

*************************************/

body = $response.body.replace(/\"vip":\w+/g, '\"vip":true').replace(/\"is_life_artist":\w+/g, '\"is_life_artist":true').replace(/\"isnew":\w+/g, '\"isnew":true').replace(/\"short_video":\w+/g, '\"short_video":true').replace(/\"vip_end_at_mills":\d+/g, '\"vip_end_at_mills":4092599350000').replace(/\"vip_level":\d+/g, '\"vip_level":11').replace(/\"is_certify_user":\w+/g, '\"is_certify_user":true').replace(/\"be_follow_count":\d+/g, '\"be_follow_count":1000000').replace(/\"follow_count":\d+/g, '\"follow_count":1000000').replace(/\"score":\d+/g, '\"score":1000000')


$done({body});
