/*
 *脚本功能：利用 GitHub Education 解锁 Working Copy
            启用此脚本后再 Safari 打开 https://workingcopy.app/education/ 点击「tap here to access all pro features.」中的 here 跳转到 Working Copy
            登录自己的 GitHub 账号即可解锁By @ImSingee           
 *脚本整理：Peng-Lx
 **********************
 *hostname = education.github.com
 **********************
 
 *Surge
 [Script]
 http-response ^https:\/\/education\.github\.com\/api\/user$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/surge/JS/Copy.js
 */
 
 
 
$done({body: '{"student": true}'})
