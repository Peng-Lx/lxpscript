/*
 *脚本功能：Picsew 解锁专业版
 *脚本整理：Peng-Lx
      FROM：By Hausd0rff
 **********************
 *QX
 [rewrite_local]
 ^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Picsewpro.js
 **********************
 *hostname = buy.itunes.apple.com

 **********************
 
 *Surge&loon
 [Script]
 http-response ^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Picsewpro.js
 
 */
 
 
 var objc = JSON.parse($response.body);
      
    objc = 
{
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1208145167,
    "app_item_id": 1208145167,
    "bundle_id": "com.sugarmo.ScrollClip",
    "application_version": "3111",
    "download_id": 75039104621192,
    "version_external_identifier": 845742650,
    "receipt_creation_date": "2021-12-20 00:59:16 Etc/GMT",
    "receipt_creation_date_ms": "1639961956000",
    "receipt_creation_date_pst": "2021-12-19 16:59:16 America/Los_Angeles",
    "request_date": "2021-12-20 01:03:52 Etc/GMT",
    "request_date_ms": "1639962232562",
    "request_date_pst": "2021-12-19 17:03:52 America/Los_Angeles",
    "original_purchase_date": "2018-11-13 13:54:02 Etc/GMT",
    "original_purchase_date_ms": "1542117242000",
    "original_purchase_date_pst": "2018-11-13 05:54:02 America/Los_Angeles",
    "original_application_version": "2911",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.sugarmo.ScrollClip.pro",
      "transaction_id": "350000551516724",
      "original_transaction_id": "350000551516724",
      "purchase_date": "2019-11-29 00:08:37 Etc/GMT",
      "purchase_date_ms": "1574986117000",
      "purchase_date_pst": "2019-11-28 16:08:37 America/Los_Angeles",
      "original_purchase_date": "2019-11-29 00:08:37 Etc/GMT",
      "original_purchase_date_ms": "1574986117000",
      "original_purchase_date_pst": "2019-11-28 16:08:37 America/Los_Angeles",
      "is_trial_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt": "5L2c6ICFQGtpbmc=",
  "environment": "Production",
  "status": 0
};

$done({body: JSON.stringify(objc)});
 
