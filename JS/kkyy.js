/*
 *脚本功能：可可英语VIP
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/mob2015\.kekenet\.com\/keke\/mobile\/index\.php url script-response-body https://raw.githubusercontent.com/PF2022/Peng-Lx/master/Script/Surge/Lxp/kekeyingyu.js
 
 **********************
 *hostname = mob2015.kekenet.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/mob2015\.kekenet\.com\/keke\/mobile\/index\.php requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/PF2022/Peng-Lx/master/Script/Surge/Lxp/kekeyingyu.js
*/
 
 
 
 re('"is_vip":\\d@"end_time":\\d+','"is_vip":1@"end_time":1741575902')

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
