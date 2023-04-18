/*************************************

项目名称：极速汇率
下载地址：https://t.cn/A6ckbDYO
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

^https:\/\/explorer\.tratao\.com\/api\/client\/xtool\/vip url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/jjhl.js

[mitm]

hostname = explorer.tratao.com

*************************************/


var chxm1023 = JSON.parse($response.body);

    chxm1023 = {
  "status": "1",
  "data": [{
    "created": "2022-12-29 11:14:26",
    "update": "2022-12-29 11:14:43",
    "userId": "453464a9ee4c4fe26a1854bbce506049",
    "uuid": "A9DA3191-491A-4E71-88E4-FE0B2CBADF1D",
    "vipStatus": "paid",
    "vipLevel": "senior",
    "expire": "2099-09-09 09:09:09",
    "id": "ea3ba85d5c2e4e159f045019c60ace09",
    "vipPayType": "auto_sub",
    "vipPayUnit": "month",
    "vipPayNum": 1,
    "benefits": []
  }]
}

$done({body : JSON.stringify(chxm1023)});
