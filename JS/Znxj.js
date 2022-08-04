/*
 *脚本功能：EMBY
 *脚本整理：Peng-Lx
      FROM：
 **********************
 *QX
 [rewrite_local]
^https:\/\/app\.xunjiepdf\.com\/api\/v4\/virtualactregister url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Znxj.js
 **********************
 *hostname = app.xunjiepdf.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/app\.xunjiepdf\.com\/api\/v4\/virtualactregister requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Znxj.js
 
 */
 
 

var obj = JSON.parse($response.body);
 obj={
  "vip": [
   {
    "id": 9005757,
    "auth_type": 1,
    "auth_value": 1999999999
   }
  ]
};
$done({body: JSON.stringify(obj)});
