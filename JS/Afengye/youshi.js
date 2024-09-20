/******************************
脚本功能：有诗-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-28
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/youshiapp\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/youshi.js
[mitm] 
hostname = youshiapp.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/api/v1/users/me") != -1) {
    obj.is_lifetime_member = obj.is_member = true;
    obj.member_expired_at = 32472115200;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
