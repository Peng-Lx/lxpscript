/*
 *脚本功能：Bilibili 1080P+
 *脚本整理：Peng-Lx
      FROM：
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)) url script-response-body 
 **********************
 *hostname = api.polarisoffice.com

 **********************
 
 *Surge&loon
 [Script]
  http-response  ^https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)) url requires-body=1,max-size=0,script-path=
 
 */
 
 
 var body = $response.body;
var url = $request.url;

const path1 = '/pgc/player/api/playurl';
const path2 = "/x/v2/account/myinfo?";
const path3 = "/x/v2/account/mine\?";
if (url.indexOf(path1) != -1) {
    let obj = JSON.parse(body);   
    obj["has_paid"] = true;
	obj["quality"] = obj["accept_quality"][0];
	obj.vip_type = 2;
	obj.vip_status = 1;
 	body = JSON.stringify(obj);  
 };
if (url.indexOf(path2) != -1){
  let obj = JSON.parse(body);
    obj["data"]["vip"]["type"] = 2;
    obj["data"]["vip"]["status"] = 1;
    obj["data"]["vip"]["vip_pay_type"] = 1;
    obj["data"]["vip"]["due_date"] = 1669824160;

   body=JSON.stringify(obj);
 };
   
if (url.indexOf(path3) != -1){
  let obj = JSON.parse(body);
     obj["data"]["vip_type"] = 2;
     obj["data"]["vip"]["type"] = 2;
     obj["data"]["vip"]["status"] = 1;
     obj["data"]["vip"]["vip_pay_type"] = 1;
     obj["data"]["vip"]["due_date"] = 1669824160;
   body=JSON.stringify(obj);
};
   
 $done({body});
