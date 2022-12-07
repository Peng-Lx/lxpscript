/*
 *脚本功能：mondly
 *脚本整理：Peng-Lx
 *使用声明：⚠️仅供学习交流，🈲️商业用途
 *脚本致谢：感谢作者的无私付出-Thanks👍
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/api\.mondlylanguages\.com\/v1\/ios\/user\/sync$ url script-response-body 
 **********************
 *hostname =  api.mondlylanguages.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/api\.mondlylanguages\.com\/v1\/ios\/user\/sync$ requires-body=1,max-size=0,script-path=
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
