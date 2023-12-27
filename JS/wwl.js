/*
软件名称：娃娃路 免费解锁所有课程（非一次性）
应用地址：https://apps.apple.com/cn/app/%E5%A8%83%E5%A8%83%E8%B7%AF-%E5%90%AC%E6%87%82%E8%8B%B1%E8%AF%AD9000%E5%8F%A5/id1019491718
版本：2.0.6
作者：Sliverkiss
更新日期：2023.12.20
tg频道：https://t.me/sliverkiss

[rewrite_local]
https://api.wawalu.cn/wawalu/practise/download url script-response-body 
^https:\/\/api\.wawalu\.cn\/wawalu\/practise\/list.+ url script-response-body 
[mitm]
hostname = api.wawalu.cn

*/
var obj = JSON.parse($response.body);
var url = $request.url;
const api={
 "download":'https://api.wawalu.cn/wawalu/practise/download',
 "list":/^https:\/\/api\.wawalu\.cn\/wawalu\/practise\/list.+/
}

if (url.includes(api.download)) {
    obj.data = true;
} else if (url.match(api.list)) {
    let array = obj.data;
    array.map(e => {
        e.price = 0;
        e.isFree = 1;
    });
    obj.data = array;
}

$done({ body:JSON.stringify(obj) });
