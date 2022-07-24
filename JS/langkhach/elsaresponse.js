/*
 *脚本功能：elsaresponse
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/pool\.elsanow\.io\/user\/api\/v1\/purchase$ url script-response-body 
 **********************
 *hostname =  pool.elsanow.io
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/pool\.elsanow\.io\/user\/api\/v1\/purchase$ requires-body=1,max-size=0,script-path=
 */
 
 
 
var obj = JSON.parse($response.body);
if($request.method=="GET")
{
obj["subscriptions"] = [
    {
      "expire_at": "21190505",
      "subscription": "lifetime_membership",
      "days_to_end": 36469,
      "created_at": "20190529151809"
    }
  ];
$done({body: JSON.stringify(obj)});
