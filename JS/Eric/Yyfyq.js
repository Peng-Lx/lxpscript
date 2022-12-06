/*
 脚本功能：语音翻译器
 脚本作者：Eric
 使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，禁止转载与贩卖！⚠️⚠️⚠️
 **********************
 *QX
 [rewrite_local]
 https://app.xunjiepdf.com/api/v4/memprofile url script-response-body 
 **********************
 *hostname = app.xunjiepdf.co
 **********************
 
 *Surge&loon
 [Script]
 http-response https://app.xunjiepdf.com/api/v4/memprofile requires-body=1,max-size=0,script-path=
 */
 
 
 let obj = JSON.parse($response.body);

obj.userinfo.vip = [{"id":11351014,"auth_type":1,"auth_value":4258741258}]
$done({body: JSON.stringify(obj)});
