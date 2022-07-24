/*
 *脚本功能：Byone_pre
 *脚本整理：Peng-Lx
      APP:  https://apps.apple.com/us/app/day-one-%E6%97%A5%E8%AE%B0-%E7%AC%94%E8%AE%B0/id1044867788?l=zh
      说明: 本脚本是 dayone.js 的附属脚本，需与主脚本配合使用。具体使用方式请查看主脚本说
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/dayone\.me\/api\/users$ url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Dayone-pre.js
 **********************
 *hostname = dayone.me
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/dayone\.me\/api\/users$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Dayone-pre.js
 */
 
 
 
 
 const headers = $request.headers
delete headers["If-None-Match"]
$done({headers})
