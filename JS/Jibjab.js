/*
 *脚本功能：Jibjab VIP
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user$ url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Jibjab.js
 **********************
 *hostname = api.memrise.com 
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user$) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Jibjab.js
 */
 
 
let obj = JSON.parse($response.body);
obj.data.attributes["is-paid"] = true;
$done({body: JSON.stringify(obj)});

//bynobyda
