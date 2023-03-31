/*************************************

项目名称：云听 全国电台/有声听书
下载地址：https://t.cn/A6ouQ21g
脚本作者：chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：已解锁免费在线听以及可下载。

**************************************

[rewrite_local]
^http[s]?:\/\/(getway|ytapi|ytmsout)\.radio\.cn url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yunting.js

# 去除开屏广告/浮窗
^https?:\/\/ytmsout\.radio\.cn\/publish\/recScreen\/getLoadPage url reject-200


[mitm]
hostname = *.radio.cn

*************************************/


const getway = 'getway.radio.cn';
const ytmsout = 'ytmsout.radio.cn';
const ytapi = 'ytapi.radio.cn';
var body = $response.body;

//旧版
if ($request.url.indexOf(getway) != -1){
	body = body.replace(/\"isVip":\d+/g, '\"isVip":0');
	body = body.replace(/\"needPay":\d+/g, '\"needPay":0');
	body = body.replace(/\"songVirtualPrice":\d+/g,'\"songVirtualPrice":0');
	body = body.replace(/\"songNeedPay":\d+/g, '\"songNeedPay":0');
	body = body.replace(/\"singlePlayFlag":\w+/g,'\"singlePlayFlag":true');
	body = body.replace(/\"isPraise":\d+/g, '\"isPraise":0');
	body = body.replace(/\"auditionFlag":\w+/g,'\"auditionFlag":true');
	body = body.replace(/\"auditionType":\d+/g, '\"auditionType":0');
	body = body.replace(/\"singleDownloadFlag":\w+/g,'\"singleDownloadFlag":true');
	body = body.replace(/\"orderSpeedRightFlag":\w+/g,'\"orderSpeedRightFlag":true');
	body = body.replace(/\"userBuySingleFlag":\w+/g,'\"userBuySingleFlag":true');
	body = body.replace(/\"userBuyAlbumFlag":\w+/g,'\"userBuyAlbumFlag":true');
	body = body.replace(/\"userBuyOutSingleFlag":\w+/g,'\"userBuyOutSingleFlag":true');
	body = body.replace(/\"userBuyOutAlbumFlag":\w+/g,'\"userBuyOutAlbumFlag":true');
	body = body.replace(/\"contentMarkImg":".*?"/g, '\"contentMarkImg":""');
	body = body.replace(/\"PicAddress":(.*?)/g,'\"PicAddress":""');
	body = body.replace(/\"adView":"\d+"/g,'\"adView":"0"');
	body = body.replace(/\"openType":"\d+"/g,'\"openType":"0"');
}

//新版
if ($request.url.indexOf(ytmsout) != -1){
	body = body.replace(/\"isVip":\d+/g, '\"isVip":0');
	body = body.replace(/\"needPay":\d+/g, '\"needPay":0');
	body = body.replace(/\"songVirtualPrice":\d+/g,'\"songVirtualPrice":0');
	body = body.replace(/\"songNeedPay":\d+/g, '\"songNeedPay":0');
	body = body.replace(/\"singlePlayFlag":\w+/g,'\"singlePlayFlag":true');
	body = body.replace(/\"isPraise":\d+/g, '\"isPraise":0');
	body = body.replace(/\"auditionFlag":\w+/g,'\"auditionFlag":true');
	body = body.replace(/\"auditionType":\d+/g, '\"auditionType":0');
	body = body.replace(/\"singleDownloadFlag":\w+/g,'\"singleDownloadFlag":true');
	body = body.replace(/\"orderSpeedRightFlag":\w+/g,'\"orderSpeedRightFlag":true');
	body = body.replace(/\"userBuySingleFlag":\w+/g,'\"userBuySingleFlag":true');
	body = body.replace(/\"userBuyAlbumFlag":\w+/g,'\"userBuyAlbumFlag":true');
	body = body.replace(/\"userBuyOutSingleFlag":\w+/g,'\"userBuyOutSingleFlag":true');
	body = body.replace(/\"userBuyOutAlbumFlag":\w+/g,'\"userBuyOutAlbumFlag":true');
	body = body.replace(/\"contentMarkImg":".*?"/g, '\"contentMarkImg":""');
	body = body.replace(/\"PicAddress":(.*?)/g,'\"PicAddress":""');
	body = body.replace(/\"adView":"\d+"/g,'\"adView":"0"');
	body = body.replace(/\"openType":"\d+"/g,'\"openType":"0"');
	body = body.replace(/\"markText":"\w+"/g,'\"markText":""');
	body = body.replace(/\"name":"\w+"/g,'\"name":""');
	body = body.replace(/\"priceUnit":"\d+"/g,'\"priceUnit":"0"');
	body = body.replace(/\"price":\d+/g,'\"price":0');
	body = body.replace(/\"vipFlag":\d+/g,'\"vipFlag":0');
}

if ($request.url.indexOf(ytapi) != -1){
	body = body.replace(/\"isVip":\d+/g, '\"isVip":1');
	body = body.replace(/\"vipTime":"(.*?)"/g,'\"vipTime":"2099-09-09"');
	body = body.replace(/\"nickName":"(.*?)"/g,'\"nickName":"已解锁所有节目"');
	body = body.replace(/\"userIcon":"(.*?)"/g,'\"userIcon":"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIxYXjkY5BS6ASZbBBgKagb4k9gesNdX8hHeKAsyCxMUBFlflZyWJwibXWVhbggpp4Oq9OuVqS6Xeg/132"');
}

$done({body});
