/*
 *脚本功能：elevate VIP
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/accounts\.elevateapp\.net\/api\/users\?user%5Bauthentication_token* url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/langkhach/elevate.js
 **********************
 *hostname =  accounts.elevateapp.net
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/accounts\.elevateapp\.net\/api\/users\?user%5Bauthentication_token* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/langkhach/elevate.js
 */
 
 
 
var obj = JSON.parse($response.body);
obj.user.is_on_free_trial= false;
obj.user.subscription_expiration_date_epoch= 4100909894;
obj.user.current_subscription= {
"sku": "com.elevateapp.elevate.renewable.year_subscription_16",
 "duration": "annual",
 "store": "App Store"
 };
 obj.user.can_purchase= false;

$done({body: JSON.stringify(obj)});
