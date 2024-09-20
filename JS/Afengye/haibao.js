/******************************
脚本功能：海报制作大师-游客登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-23
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/dcdnposter\.leminet\.cn\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/haibao.js
[mitm] 
hostname = dcdnposter.leminet.cn
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe); 

if($request.url.indexOf("/v01/login") != -1 || $request.url.indexOf("/v02/user/endpoint") != -1 || $request.url.indexOf("/v01/profile") != -1) {
    obj.data.vip = true;
    obj.data.vip_expire = 32472115200;
}


aFengYe = JSON.stringify(obj);
$done(aFengYe);
