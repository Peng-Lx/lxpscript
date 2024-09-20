/******************************
脚本功能：青柠设计-登陆后解锁会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-30
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.qingning6\.com\/api\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/qnsj.js
[mitm] 
hostname = api.qingning6.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var vipInfo = {
   "vipDays": 99999,
   "expiredVipDays": 99999,
   "vipExpireTime": "2999-01-01 00:00:00",
   "hasPayVip": 1,
   "isForeverVip": 1,
   "isVip": 1,
   "isTeamUserVip": 1,
   "teamVipExpireTime": "2999-01-01 00:00:00",
   "isForeverVip": 1,
   "professionalVipExpireTime": "2999-01-01 00:00:00",
   "companyVipExpireTime": "2999-01-01 00:00:00"
}

for (let key in obj.result) {
  if (vipInfo.hasOwnProperty(key)) {
     obj.result[key] = vipInfo[key]
  }
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
