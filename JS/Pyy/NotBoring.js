/***
 脚本功能：Not Boring 解锁订阅+全家桶
 下载地址：https://is.gd/LGpKsj V2.12
 脚本作者：Pyy
 更新时间：22.11.17
 使用声明：⚠️仅供学习交流，🈲️商业用途
 脚本致谢：感谢作者的无私付出-Thanks👍
 **********************
 QX
 [rewrite_local]
 https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body  
 
 **********************
 hostname = api.revenuecat.com
 **********************
 
 Surge&loon
 [Scrip]
 http-response https://api.revenuecat.com/v1/(receipts|subscribers)/* requires-body=1,max-size=0,script-path=
 
 ***/
 
 var objc = JSON.parse($response.body);

    objc = 
{
  "request_date_ms" : 1668658838144,
  "request_date" : "2022-11-17T04:20:38Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-11-17T04:18:00Z",
    "original_application_version" : "0",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.andyworks.weather.yearlyPatron" : {
        "original_purchase_date" : "2022-11-17T04:20:11Z",
        "expires_date" : "9999-11-24T04:20:10Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2022-11-17T04:20:10Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "patron" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "9999-11-24T04:20:10Z"
      },
      "skinAndy" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "9999-11-24T04:20:10Z"
      },
      "skinMonster" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "9999-11-24T04:20:10Z"
      },
      "skinCedar" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "9999-11-24T04:20:10Z"
      },
      "skinKarat" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "9999-11-24T04:20:10Z"
      },
      "skinOpal" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "9999-11-24T04:20:10Z"
      },
      "skinPresstube" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "2022-11-24T04:20:10Z"
      },
      "skinChroma" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "9999-11-24T04:20:10Z"
      }
    },
    "original_purchase_date" : "2022-09-28T06:34:53Z",
    "original_app_user_id" : "3D04B7A9-A5AF-44B9-9E0D-BCFF427C36A5",
    "last_seen" : "2022-11-17T04:18:00Z"
  }
}

$done({body : JSON.stringify(objc)});
