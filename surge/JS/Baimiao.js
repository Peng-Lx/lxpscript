/* 
登陆时写入OCR&翻译无限制次数权限
已不再维护，使用微软家的 Translator
# 白描
^https:\/\/baimiao\.uzero\.cn\/api\/v2\.user\/(logout|appLaunchWithUser|loginByWeixin)

[mitm]
hostname = api.xiaolanben.com
*/

let obj = JSON.parse($response.body);
obj.value.vip = true;
obj.value.recognize.remainBatch = -100;
obj.value.recognize.remainNormal = -100;
obj.value.recognize.remainTranslate = -100;
obj.value.recognize.recognizeTranslateAll = 1;

$done({ body: JSON.stringify(obj) });
