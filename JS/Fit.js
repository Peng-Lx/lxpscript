/*
 *脚本功能：Fit健身VIP
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/bea\.sportq\.com\/SFitWeb\/sfit\/getUserBaseInfo url script-response-body https://raw.githubusercontent.com/PF2022/Peng-Lx/master/Script/Surge/Lxp/Fit.js
 
 **********************
 *hostname = bea.sportq.com
 **********************
 
 *Surge&loon
  [Script]
  http-response ^https:\/\/bea\.sportq\.com\/SFitWeb\/sfit\/getUserBaseInfo requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/PF2022/Peng-Lx/master/Script/Surge/Lxp/Fit.js
*/
 
 
 
re('"isVip":"\\d','"isVip":"1')

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
}
