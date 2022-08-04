/*
 *脚本功能：每日英语阅读/每日外刊
 *脚本整理：Peng-Lx
      FROM：By Chamberlen
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/dict\.eudic\.net\/jingting\/GetThisChapterTaskStatus? url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/mryy.js
 **********************
 *hostname = dict.eudic.net

 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/dict\.eudic\.net\/jingting\/GetThisChapterTaskStatus? url requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/mryy.js
 
 */
 
 

let obj=JSON.parse($response.body);
obj.tasks[0].finished= true;
obj.tasks[0].task_action.user_purchase_status = "1";
//obj.tasks[0].optional = true;
//obj.tasks[0].finish_star = "1";
$done({body:JSON.stringify(obj)})
