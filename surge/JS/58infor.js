/***
 脚本功能：58同城 vip
 脚本作者：66.66.66
 更新时间：66.66.66
 使用声明：⚠️仅供学习交流，🈲️商业用途
 脚本致谢：感谢作者的无私付出-Thanks👍
 **********************
 QX
 [rewrite_local]
 ^https:\//passport.58.com\/58\/user/\info url script-response-body  
 
 **********************
 hostname = passport.58.com
 
 **********************
 
 Surge&loon
 [Scrip]
 http-response ^https:\//passport.58.com\/58\/user/\info requires-body=1,max-size=0,script-path=
 
 ***/
var body = $response.body
    .replace(/\"isVip\":false/, "\"isVip\":true");
$done({ body });
