/******************************
脚本功能：简易表格-一次性解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-08
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/qqzhuti\.net\/spreadsheet\/logon(\.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/jybg.js
[mitm] 
hostname = qqzhuti.net
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

obj.expiredate = 32472115200;

aFengYe = JSON.stringify(obj);
$done(aFengYe);
