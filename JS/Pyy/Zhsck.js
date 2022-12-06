/***
脚本功能：中华诗词库 解锁VIP
下载地址：https://is.gd/9mxCMB
软件版本：1.7
脚本作者：Pyy

***
QX
[rewrite_local]
http:\/\/api\.chuangqi\.store\/ url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Pyy/Zhsck.js
*******************************
[mitm] 
hostname = api.chuangqi.store
*******************************
Surge&loon
[Script]
http-response http:\/\/api\.chuangqi\.store\/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Pyy/Zhsck.js

***/

body = $response.body.replace(/\"vip_end_time":\w+/g, '\"vip_end_time":4099040228000').replace(/\"is_ad_vip":\d+/g, '\"is_ad_vip":1').replace(/\"isvip":\d+/g, '\"isvip":1')
$done({body});
