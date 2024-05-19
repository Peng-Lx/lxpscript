/*
赛盾加速器@Rnik666

‎

[rewrite_local]
^http:\/\/api\.(saidu\.services|ztvbox\.com)\/saidun\/version2\/v2_detail url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/SDJSQ.js

[MITM]
hostname = api.saidu.services,api.ztvbox.com

*/
var Rnik = JSON.parse($response.body);
Rnik = {
  "result" : {
    "partyGet" : true,
    "rightsMold" : 3,
    "man" : 0,
    "is_share_vip" : 1,
    "is_temp_vip" : 2,
    "prenew_time" : "1小时",
    "shiledPt" : "li123456",
    "peopleValue" : 60,
    "gain_user" : 1,
    "device_count" : 0,
    "web_url" : "http:\/\/www.aentos.com\/zz.html?s=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTU4NzkyOTcsInJvbGUiOiJXRUIiLCJ1aWQiOiIyNjYyMzA5OSJ9.3A2bX8hC8Rqwt038tBGcMWePXUdGCbXwuJU13su0qSI",
    "effectivity" : 1,
    "is_kf" : "on",
    "rightsTimes" : 4787111230,
    "ios_appstore" : 1,
    "shiled" : 18,
    "ctString" : "http:\/\/xkf.zhimakf.com\/s\/106863qe5i?nickName=26623099",
    "id" : 26623099,
    "is_audit_mode" : 0,
    "customer" : "rnik666666@Gmail.com",
    "is_flow_close" : 1,
    "is_world_open" : 1,
    "Interface" : 0,
    "mold" : 2
  },
  "code" : 200,
  "remark" : "成功"
}
  
  
  
$done({ body: JSON.stringify(Rnik) });
