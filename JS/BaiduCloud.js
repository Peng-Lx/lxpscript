/*
 *脚本功能：百度网盘解锁vip，视频倍速播放
 *脚本整理：Peng-Lx
 *使用声明：⚠️仅供学习交流，🈲️商业用途
 **********************
 *QX
 [rewrite_local]
 ^ https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/BaiduCloud.js
 **********************
 *hostname =pan.baidu.com
 **********************
 
 *Surge&loon
 [Script]
 http-re https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/BaiduCloud.js
 */
let obj = JSON.parse($response.body);
obj = {
  "product_infos": [{
    "product_id": "5310897792128633390",
    "start_time": 1417260485,
    "end_time": 2147483648,
    "buy_time": "1417260485",
    "cluster": "offlinedl",
    "detail_cluster": "offlinedl",
    "product_name": "gz_telecom_exp"
  }, {
    "product_name": "svip2_nd",
    "product_description": "超级会员",
    "function_num": 0,
    "start_time": 1553702399,
    "buy_description": "",
    "buy_time": 0,
    "product_id": "1",
    "auto_upgrade_to_svip": 0,
    "end_time": 1672502399,
    "cluster": "vip",
    "detail_cluster": "svip",
    "status": 0
  }],
  "currenttime": 1573473597,
  "reminder": {
    "reminderWithContent": [],
    "advertiseContent": []
  },
  "request_id": 7501873289383874371
};
$done({body: JSON.stringify(obj)});
