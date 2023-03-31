/*************************************

项目名称：涩涩视频——去除所有广告
下载地址：https://48478.xyz/
网页在线：https://files.yuchenglw.com
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️

**************************************

[rewrite_local]

^https:\/\/files\.(yuchenglw|honghufly)\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/sssp.js

[mitm]

hostname = files.*.com

*************************************/


var body=$response.body;

body = body.replace(/(<div class="speaker" style="display: none;">)[\s\S[\d\D]{0,101}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div id="popup">)[\s\S[\d\D]{0,1539}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div class="float-app">)[\s\S[\d\D]{0,345}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div id="carousel")[\s\S[\d\D]{0,1777}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div class="header fixed-top">)[\s\S[\d\D]{0,345}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div class="banner mt-3">)[\s\S[\d\D]{0,20000}(<h3 class="mt-3">今日推荐<\/h3>)/g,'<h3 class="mt-3">今日推荐</h3>');

body = body.replace(/(<div class="banner">)[\s\S[\d\D]{0,20000}(<div class="play mt-3">)/g,'<div class="play mt-3">');

body = body.replace(/(<div class="banner">)[\s\S[\d\D]{0,2500}(<div class="row lists">)/g,'<div class="row lists">');

body = body.replace(/(<div class="banner mt-3">)[\s\S[\d\D]{0,20000}(<div class="mt-5 text-center">)/g,'<div class="mt-5 text-center">');

body = body.replace(/(<div class="banner">)[\s\S[\d\D]{0,20000}(<div class="row lists">)/g,'<div class="row lists">');

$done({body});
