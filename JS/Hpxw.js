/*
 *脚本功能：烘焙小屋 VIP
 *脚本整理：Peng-Lx
      FROM：By Hausd0rff
 **********************
 *QX
 [rewrite_local]
 ^https?:\/\/apiios_dq\.xiangha\.com\/v4\/(dish\/info|User\/getUserData)$ url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Hpxw.js
 **********************
 *hostname = apiios_dq.xiangha.com

 **********************
 
 *Surge&loon
 [Script]
 http-response ^https?:\/\/apiios_dq\.xiangha\.com\/v4\/(dish\/info|User\/getUserData)$ url requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Hpxw.js
 
 */
 
 
 var body = $response.body;
var urlq = $request.url;
var objc = JSON.parse(body);

const user = '/User/getUserData';
const dish = '/dish/info';

if (urlq.indexOf(user) != -1) {
    objc.data.data["nickName"] = "Peng-Lx";
    objc.data.data["vip"] = {"is_vip":2,"vip_msg":"已破解🎃","is_open_vip":1};
    objc.data.data["headPortraitPath"] = "https:\/\/s3.cdn.xiangha.com\/imgs\/202009\/1214\/5f5c6d7919847.jpeg\/MHgw.webp";
    body = JSON.stringify(objc);
}

if (urlq.indexOf(dish) != -1) {
    var crack = objc.data.power;
    var yqcpj = Object.keys(crack);
    if (yqcpj.length != 0) {
        objc.data["power"] = {};
    }
    body = JSON.stringify(objc);
}

$done({body});
