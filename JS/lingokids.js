/*
 *脚本功能：儿童英语lingokids VIP 
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/api\.lingokids\.com\/v1\/renovate_session$ url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/lingokids.js
 **********************
 *hostname = api.lingokids.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/api\.lingokids\.com\/v1\/renovate_session$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/lingokids.js
 */
 
 
 
var obj = JSON.parse($response.body);

obj["info"]["subscriptions"]= [
      {
        "status": "active",
        "product": "unlimited",
        "duration_unit": "months",
        "id": 805063,
        "platform": "apple",
        "duration_value": 1,
        "starts_at": 1572617692,
        "ends_at": 4099821292,
        "auto_renew_status": true,
        "plan_id": "lk.ios.s1m.t1m.p15.v1",
        "state": "active"
      }];

$done({body: JSON.stringify(obj)});

// Descriptions
