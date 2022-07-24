/*
 *脚本功能： 个性化音景 endel
 *脚本整理：Peng-Lx
       APP:https://apps.apple.com/us/app/endel-focus-sleep-relax/id1346247457?l=zh
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/api-production\.endel\.io\/.*\/user$ url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/endel.js
 **********************
 *hostname = api-production.endel.io
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/api-production\.endel\.io\/.*\/user$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/endel.js
 
*/
 
 var obj = JSON.parse($response.body);

obj["subscription_info"]= {
    "type" : "IOS",
    "valid_until" : 1873089612.367564
    };

$done({body: JSON.stringify(obj)});

// Descriptions
