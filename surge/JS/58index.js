/***
 脚本功能：58同城 vip
 脚本作者：66.66.66
 更新时间：66.66.66
 使用声明：⚠️仅供学习交流，🈲️商业用途
 脚本致谢：感谢作者的无私付出-Thanks👍
 **********************
 QX
 [rewrite_local]
 ^https:\//app.58.com\/api\/ucenter\/v2\/index url script-response-body url script-response-body
 
 **********************
 hostname = app.58.com
 
 **********************
 
 Surge&loon
 [Scrip]
 http-response ^https:\//app.58.com\/api\/ucenter\/v2\/index requires-body=1,max-size=0,script-path=
 
 ***/
 
 var body = $response.body
    .replace(/\"is_vip\":false/, "\"is_vip\":true");
$done({ body });
