/*
脚本功能：解锁Nicegram会员
脚本作者：R·E
支持版本：商店最新 1.0.7
使用声明：⚠️仅供学习交流，🈲️商业用途
 **********************
 *QX
 [rewrite_local]
 ^https?:\/\/restore-access\.indream\.app\/restoreAccess\?id=\w+$ url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/RE/Nicegram.js
 **********************
 *hostname = restore-access.indream.app
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https?:\/\/restore-access\.indream\.app\/restoreAccess\?id=\w+$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/RE/Nicegram.js
 */

const a=typeof $task!='undefined';const b=typeof $httpClient!='undefined';if(b){console['log']('\x0aR·E\x20Nicegram\x20Script\x20Log:\x0aNicegram\x20Premium已解锁😎');$done({'response':{'status':0xc8,'body':'{\x22data\x22:\x20{\x22premiumAccess\x22:\x20true}}'}});}else if(a){console['log']('\x0aR·E\x20Nicegram\x20Script\x20Log:\x0aNicegram\x20Premium已解锁😎');$done({'status':'HTTP/1.1\x20200\x20OK','headers':{'Content-Type':'application/json'},'body':'{\x22data\x22:\x20{\x22premiumAccess\x22:\x20true}}'});}else{console['log']('\x0aR·E\x20Nicegram\x20Script\x20Log:\x0aNicegram\x20Premium已解锁😎');$done({'status':0xc8,'body':'{\x22data\x22:\x20{\x22premiumAccess\x22:\x20true}}'});}
