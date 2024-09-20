/******************************
脚本功能：电话录音助手-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-08
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/call-recorder\.xinmengmakeji\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/luyin.js
[mitm] 
hostname = call-recorder.xinmengmakeji.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/api/user") != -1) {
    obj.data.phone = "afengye";
    obj.data.vip_expiry_date = "2999-01-01 00:00:00";
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
