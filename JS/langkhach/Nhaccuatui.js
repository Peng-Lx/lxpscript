/*
 *脚本功能：Nhaccuatui
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/graph\.nhaccuatui\.com\/.*\/users\/info* url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/langkhach/Nhaccuatui.js
 **********************
 *hostname = graph.nhaccuatui.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/graph\.nhaccuatui\.com\/.*\/users\/info* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/langkhach/Nhaccuatui.js
 */
 
 
 
var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "users/info";
if(url.indexOf(cons) != -1)
{
obj.data.VIPExpire= "27/03/9999 00:00:00";
obj.data.isVIP= true;
}
$done({body: JSON.stringify(obj)});
