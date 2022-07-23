/*
 *脚本功能：peak解锁pro
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/billing\.peakcloud\.org\/billing\/2\/user\/me? url script-response-body https://raw.githubusercontent.com/PF2022/Peng-Lx/master/Script/Surge/Lxp/peak.js
 
 **********************
 *hostname = billing.peakcloud.org
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/billing\.peakcloud\.org\/billing\/2\/user\/me? requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/PF2022/Peng-Lx/master/Script/Surge/Lxp/peak.js
*/
 
 
 
let obj=JSON.parse($response.body);
obj={
  "response": {
    "bbuid": "NKoKXsjJnw",
    "usedIntroOfferPeriod": false,
    "class": "UserModuleBillingResponse",
    "is_in_billing_retry": false,
    "modules": [{
      "class": "BillingModuleResponse",
      "name": "com.brainbow.module.peak.PeakModule",
      "subscription": {
        "status": 0,
        "statusdate": 0,
        "source": {
          "id": "com.brainbow.peak.arsub_1wtrial_12m3499",
          "cancelable": false,
          "provider": "itunes",
          "type": "trial"
        },
        "bbuid": "NKoKXsjJnw",
        "endTime": 1899724030000,
        "startTime": 1577884030503,
        "pro": true
      }
    }]
  },
  "metaResponse": {
    "code": 0
  }
}


$done({body: JSON.stringify(obj)})
