/***

脚本功能：FoMz——解锁VIP
下载地址：https://is.gd/faRUN2
软件版本：1.0.9
脚本作者：ioskoe



*******************************

[rewrite_local]

^https:\/\/fz68resapi\.imendon\.com\/v2\/purchase\/vip\/verification url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/FoMz.js

[mitm] 

hostname = fz68resapi.imendon.com



****/

body = $response.body.replace(/\"isValid":\d+/g, '\"isValid":1')

$done({body});
