/***
 脚本功能：天涯社区vip2
 脚本作者：66.66.66
 更新时间：66.66.66
 使用声明：⚠️仅供学习交流，🈲️商业用途
 脚本致谢：感谢作者的无私付出-Thanks👍
 **********************
 QX
 [rewrite_local]
 https:\//www.tianya.cn\/m\/vip\/ url script-response-body  
 
 **********************
 hostname = www.tianya.cn
 
 **********************
 
 Surge&loon
 [Scrip]
 http-response https:\//www.tianya.cn\/m\/vip\/ requires-body=1,max-size=0,script-path=
 
 ***/

 var body = $response.body
    .replace(/: <span/, ": 2099-12-31 <span");
$done({ body });
