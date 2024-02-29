# > 芒果TV,Vip+会员画质+去广告,页面优化
^https?:\/\/.*mgtv.com.*(GetUserInfo|module\/list\?_support|app\/bdboot|pullReleaseInfo|floor\/detail|video\/source|entry\?_support).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/mgtv.js
^https?:\/\/mobile-stream\.api\.mgtv\.com\/v1\/video\/source\? url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/mgtk.js
^https?://mobile.da.mgtv.com\/m\/page url reject
