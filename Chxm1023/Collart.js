/*************************************

项目名称：Collart
下载地址：https://t.cn/A6KOxZ9O

项目名称：拼图趣
下载地址：https://t.cn/A6KOxIoD

项目名称：睡前故事大全
下载地址：https://t.cn/A6Uy3Kxo

项目名称：网速测速大师
下载地址：https://t.cn/A6KOx2xo

项目名称：测速管家
下载地址：https://t.cn/A6KOxyCH

项目名称：Pixelance
下载地址：https://t.cn/A6KOxcj9

使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

^https:\/\/iap\.etm\.tech\/receipts url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Collart.js

[mitm]

hostname = iap.etm.tech

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "entitlements" : [
    {
      "redeem" : {

      },
      "expires_date_ms" : 4092599349000,
      "purchase_date_ms" : 1671198216000,
      "product_identifier" : "Collart_Promium_Yearly_New_20220808",
      "is_in_intro_offer_period" : false,
      "environment" : "Production",
      "auto_renew" : false,
      "is_in_trial_period" : true,
      "entitlement_id" : "premium"
    }
  ],
  "is_valid" : true
}


$done({body : JSON.stringify(chxm1023)});
