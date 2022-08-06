let body = $response.body;
if($request.url.includes("/admin/service/appstore/register"))
{
    body = 
    `
    {"featId": "","registered": true,"expDate": "2099-01-01","key": ""}
    `
} else if($request.url.includes("/emby/Plugins/SecurityInfo"))
{
    body = 
    `
    {SupporterKey: "", IsMBSupporter: true}
    `
} else if($request.url.includes("/admin/service/registration/validateDevice"))
{
    body = 
    `
    {"cacheExpirationDays": 365,"message": "Device Valid","resultCode": "GOOD"}
    `
} else if($request.url.includes("/admin/service/registration/validate"))
{
    body = 
    `
    {"featId":"","registered":true,"expDate":"2099-01-01","key":""}
    `
}else if($request.url.includes("/admin/service/registration/getStatus"))
{
    body = 
    `
    {"deviceStatus":"0","planType":"Lifetime","subscriptions":{}}
    `
}

$done({
    status : 200,
    body : body
});
