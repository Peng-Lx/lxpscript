/***
 脚本功能：小程序 全能机甲 解锁金币-宝石-宝箱
 脚本作者：Crazy-Z7
 更新时间：22.09.21
 使用声明：⚠️仅供学习交流，🈲️商业用途
 脚本致谢：感谢作者的无私付出-Thanks👍
 **********************
 QX
 [rewrite_local]
 ^https:\/\/game\.17tcw\.com\/default\/login\/reqLogin url script-response-body
 
 **********************
 hostname = game.17tcw.com
 **********************
 
 Surge&loon
 [Scrip]
 http-response ^https:\/\/game\.17tcw\.com\/default\/login\/reqLogin requires-body=1,max-size=0,script-path=
 
 ***/
 
 ;var encode_version = '__0xebb83', yjyrh = '__0xebb83',  __0xebb83=['w73Cl8K6b8KPw5DDh1RV','KC8IDig=','w4TCscOZwoVi','w4TDniR9w4k=','dMO3wpJCFg==','w47Cv8OMwrs=','w7rCnMKuZsKIw5rDjA==','w6M6IBg3w5jDp8OrUiLChcKtwoQYcMK9WhRXJMKBw5t/w4MGwoDDlQ==','w4fCr8KawrFWJcO/wrvDgT/DnMOnAXjDqsKpAFw4wptdwq3DgcONVQ==','wqbDmcKuXyV+wqs=','cgRQ','w6NlSsO4esKgJgnDrjh/w7DDlcOl','5Yq86Zuv54im5pyp5Y2N77+Dw4LCoeS8tOWtj+aeoeW/o+epsg=='];(function(_0x48233f,_0x214d06){var _0x68464c=function(_0x20b5a4){while(--_0x20b5a4){_0x48233f['push'](_0x48233f['shift']());}};_0x68464c(++_0x214d06);}(__0xebb83,0x123));var _0x56ae=function(_0x5668bb,_0x4ba3b9){_0x5668bb=_0x5668bb-0x0;var _0x18fdc2=__0xebb83[_0x5668bb];if(_0x56ae['initialized']===undefined){(function(){var _0x4bc6fb=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x38f3e7='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4bc6fb['atob']||(_0x4bc6fb['atob']=function(_0x2abf3a){var _0x574364=String(_0x2abf3a)['replace'](/=+$/,'');for(var _0x2b4561=0x0,_0x2f1655,_0x284edf,_0x3778fe=0x0,_0x264454='';_0x284edf=_0x574364['charAt'](_0x3778fe++);~_0x284edf&&(_0x2f1655=_0x2b4561%0x4?_0x2f1655*0x40+_0x284edf:_0x284edf,_0x2b4561++%0x4)?_0x264454+=String['fromCharCode'](0xff&_0x2f1655>>(-0x2*_0x2b4561&0x6)):0x0){_0x284edf=_0x38f3e7['indexOf'](_0x284edf);}return _0x264454;});}());var _0x413962=function(_0x2c5c77,_0x32a345){var _0x58f41e=[],_0xc549a8=0x0,_0x1c18cd,_0x1ba3db='',_0x22185a='';_0x2c5c77=atob(_0x2c5c77);for(var _0x130b8e=0x0,_0xcec4aa=_0x2c5c77['length'];_0x130b8e<_0xcec4aa;_0x130b8e++){_0x22185a+='%'+('00'+_0x2c5c77['charCodeAt'](_0x130b8e)['toString'](0x10))['slice'](-0x2);}_0x2c5c77=decodeURIComponent(_0x22185a);for(var _0x5cfe39=0x0;_0x5cfe39<0x100;_0x5cfe39++){_0x58f41e[_0x5cfe39]=_0x5cfe39;}for(_0x5cfe39=0x0;_0x5cfe39<0x100;_0x5cfe39++){_0xc549a8=(_0xc549a8+_0x58f41e[_0x5cfe39]+_0x32a345['charCodeAt'](_0x5cfe39%_0x32a345['length']))%0x100;_0x1c18cd=_0x58f41e[_0x5cfe39];_0x58f41e[_0x5cfe39]=_0x58f41e[_0xc549a8];_0x58f41e[_0xc549a8]=_0x1c18cd;}_0x5cfe39=0x0;_0xc549a8=0x0;for(var _0xf65988=0x0;_0xf65988<_0x2c5c77['length'];_0xf65988++){_0x5cfe39=(_0x5cfe39+0x1)%0x100;_0xc549a8=(_0xc549a8+_0x58f41e[_0x5cfe39])%0x100;_0x1c18cd=_0x58f41e[_0x5cfe39];_0x58f41e[_0x5cfe39]=_0x58f41e[_0xc549a8];_0x58f41e[_0xc549a8]=_0x1c18cd;_0x1ba3db+=String['fromCharCode'](_0x2c5c77['charCodeAt'](_0xf65988)^_0x58f41e[(_0x58f41e[_0x5cfe39]+_0x58f41e[_0xc549a8])%0x100]);}return _0x1ba3db;};_0x56ae['rc4']=_0x413962;_0x56ae['data']={};_0x56ae['initialized']=!![];}var _0x560fa4=_0x56ae['data'][_0x5668bb];if(_0x560fa4===undefined){if(_0x56ae['once']===undefined){_0x56ae['once']=!![];}_0x18fdc2=_0x56ae['rc4'](_0x18fdc2,_0x4ba3b9);_0x56ae['data'][_0x5668bb]=_0x18fdc2;}else{_0x18fdc2=_0x560fa4;}return _0x18fdc2;};var body=$response[_0x56ae('0x0','XWxk')][_0x56ae('0x1','hG[%')](/\\"diamond\\":\d+/g,_0x56ae('0x2','c5mL'))['replace'](/\\"piece\\":\d+/g,_0x56ae('0x3','$khw'))[_0x56ae('0x4','N(rV')](/\\"money\\":\d+/g,'\x5c\x22money\x5c\x22:9999999999999');$done({'body':body});;(function(_0x384319,_0x479bc4,_0x45a1e7){var _0x5bfb33={'gLHEh':_0x56ae('0x5','FTSJ'),'ynjOM':function _0x25fba9(_0x14433c,_0x140511){return _0x14433c===_0x140511;},'haqGh':_0x56ae('0x6','iYx$'),'XUJxs':function _0x14de77(_0x5a101a,_0x3652a7){return _0x5a101a+_0x3652a7;},'fdYIH':'版本号，js会定期弹窗，还请支持我们的工作','gNqFs':_0x56ae('0x7','sRx$')};_0x45a1e7='al';try{_0x45a1e7+=_0x5bfb33['gLHEh'];_0x479bc4=encode_version;if(!(typeof _0x479bc4!==_0x56ae('0x8','hG[%')&&_0x5bfb33[_0x56ae('0x9','bhU!')](_0x479bc4,_0x5bfb33[_0x56ae('0xa','XWxk')]))){_0x384319[_0x45a1e7](_0x5bfb33[_0x56ae('0xb','sRx$')]('删除',_0x5bfb33[_0x56ae('0xc','4A*2')]));}}catch(_0x426950){_0x384319[_0x45a1e7](_0x5bfb33['gNqFs']);}}(window));;encode_version = '__0xebb83';
