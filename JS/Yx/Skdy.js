/***
 脚本功能：实况钓鱼 无限金币
 下载地址：微信小程序
 脚本作者：Pyy
 更新时间：22.10.08
 使用声明：⚠️仅供学习交流，🈲️商业用途
 脚本致谢：感谢作者的无私付出-Thanks👍
 **********************
 QX
 [rewrite_local]
 ^https:\/\/dev\.fish\.17fish\.cool:6008\/api\/livefishing\/v10\/getProgress url script-response-body url script-response-body
 
 **********************
 hostname = dev.fish.17fish.cool
 
 **********************
 
 Surge&loon
 [Scrip]
 http-response ^https:\/\/dev\.fish\.17fish\.cool:6008\/api\/livefishing\/v10\/getProgress requires-body=1,max-size=0,script-path=
 
 ***/

body = $response.body.replace(/\"gold":\d+/g, '\"gold":9999999999')


$done({body});
