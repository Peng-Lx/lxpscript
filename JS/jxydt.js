/*
 *脚本功能：peak解锁pro
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
^https:\/\/vipapi\.jxedt\.com\/vip\/check url script-response-body https://raw.githubusercontent.com/PF2022/Peng-Lx/master/Script/Surge/Lxp/jxydt.js
 
 **********************
 *hostname = vipapi.jxedt.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/vipapi\.jxedt\.com\/vip\/check requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/PF2022/Peng-Lx/master/Script/Surge/Lxp/jxydt.js
*/
 
 
 
var obj = JSON.parse($response.body);
 obj= {
 "code": 0,
 "msg": "OK",
 "result": {
  "vipstatus": 1,
  "isexpert": true,
  "endtime": "2028-11-02",
  "vipType": 0,
  "begintime": "2019-11-03",
  "isRenewals": 1,
  "vipLevel": 0,
  "openCourseIds": [],
  "choreographySkills": 0,
  "has_append_service": 0,
  "vipDaysOverdue": -1,
  "vipResidualDay": 999,
  "imeiVIPOrderBindStatus": 1
 }
};
$done({body: JSON.stringify(obj)});
