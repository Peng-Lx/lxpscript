/*
 *脚本功能：人人视频
 *脚本整理：Peng-Lx
      FROM：By @george Jiang & R)
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/api\.rr\.tv(\/user\/privilege\/list|\/ad\/getAll|\/rrtv-video\/v4plus\/season\/detail) url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Rrtv.js
 **********************
 *hostname = api.rr.tv
 **********************
 
 *Surge&loon
 [Script]
  http-response ^https:\/\/api\.rr\.tv(\/user\/privilege\/list|\/ad\/getAll|\/rrtv-video\/v4plus\/season\/detail) url requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Rrtv.js
 
 */
 
 
var body = $response.body;
var url = $request.url;

if (url.indexOf('/ad/getAll') != -1) {
	var obj = JSON.parse(body);
	obj.data.adList = [];
	body = JSON.stringify(obj);
} else if (url.indexOf('/user/privilege/list') != -1) {
	var obj = JSON.parse(body);
	obj.data = [{
		"action": "play",
		"effectObject": "video",
		"id": 1,
		"function": "originalPainting",
		"func": "originalPainting",
		"endTime": 1667341767582,
		"description": "解锁原画",
		"icon": "jiesuoyuanhua"
	}, {
		"action": "play",
		"effectObject": "video",
		"id": 4,
		"function": "noLimit",
		"func": "noLimit",
		"endTime": 1567341767582,
		"description": "看剧无限制",
		"icon": "kanjuwuxianzhi"
	}, {
		"action": "play",
		"effectObject": "growth",
		"id": 37,
		"function": "0.4",
		"func": "0.4",
		"endTime": 1667341767582,
		"description": "看剧经验+40%",
		"icon": "jingyanzhijiacheng"
	}, {
		"action": "send",
		"effectObject": "danmu",
		"id": 43,
		"function": "superBarrageBlue",
		"func": "superBarrageBlue",
		"endTime": 1667341767582,
		"description": "超级弹幕",
		"icon": "chaojidanmu"
	}, {
		"action": "play",
		"effectObject": "video",
		"id": 23,
		"function": "noAd",
		"func": "noAd",
		"endTime": 1667341767582,
		"description": "看剧无广告",
		"icon": "kanjuwuguanggao"
	}];

}else if(url.indexOf('/rrtv-video/v4plus/season/detail') != -1){
	var obj = JSON.parse(body);

	obj.data['season']['feeMode'] = 'restriction';
}


body = JSON.stringify(obj);

$done({
	body
});
