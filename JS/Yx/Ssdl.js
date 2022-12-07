/***
 脚本功能：射手大陆—9999装备等级
 下载地址：https://is.gd/fOOBsc V1.0.21
 脚本作者：Pyy
 更新时间：22.11.16
 使用声明：⚠️仅供学习交流，🈲️商业用途
 脚本致谢：感谢作者的无私付出-Thanks👍
 **********************
 QX
 [rewrite_local]
 ^https?:\/\/bowland\.bytedance\.com\/ohayoo\/lightboat\/bowland\/Equip\/GetAllEquips*? url script-response-body url script-response-body
 
 **********************
 hostname = bowland.bytedance.com
 
 **********************
 
 Surge&loon
 [Scrip]
 http-response ^https?:\/\/bowland\.bytedance\.com\/ohayoo\/lightboat\/bowland\/Equip\/GetAllEquips*? requires-body=1,max-size=0,script-path=
 
 ***/
 
 var body=$response.body;
body = body.replace(/"level\":\d+/g,'"level":9999');
$done(body);
