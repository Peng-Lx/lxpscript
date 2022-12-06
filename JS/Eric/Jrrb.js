/*
 脚本功能：今日热榜
 脚本作者：Eric
 使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，禁止转载与贩卖！⚠️⚠️⚠️
 **********************
 *QX
 [rewrite_local]
 ^https://api2.tophub.app/account/sync url script-response-body 
 **********************
 *hostname = api2.tophub.app
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https://api2.tophub.app/account/sync requires-body=1,max-size=0,script-path=
 */


let obj = JSON.parse($response.body);

obj = {
  "error": false,
  "data": {
    "vip_expired": "2566584780",
    "is_vip_now": true,
    "is_vip": "1"
  },
  "status": 200
}
$done({body: JSON.stringify(obj)});
