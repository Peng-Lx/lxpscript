/*

[rewrite_local]
# > 万能变声器 vip 
^https?:\/\/www.40sishi.com\/voice\/user\/profile url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/WNBSQ.js

[mitm] 
hostname = www.40sishi.com
*
*
*/




var body = $response.body; 
let Rnik= JSON.parse($response.body);
Rnik.data.vipState.state = 1;
Rnik.data.vipState.forever = true;
Rnik.data.name = "Rnik666 ";
$done({body: JSON.stringify(Rnik)});
