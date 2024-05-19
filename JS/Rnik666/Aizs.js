/*AI助手@Rnik666

[rewrite_local] 
^https?:\/\/ainvud\.mingnianbaofu\.top\/api\/app\/user\/getCurrentInfo url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/AIZS.js

[MITM]
hostname = ainvud.mingnianbaofu.top

*/
var Rnik = JSON.parse($response.body);
Rnik = {
  "msg" : "ok",
  "data" : {
    "vipStatus" : "1",
    "id" : "1788002361411280897",
    "vipLabel" : "4",
    "nickname" : "Rnik666",
    "imgNum" : 99999999,
    "avatar" : "https://oss.yhxykj.com/im-prod/2024/05/08/aaf3b5dd36744a359f75ba110780f67c.png"
  },
  "code" : 200
}

  
  
  
$done({ body: JSON.stringify(Rnik) });
