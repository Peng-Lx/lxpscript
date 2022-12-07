/***
 脚本功能：脉脉vip 
 脚本作者：66.66.66
 更新时间：66.66.66
 使用声明：⚠️仅供学习交流，🈲️商业用途
 脚本致谢：感谢作者的无私付出-Thanks👍
 **********************
 QX
 [rewrite_local]
 ^https:\//open.taou.com\/maimai\/member\/uh\/get_member_info_ios_v3 url script-response-body  
 
 **********************
 hostname = open.taou.com
 
 **********************
 
 Surge&loon
 [Scrip]
 http-response ^https:\//open.taou.com\/maimai\/member\/uh\/get_member_info_ios_v3 requires-body=1,max-size=0,script-path=
 
 ***/
 var body = $response.body
    .replace(/\"real_expire_time.*?activity\"/, "\"real_expire_time\": \"999\\u5929\\u540e\\u5230\\u671f\", \"real_expire_days\": 999, \"expire_time_list\": [{\"name\": \"\\u804c\\u573aVIP\\u4f1a\\u5458\", \"expire_time\": \"2099-12-31\\u5230\\u671f\"}]}, \"activity\"");
$done({ body });
