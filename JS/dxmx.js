/*
 *脚本功能:大象冥想 解锁VIP&付费音乐
 *脚本整理：Peng-Lx
 *QX
  [rewrite_local]
  ^https?:\/\/nmeditation\.snailsleep\.net\/meditation-(audio|user|order|audio)\/(api|user)\/(audio\/master\/detail|get\/info|order/user\/vip\/info|ad\/get) url script-response-body https://raw.githubusercontent.com/PF2022/Peng-Lx/master/Script/QX/JS/dxmx.js
  *****************************************
  hostname = nmeditation.snailsleep.net
  *****************************************
  *surge&loon
  [Script]
  http-response ^https?:\/\/nmeditation\.snailsleep\.net\/meditation-(audio|user|order|audio)\/(api|user)\/(audio\/master\/detail|get\/info|order/user\/vip\/info|ad\/get) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/PF2022/Peng-Lx/master/Script/QX/JS/dxmx.js
*/


re('"free":false@"vip":\\w+@"expires":\\d+@"isVip":\\w+','"free":true@"vip":ture@"expires":9999999999000@"isVip":true')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
