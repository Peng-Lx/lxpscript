/***
 脚本功能：天涯社区vip
 脚本作者：66.66.66
 更新时间：66.66.66
 使用声明：⚠️仅供学习交流，🈲️商业用途
 脚本致谢：感谢作者的无私付出-Thanks👍
 **********************
 QX
 [rewrite_local]
 ^https:\//www.tianya.cn\/api\/vas\?method=vipUser.isVipUser url script-response-body  
 
 **********************
 hostname = www.tianya.cn
 
 **********************
 
 Surge&loon
 [Scrip]
 http-response ^https:\//www.tianya.cn\/api\/vas\?method=vipUser.isVipUser requires-body=1,max-size=0,script-path=
 
 ***/

 var body = $response.body
    .replace(/\"isVipUser\":false/, "\"isVipUser\":true,\"expireTime\":4102415999000");
$done({ body });
