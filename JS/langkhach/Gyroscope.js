/*
 *脚本功能：Gyroscope unlock pro
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/api\.gyrosco\.pe\/v1\/account\/$ url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/langkhach/Gyroscope.js
 **********************
 *hostname = api.gyrosco.pe
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/api\.gyrosco\.pe\/v1\/account\/$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/langkhach/Gyroscope.js
 */
 
 
 
 let obj = JSON.parse($response.body);
obj.user["active_until_time"] = "2099-01-01T00:00:00Z";
$done({body: JSON.stringify(obj)});
 
