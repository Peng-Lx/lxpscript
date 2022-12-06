/*
 *脚本功能：Agenda 解锁Pro
 *脚本作者：Eric
 **********************
 *QX
 [rewrite_local]
 ^https://accounts.agenda.com/users/.*/license url script-response-body 
 **********************
 *hostname = accounts.agenda.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https://accounts.agenda.com/users/.*/license requires-body=1,max-size=0,script-path=

 */





let obj = JSON.parse($response.body);

obj = {
  "error": 0,
  "universalPurchaseAvailable": true,
  "informUserOfPendingBonus": false,
  "licenseStatus": 1,
  "isSubscribed": true,
  "unlockExpiry": 63114076800,
  "isSubscribedMobile": true,
  "licenseStatusMobile": 1,
  "unlockExpiryMobile": 63114076800
}
$done({body: JSON.stringify(obj)});
