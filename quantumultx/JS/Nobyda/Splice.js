/*
Splice app unlock pro.

Surge
http-response https:\/\/splice\.oracle\.\w+\.com\/devices\/me requires-body=1,max-size=0,script-path=

QX 
https:\/\/splice\.oracle\.\w+\.com\/devices\/me url 
Surge & QX Mitm = splice.oracle.*.com
*/

var obj = JSON.parse($response.body); 
obj['will_renew_subscription'] = true; 
obj['is_subscribed'] = true; 
$done({body: JSON.stringify(obj)});
