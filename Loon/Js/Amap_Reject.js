/*
引用地址https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/amdc.js
*/
// 2023-03-31 15:08

const url = $request.url;
const header = $request.headers;
let ua = header["User-Agent"] || header["user-agent"];

if (url.includes("/amdc/mobileDispatch")) {
  if (ua.includes("AMap")) {
    $done({ status: "HTTP/1.1 404 Not Found" });
    return;
  }
}
$done({});
