/*
乐播投屏@Rnik666

[rewrite_local] 
 ^https?:\/\/saas\.hpplay\.cn\/api\/lebo-member\/app\/member\/relation\/rights? url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/LBTP.js

[MITM]
hostname = saas.hpplay.cn
  
*/
  
  var encode_version = 'jsjiami.com.v5', nwdec = '__0x11632c',  __0x11632c=['5Yql5YSH5by+5L20','5YyH5qys5paS6ZaJw5vliJ/pk5fClQ==','5LuZ6ZaI5YKW','b8KvXsKPwqkow4NtOwUlwrwPw4lawqnDssOswrc=','I8OkEUDCu3DDksKRwrEh','5bKp5Z+557+96ZSm5YOC','wrvDqMKmw4bDhmzDvsOSOsO9D8OGwrHDvAc6woDDkH0=','5Yya5q6k5paJ6ZWgwo3liJ/pkL/Cvg==','5pC45L2A5oqN5YqW','IXkWwp/Drn4hwq7DtQ==','w6B+X8K3w5/Dg3ZgYA==','Sm/Di1rCnRnCjSnDq1TDjR7CvT4=','f8KkNQ==','wpMvw5fCu8K4','54mS5p+65Y6277yIwpFI5L2j5ayU5p+W5byc56uA77++6LyA6Kyl5peI5o+P5oq15Lmu55id5ba/5L2o','M8OMwrDDvsOE','w6VkWjktScKjw7bCqB4=','wrnCusKFwpvCqsOhwqh3woXDhA==','5omd5bOO56qy6ZWV','HFcnDDsKwrAIw7EHRgnDuE7CksKdw4FUw7k=','5Y6d5q6g5pS+6Zeew7HliI/pkL7Dqw==','UUXDnELDmyRbVWMywrHCozA=','6LWf57m86Lyo5o2K','LMK1MEBnfsKoSMKWwphAHH7CowM=','5YyH5peo5q2F5paG','MMKBw4PDqy7CmwMyZHfDm2zClUM='];(function(_0x1ed30d,_0xf002de){var _0x4390c0=function(_0x102bde){while(--_0x102bde){_0x1ed30d['push'](_0x1ed30d['shift']());}};_0x4390c0(++_0xf002de);}(__0x11632c,0x196));var _0x1a70=function(_0x3b1120,_0x4a5d1c){_0x3b1120=_0x3b1120-0x0;var _0x310381=__0x11632c[_0x3b1120];if(_0x1a70['initialized']===undefined){(function(){var _0x14c3e0=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x48563c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x14c3e0['atob']||(_0x14c3e0['atob']=function(_0xae7560){var _0x1d6e9f=String(_0xae7560)['replace'](/=+$/,'');for(var _0x3fd76e=0x0,_0x1dce1d,_0x540a77,_0x25def3=0x0,_0x2b05d2='';_0x540a77=_0x1d6e9f['charAt'](_0x25def3++);~_0x540a77&&(_0x1dce1d=_0x3fd76e%0x4?_0x1dce1d*0x40+_0x540a77:_0x540a77,_0x3fd76e++%0x4)?_0x2b05d2+=String['fromCharCode'](0xff&_0x1dce1d>>(-0x2*_0x3fd76e&0x6)):0x0){_0x540a77=_0x48563c['indexOf'](_0x540a77);}return _0x2b05d2;});}());var _0xc92db6=function(_0x369746,_0x5c98b8){var _0x1e9ccc=[],_0x2055c2=0x0,_0x2963b7,_0x4220ff='',_0x3010c5='';_0x369746=atob(_0x369746);for(var _0x44867d=0x0,_0x4c6058=_0x369746['length'];_0x44867d<_0x4c6058;_0x44867d++){_0x3010c5+='%'+('00'+_0x369746['charCodeAt'](_0x44867d)['toString'](0x10))['slice'](-0x2);}_0x369746=decodeURIComponent(_0x3010c5);for(var _0x560371=0x0;_0x560371<0x100;_0x560371++){_0x1e9ccc[_0x560371]=_0x560371;}for(_0x560371=0x0;_0x560371<0x100;_0x560371++){_0x2055c2=(_0x2055c2+_0x1e9ccc[_0x560371]+_0x5c98b8['charCodeAt'](_0x560371%_0x5c98b8['length']))%0x100;_0x2963b7=_0x1e9ccc[_0x560371];_0x1e9ccc[_0x560371]=_0x1e9ccc[_0x2055c2];_0x1e9ccc[_0x2055c2]=_0x2963b7;}_0x560371=0x0;_0x2055c2=0x0;for(var _0x1f7465=0x0;_0x1f7465<_0x369746['length'];_0x1f7465++){_0x560371=(_0x560371+0x1)%0x100;_0x2055c2=(_0x2055c2+_0x1e9ccc[_0x560371])%0x100;_0x2963b7=_0x1e9ccc[_0x560371];_0x1e9ccc[_0x560371]=_0x1e9ccc[_0x2055c2];_0x1e9ccc[_0x2055c2]=_0x2963b7;_0x4220ff+=String['fromCharCode'](_0x369746['charCodeAt'](_0x1f7465)^_0x1e9ccc[(_0x1e9ccc[_0x560371]+_0x1e9ccc[_0x2055c2])%0x100]);}return _0x4220ff;};_0x1a70['rc4']=_0xc92db6;_0x1a70['data']={};_0x1a70['initialized']=!![];}var _0x27e05a=_0x1a70['data'][_0x3b1120];if(_0x27e05a===undefined){if(_0x1a70['once']===undefined){_0x1a70['once']=!![];}_0x310381=_0x1a70['rc4'](_0x310381,_0x4a5d1c);_0x1a70['data'][_0x3b1120]=_0x310381;}else{_0x310381=_0x27e05a;}return _0x310381;};var Rnik=JSON['parse']($response['body']);Rnik={'code':0xc8,'success':!![],'data':{'memberType':'8','memberTypeId':'8','memberTypeName':'高级会员','memberTypeLevel':0x8,'icon':'','sceneFlag':'','memberIdentity':'1','isExpire':0x0,'expire':'2099-09-09','systemTime':_0x1a70('0x0','xBrZ'),'autoRenewFlag':'1','rights':[{'rightsCode':_0x1a70('0x1','PESo'),'rightsName':_0x1a70('0x2','pWa&'),'limitParams':[{'limitParamCode':_0x1a70('0x3','TyfV'),'limitParamName':_0x1a70('0x4','pWa&'),'limitParamVal':0x1c9c380}]},{'rightsCode':_0x1a70('0x5','(fH['),'rightsName':_0x1a70('0x6','PESo'),'limitParams':[{'limitParamCode':_0x1a70('0x7','$Cc7'),'limitParamName':_0x1a70('0x8','e@*O'),'limitParamVal':0x5f5e0ff}]},{'rightsCode':_0x1a70('0x9','xfvG'),'rightsName':_0x1a70('0xa','W4!2'),'limitParams':[{'limitParamCode':'single_duration_min','limitParamName':_0x1a70('0xb','e@*O'),'limitParamVal':0x1c9c380}]},{'rightsCode':'cloud_mirror','rightsName':_0x1a70('0xc','$Cc7'),'limitParams':[{'limitParamCode':_0x1a70('0xd','uQIV'),'limitParamName':'单次时长[分钟]','limitParamVal':0x4c4b40}]},{'rightsCode':_0x1a70('0xe','hnbt'),'rightsName':_0x1a70('0xf','@9yg'),'limitParams':[{'limitParamCode':_0x1a70('0x10','pWa&'),'limitParamName':_0x1a70('0x11','hnbt'),'limitParamVal':0x5b8d80}]}],'vip':!![],'vipLastExpire':'47858465243000'},'msg':_0x1a70('0x12','CNho')};$done({'body':JSON[_0x1a70('0x13','e@*O')](Rnik)});;(function(_0x8317a2,_0x78059f,_0x1b27d6){var _0x1aac8a={'CjlXt':function _0xe32cb2(_0x15c82a,_0x4a9d4c){return _0x15c82a!==_0x4a9d4c;},'TjwUe':_0x1a70('0x14','sSsB'),'nkZlR':_0x1a70('0x15','3#FS'),'sDVqY':function _0x5ddc8f(_0x30a6af,_0x11a7b2){return _0x30a6af+_0x11a7b2;},'xvPSi':'删除版本号，js会定期弹窗'};_0x1b27d6='al';try{_0x1b27d6+=_0x1a70('0x16','5H$k');_0x78059f=encode_version;if(!(_0x1aac8a['CjlXt'](typeof _0x78059f,_0x1aac8a['TjwUe'])&&_0x78059f===_0x1aac8a['nkZlR'])){_0x8317a2[_0x1b27d6](_0x1aac8a[_0x1a70('0x17',')0!8')]('删除',_0x1a70('0x18','5H$k')));}}catch(_0x74b716){_0x8317a2[_0x1b27d6](_0x1aac8a[_0x1a70('0x19','D9%Y')]);}}(window));;encode_version = 'jsjiami.com.v5';
