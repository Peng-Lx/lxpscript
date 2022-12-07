/*
 *脚本功能：calm VIP
 *脚本整理：Peng-Lx
 *脚本作者：langkhach
 *使用声明：⚠️仅供学习交流，🈲️商业用途
 *脚本致谢：感谢作者的无私开源-Thanks👍
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/api\.calm\.com\/me$ url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/langkhach/Calm.js
 **********************
 *hostname =  api.calm.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/api\.calm\.com\/me$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/langkhach/Calm.js
 */
 
 
 
var obj = JSON.parse($response.body);

obj["subscription"]= {
  "in_free_trial_window": true,
  "subscription_plan": "com.calm.yearly.trial.one_week.usd_50",
  "began": "2019-04-22T12:12:54.000Z",
  "is_lifetime": true,
  "valid": true,
  "is_renewable": true,
  "is_in_billing_retry_period": false,
  "will_renew": true,
  "expires": "2099-04-29T12:12:54.000Z",
  "user_id": "KgagpU1URv",
  "type": "ios",
  "is_canceled": false,
  "free_trial_began": "2019-04-22T12:12:54.000Z",
  "coupon_used": false,
  "has_ever_done_free_trial": true,
  "is_free": false,
  "ios_details": {
    "product_id": "com.calm.yearly.trial.one_week.usd_50",
    "began": "2019-04-22T12:12:54.000Z",
    "is_free_trial": true,
    "id": "540000370675471",
    "is_canceled": false,
    "is_renewable": true,
    "free_trial_ended": "2099-04-29T12:12:54.000Z",
    "free_trial_began": "2019-04-22T12:12:54.000Z",
    "will_renew": true,
    "original_transaction_id": "540000370675471",
    "expires": "2099-04-29T12:12:54.000Z"
  },
  "free_trial_ended": "2099-04-29T12:12:54.000Z"
};

$done({body: JSON.stringify(obj)});
