/*
 *脚本功能：Jibjab VIP
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user$ url script-response-body 
 **********************
 *hostname = api.memrise.com 
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user$) requires-body=1,max-size=0,script-path=
 */
 
 
let obj = JSON.parse($response.body);
obj.data.attributes["is-paid"] = true;
$done({body: JSON.stringify(obj)});

//bynobyda
