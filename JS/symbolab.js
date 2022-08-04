/*
 *脚本功能：Symbolab 解锁高级功能 (需登录
 *脚本整理：Peng-Lx
      FROM：By 吾爱破解论坛 云在天
 **********************
 *QX
 [rewrite_local]
 ^https?:\/\/scibug\.com\/appleSubscriptionValidate$ url script-response-body 
 **********************
 *hostname = scibug.com

 **********************
 
 *Surge&loon
 [Script]
  http-response ^https?:\/\/scibug\.com\/appleSubscriptionValidate$ url requires-body=1,max-size=0,script-path=
 
 */
 
 
 let obj = JSON.parse($response.body);

obj= {"valid":true,"hasUserConsumedAppleFreeTrial":false,"isCurrentlyInFreeTrial":false,"newlyAssociated":false,"membership":{"isCurrentlyInFreeTrial":false,"valid":true,"hasUserConsumedAppleFreeTrial":false,"newlyAssociated":false}}

$done({body: JSON.stringify(obj)});
