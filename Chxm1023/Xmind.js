/*************************************

项目名称：Xmind-思维导图 解锁VIP
下载地址：https://t.cn/AipCL5zE
脚本作者：chxm1023
功能说明：一次性解锁
使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：先登录Xmind账号在恢复购买

**************************************

[rewrite_local]
^https?:\/\/www\.xmind\.cn\/.+\/devices url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Xmind.js

[mitm]
hostname = www.xmind.cn

*************************************/


var chxm1023 = JSON.parse($response.body);
  chxm1023.raw_data = "f5g8N9+a8Dt298AGhRitN0KohTeeRjBFR4uWMnYSQMQ8LEXN06XRL8lozul9+/UOG4ZQhIaEQMbkMWh2R9uC0YmsTE0NM9tL9DfUrkVo6d8MxdMS9NLZd5nMt7DdvFe01dqnfLGlbm5a4Wd0HKj8Eh8RI0pMnspbxEIEeBJJ2VI=";
  chxm1023.license = {
    "status": "Trial",
    "expireTime": 4092599349000
  };

$done({body : JSON.stringify(chxm1023)});
