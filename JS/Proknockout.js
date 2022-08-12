/*
 *脚本功能：ProKnockOut 解锁 Premium
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https://buy.itunes.apple.com/verifyReceipt url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Proknockout.js
 **********************
 *hostname = buy.itunes.apple.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Proknockout.js
