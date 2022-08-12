/*
 *脚本功能：迅雷VIP
 *脚本整理：Peng-Lx
      FROM：
 **********************
 *QX
 [rewrite_local]
 ^http-response,pattern=^https:\/\/xluser-ssl\.xunlei\.com\/xluser\.core\.login\/v3\/getuserinfo$ script-response-body 
 **********************
 *hostname = xluser-ssl.xunlei.com

 **********************
 
 *Surge&loon
 [Script]
  http-response ^http-response,pattern=^https:\/\/xluser-ssl\.xunlei\.com\/xluser\.core\.login\/v3\/getuserinfo$ url requires-body=1,max-size=0,script-path=
 
 */
 
 
 var body = $response.body;
var obj = JSON.parse(body);

obj.vipList = [{
    "expireDate": "20290609",
    "isAutoDeduct": "0",
    "isVip": "1",
    "isYear": "1",
    "payId": "0",
    "payName": "---",
    "register": "0",
    "vasid": "2",
    "vasType": "5",
    "vipDayGrow": "20",
    "vipGrow": "840",
    "vipLevel": "7"
  }]VIP
