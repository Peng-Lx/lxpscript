/*************************************

项目名称：布丁锁屏
下载地址：https://t.cn/A6o11VGR
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************
 
[rewrite_local]

https?:\/\/screen-lock\.51wnl-cq\.com\/userApi\/saveUser url script-echo-response 

[mitm] 

hostname = screen-lock.51wnl-cq.com

*************************************/


var chxm1023 = {"returncode":"SUCCESS","errormsg":"","data":{"id":"chxm1023","nickName":"chxm1023","sign":"chxm1023","vipStatus":1,"endTime":2099,"exchangeCode":null,"expireDate":null}};
$done({body: JSON.stringify(chxm1023)});
