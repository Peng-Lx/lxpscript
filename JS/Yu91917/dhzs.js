/*
66铃声
电话助手通杀 
[rewrite_local]
https://kkyun.com/api/(accounts|numbers|apps)/user url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/dhzs.js
[mitm]
hostname = kkyun.com

*/
$done({
    body: $response.body.replace(/("vip_status"\s*:\s*)0/g, '$12')
    .replace(/("is_vip"\s*:\s*)false/g, '$1true')
    .replace(/("vip_name"\s*:\s*")[^"]*"/g, '$1永久VIP"')
});
