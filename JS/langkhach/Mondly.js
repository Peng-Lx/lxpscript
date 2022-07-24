/*
 *脚本功能：mondly VIP
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/api\.mondlylanguages\.com\/v1\/ios\/user\/sync$ url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/langkhach/Mondly.js
 **********************
 *hostname =  api.mondlylanguages.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/api\.mondlylanguages\.com\/v1\/ios\/user\/sync$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/langkhach/Mondly.js
 */
 
 
 
var obj = JSON.parse($response.body);

obj["pucharses"]= [10];
obj["subscriptions"]=  {
  "10": "2099-09-09 05:05:05"
};
obj["subscription"]=  {
  "10": "2099-09-09 05:05:05"
};
obj["parsed_transactions"]= [
  "540000370283138"
];
$done({body: JSON.stringify(obj)});
