/*
 *脚本功能：海豚记账 解锁内购 by superuv
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/book\.haitunwallet\.com\/app\/vip\/status url script-response-body 
 **********************
 *hostname = book.haitunwallet.com
 **********************
 
 *Surge&loon
 [Script]
 http-response https:\/\/book\.haitunwallet\.com\/app\/vip\/status requires-body=1,max-size=0,script-path=
 */
 
 var obj = JSON.parse($response.body);
 obj={
 "data": {
  "level": 2,
  "status": 1,
  "openTime": "2099-10-20",
  "startTime": "2099-10-20",
  "endTime": "2099-10-20",
  "shareToken": ""
 },
 "code": 0,
 "msg": "返回成功"
};
$done({body: JSON.stringify(obj)});
//
