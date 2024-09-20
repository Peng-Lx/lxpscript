/*************************************
脚本功能：GreenNetVpn-一次性解锁订阅
脚本作者：afengye
注意事项：开启脚本再进入软件，多尝试几次
频道地址：https://t.me/afengye
使用声明：️仅供学习交流, 🈲️商业用途
**************************************
[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/afengye/QX/main/greenvpn.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/afengye/QX/main/greenvpn.js
[mitm] 
hostname = api.revenuecat.com
*******************************/

let obj = {};

if(typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  obj.headers = $request.headers;
}else {
  let body = JSON.parse(typeof $response != "undefined" && $response.body || null);
  if(body && body.subscriber) {
    const name = "\u0067\u0072\u0065\u0065\u006e\u006e\u0065\u0074\u005f\u0079\u0065\u0061\u0072\u006c\u0079\u005f\u006f\u0066\u0066\u0065\u0072";
    const appid = "\u0067\u0072\u0065\u0065\u006e\u006e\u0065\u0074\u005f\u0079\u0065\u0061\u0072\u006c\u0079\u005f\u006f\u0066\u0066\u0065\u0072";
    let data = {
      "expires_date": "2999-01-01T00:00:00Z",
      "original_purchase_date":  "2021-01-01T00:00:00Z",
      "purchase_date": "2021-01-01T00:00:00Z",
      "ownership_type": "PURCHASED",
      "store": "app_store"
    };
    let subscriber = body.subscriber;
    subscriber.subscriptions[(appid)] = data;
    subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));
    subscriber.entitlements[(name)].product_identifier = (appid);   
    obj.body = JSON.stringify(body);
  } 
}

$done(obj);
