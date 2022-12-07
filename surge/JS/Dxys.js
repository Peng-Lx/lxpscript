/***
 脚本功能：丁香医生vip 
 脚本作者：66.66.66
 更新时间：66.66.66
 使用声明：⚠️仅供学习交流，🈲️商业用途
 脚本致谢：感谢作者的无私付出-Thanks👍
 **********************
 QX
 [rewrite_local]
 ^https:\//dxy.com\/app\/i\/user\/ask\/account\?ac url script-response-body  
 
 **********************
 hostname = dxy.com
 
 **********************
 
 Surge&loon
 [Scrip]
 http-response ^https:\//dxy.com\/app\/i\/user\/ask\/account\?ac requires-body=1,max-size=0,script-path=
 
 ***/
 var body = $response.body
    .replace(/\"status\":9/, "\"status\":0")
    .replace(/\"expire_timestamp\":0/, "\"expire_timestamp\":4102415999000");
$done({ body });
