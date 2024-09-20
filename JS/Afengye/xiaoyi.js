/******************************
脚本功能：彩云小译-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-24
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/interpreter\.cyapi\.cn\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/xiaoyi.js
[mitm] 
hostname = interpreter.cyapi.cn
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/v1/user") != -1) {
    var vipInfo = {
      "xy_vip_type": "s",
      "xy_svip_expire": 32472115200,
      "is_xy_vip": true,
      "name": "afengye",
      "xy_vip_expire": 32472115200,
      "svip_expired_at": 32472115200,
      "vip_type": "s",
      "username": "afengye"
    };
    let key;
    for(key in obj.user){
        if (vipInfo.hasOwnProperty(key)) {
            obj.user[key] = vipInfo[key];
        }
    }

    for(key in obj.user.biz){
        if (vipInfo.hasOwnProperty(key)) {
            obj.user.biz[key] = vipInfo[key];
        }
    }
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
