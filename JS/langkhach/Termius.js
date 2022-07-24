/*
 *脚本功能：Termius unlocks local pro By@Maasea
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/langkhach/Termius.js
 **********************
 *hostname = api.termius.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/langkhach/Termius.js
 */
 
 
 
let obj=JSON.parse($response.body)
obj.account["pro_mode"] = true;
obj.account["plan_type"] = "Premium";
obj.account["user_type"] = "Premium";
obj.account["current_period"]["until"] = "2099-10-10T03:27:34";
$done({body:JSON.stringify(obj)})
