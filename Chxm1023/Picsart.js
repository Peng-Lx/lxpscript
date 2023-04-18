/*************************************

项目功能：Picsart美易 解锁VIP
下载地址：https://t.cn/A6MxZ5q1
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

^https?:\/\/api\.meiease\.cn\/shop\/subscription\/validate url script-response-body 
[mitm] 

hostname = api.meiease.cn

*************************************/


var chxm1023={"warning":"仅供学习，禁止转载或售卖","tgchannel":"https://t.me/chxm1023","feedback":"chxm1023","status":"success","reason":"ok","response":{"purchase_date":1645263154000,"expire_date":4092599350000,"app":"com.picsart.editor","subscription_id":"com.picsart.editor.subscription_yearly","order_id":"300001048350229","original_order_id":"600001048350229","status":"SUBSCRIPTION_PURCHASED","is_trial":true,"winback_screen_id":1,"is_eligible_for_introductory":false,"plan_meta":{},"limitation":{"max_count":1000,"limits_exceeded":false},"is_eligible_for_grant":true}}

$done({body: JSON.stringify(chxm1023)});
