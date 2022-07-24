/*
 *脚本功能：Pdfexpert VIP
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/license\.pdfexpert\.com\/api\/1\.0\/pdfexpert6\/subscription\/(refresh$|check$) url script-response-body 
 **********************
 *hostname =  license.pdfexpert.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/license\.pdfexpert\.com\/api\/1\.0\/pdfexpert6\/subscription\/(refresh$|check$) requires-body=1,max-size=0,script-path=
 */
 
 
 
var obj= {
  "originalTransactionId": "20000618444996",
  "subscriptionState": "trial",
  "isInGracePeriod": false,
  "subscriptionExpirationDate": "13:15 03/11/2099",
  "subscriptionAutoRenewStatus": "autoRenewOn",
  "isEligibleForIntroPeriod": false,
  "isPDFExpert6User": false,
  "subscriptionReceiptId": "1572178404000"
};

$done({body: JSON.stringify(obj)});

//
