/***
 脚本功能：超神小队 解锁金币
 下载地址：微信小程序:超神小队
 脚本作者：Pyy
 更新时间：22.11.16
 使用声明：⚠️仅供学习交流，🈲️商业用途
 脚本致谢：感谢作者的半无私付出-Thanks👍
 **********************
 QX
 [rewrite_local]
 ^https:\/\/gjyklslb\.mantianfei\.net url script-response-body url script-response-body
 
 **********************
 hostname = gjyklslb.mantianfei.net
 
 **********************
 
 Surge&loon
 [Scrip]
 http-response ^https:\/\/gjyklslb\.mantianfei\.net requires-body=1,max-size=0,script-path=
 
 ***/

body = $response.body.replace(/\"num":\d+/g, '\"num" :9999999')

$done({body});
