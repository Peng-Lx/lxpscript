
/***
 脚本功能：Cycles月经追踪 Unlock订阅
 脚本作者：Crazy-Z7
 更新时间：22.12.04
 使用声明：⚠️仅供学习交流，🈲️商业用途
 **********************
 QX
 [rewrite_local]
 ^https?:\/\/pcbe\.perigee\.se\/api\/v1\/buyers\/*\/subscription* url reject
 ^https?:\/\/pcbe\.perigee\.se\/api\/v1\/verify-purchases url script-response-body
 
 **********************
 hostname =  pcbe.perigee.se
 **********************
 ***/
 
 var _0x3251fe=_0x5f1a;(function(_0x461c5e,_0x5ee4a9){var _0x1ae9e2=_0x5f1a,_0x3792fa=_0x461c5e();while(!![]){try{var _0x3555d1=-parseInt(_0x1ae9e2(0x194))/(0x1a*0xe9+-0x1*0x2169+-0x9c0*-0x1)*(-parseInt(_0x1ae9e2(0x193))/(-0x1*0xb69+0x18a7*0x1+-0xd3c))+-parseInt(_0x1ae9e2(0x19f))/(-0x6*-0x435+0x2511+-0x6ec*0x9)+-parseInt(_0x1ae9e2(0x1a1))/(-0x247f*0x1+0x5*0x1c1+0x1bbe)+-parseInt(_0x1ae9e2(0x19d))/(-0x17f8+-0x13*0x35+0x1bec)*(parseInt(_0x1ae9e2(0x19e))/(0x11f5+-0x3a*0x3d+-0x41d))+-parseInt(_0x1ae9e2(0x1a2))/(-0x64+-0x60*0xb+-0x48b*-0x1)*(parseInt(_0x1ae9e2(0x1a3))/(-0x19a+0x1*-0x2296+0x2438))+-parseInt(_0x1ae9e2(0x191))/(0x2*0x101f+-0x265a+-0x1*-0x625)+parseInt(_0x1ae9e2(0x1a4))/(-0x1*0x19ee+-0x137b+0x1*0x2d73)*(parseInt(_0x1ae9e2(0x197))/(-0x1370+-0xe43*0x1+0x21be));if(_0x3555d1===_0x5ee4a9)break;else _0x3792fa['push'](_0x3792fa['shift']());}catch(_0x35ae5c){_0x3792fa['push'](_0x3792fa['shift']());}}}(_0x4413,-0x13db91+0xef731+0x3c10c*0x4));function _0x4413(){var _0x4d63f6=['normal','aeb-433b-a','4985MndpUc','5682SDhSLt','8097fcDOjI','purchased','224388OTOUkS','14105JqJhlN','1712xvXpQG','10vyVMPp','12Months','60f9751e-4','Premium_B_','1f7-6a3c92','stringify','9874674rSJYnD','body','12bGbvwN','14252hWkgGR','parse','app_store','34202773MHrxWV','P1W','a39536','P1Y'];_0x4413=function(){return _0x4d63f6;};return _0x4413();}function _0x5f1a(_0x270f74,_0x3ee949){var _0x53ced1=_0x4413();return _0x5f1a=function(_0x3bb6f2,_0x32c2cb){_0x3bb6f2=_0x3bb6f2-(-0x1601*0x1+-0xe82+0x1*0x2614);var _0x2f976c=_0x53ced1[_0x3bb6f2];return _0x2f976c;},_0x5f1a(_0x270f74,_0x3ee949);}var ojbk=JSON[_0x3251fe(0x195)]($response[_0x3251fe(0x192)]);ojbk={'has_valid_purchases':!![],'subscription_purchases_state':0xe9036ee7,'subscription_purchases':[{'period':_0x3251fe(0x19a),'expires_at':{'offset':0x0,'timestamp':0x254084aaa},'sku_identifier':_0x3251fe(0x1a7)+_0x3251fe(0x1a5),'purchased_at':{'offset':0x0,'timestamp':0x638c9bea},'cancelled_at':{'offset':0x0,'timestamp':0x638c9cc4},'sandbox':![],'auto_renew':![],'trial_period':_0x3251fe(0x198),'ownership':_0x3251fe(0x1a0),'grace_period_days':0x0,'status':_0x3251fe(0x19b),'store':_0x3251fe(0x196)}],'in_app_purchases':[],'buyer_identifier':_0x3251fe(0x1a6)+_0x3251fe(0x19c)+_0x3251fe(0x1a8)+_0x3251fe(0x199)},$done({'body':JSON[_0x3251fe(0x1a9)](ojbk)});
