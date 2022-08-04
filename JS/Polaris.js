/*
 *脚本功能：Polaris Office解锁订阅
 *脚本整理：Peng-Lx
      FROM：By Hausd0rff
 **********************
 *QX
 [rewrite_local]
 ^https?:\/\/api\.polarisoffice\.com\/api\/1\/account\/userinfo$ url script-response-body 
 **********************
 *hostname = api.polarisoffice.com

 **********************
 
 *Surge&loon
 [Script]^https?:\/\/api\.polarisoffice\.com\/api\/1\/account\/userinfo$ url requires-body=1,max-size=0,script-path=
 
 */
 
 
 var body = $response.body;
var objc = JSON.parse(body);
objc.level = 2;
body = JSON.stringify(objc);
$done(body);
