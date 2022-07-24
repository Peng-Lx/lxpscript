/*
 *脚本功能：camera360 VIP
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/bmall\.camera360\.com\/api\/(iap\/check-receipt$|mix\/getinfo$) url script-response-body 
 **********************
 *hostname =  bmall.camera360.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/bmall\.camera360\.com\/api\/(iap\/check-receipt$|mix\/getinfo$) requires-body=1,max-size=0,script-path=
 */
 
 
 
var obj = JSON.parse($response.body);
obj=
{
  "status": 200,
  "data": {
    "sandbox": 1,
    "purchaseTime": 1571682188,
    "giftVip": 0,
    "productId": "VIP_yearly_29.99",
    "appleVip": 1,
    "expireTime": 4096532852,
    "operationVip": 1,
    "errorCode": 0
  },
  "message": "ok",
  "exetime": "1572056389212-1572056391362",
  "serverTime": 1572056391.3622
};
$done({body: JSON.stringify(obj)});
