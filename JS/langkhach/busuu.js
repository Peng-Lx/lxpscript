/*
 *脚本功能：busuu VIP
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/api\.busuu\.com\/users\/me* url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/langkhach/busuu.js
 **********************
 *hostname =  api.busuu.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/api\.busuu\.com\/users\/me* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/langkhach/busuu.js
 */
 
 
 
var obj = JSON.parse($response.body);
obj.data.is_premium= true;
obj.data.access.tier= "plus";
$done({body: JSON.stringify(obj)});
