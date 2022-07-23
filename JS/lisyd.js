/*
 *脚本功能：流利说•阅读 没效重装APP
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https?:\/\/vira\.llsapp\.com\/api\/v2\/readings\/(accessible|limitation) url script-response-body https://raw.githubusercontent.com/PF2022/Peng-Lx/master/Script/Surge/Lxp/lisyd.js
 
 **********************
 *hostname = vira.llsapp.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https?:\/\/vira\.llsapp\.com\/api\/v2\/readings\/(accessible|limitation) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/PF2022/Peng-Lx/master/Script/Surge/Lxp/lisyd.js
*/
 
 
 
 if ($response.statusCode == 200 && $request.method == 'GET') {
	const bodyObj = JSON.parse($response.body);

	if ($request.url.indexOf('limitation') != -1) {
		bodyObj.modules = [];
		bodyObj.auditionDuration = 72000;
	} else {
		bodyObj.from = 1482071586
		bodyObj.to = 1671373986
	}

	$done({body: JSON.stringify(bodyObj)})
} else {
	$done({})
}
