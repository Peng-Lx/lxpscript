/*
 *脚本功能：蜗牛睡眠VIP
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/snailsleep\.net\/snail\/v1\/profile\/get url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/wnsm.js
 
 **********************
 *hostname = snailsleep.net
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/snailsleep\.net\/snail\/v1\/profile\/get requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/wnsm.js
*/
 
 
 
 re('"expires":\\d+@"expired":\\w+@"vip":\\w+','"expires":4079147492@"expired":false@"vip":true')

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
