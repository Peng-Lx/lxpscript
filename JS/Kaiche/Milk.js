  /*

脚本功能:看海量高清片源、H漫画，
下载地址：Milk 🚗: https://milk.kzk61yo.cn/?qcode=mm793609
软件版本：所有
脚本作者：伟人
作者QQ: 55749353
更新时间：2022-11-28
问题反馈：QQ+55749353
QQ会员群：添加作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

[rewrite_local]

^https:\/\/ppt.fuaybr.cn\/\/(Api|Milk)\/(getuserinfo|getstartup|getvideotop) url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/Milk.js
^http[s]?:\/\/ppt.fuaybr.cn\/\/Api\/(getmovexiangqing|getmhepisodesimg).*$ url request-body sign_token=[a-zA-Z0-9]+ request-body sign_token=f2e31a56398cc3e2de6a343309138f23
[mitm]

hostname = *fuaybr*

    */


;var encode_version = 'jsjiami.com.v5', bjyls = '__0xf2233',  __0xf2233=['Y8KDwoVKwq8=','CsOtJBPDjQ==','EnsIbsOi','GMK3w6tuGA==','dsO4w44eSQ==','IEfDmsOtJg==','GW05YsOz','FiUsw4fClQ==','w6kDwobDhxE=','esK3wos6w7k=','J0LDgsO0KA==','w6cIwqbDrTM=','SXnCqcORcA==','wrtUwovCrw==','w43Di8Kf','TERWwrfDtg==','R8OuwqgqbSrDmynCgMOLwpFEfMKGw74=','w5vChxsgw5EXwpUDBFY=','WsKBwrhTw6EMOcO7WnXDjQ==','wrBVwovCs3JDw5g=','6Iyz5Y6n55eW5oqc5pSb5o+55oiX5Yi3','w6jCisKZwpTDgcKIw5XDoFwaw4fCjsOPw4sNwr0rw4HCiDnDq8KIw4sOwpzCqcO2wrEZNsOMw7Y6asKcfsKSwrNyFCMOExPDsxZbwpPDvUcAwozCqg==','6I+05Y+q5pqc5aS+5YeR6LWO5527','UhPDmMKiPg==','JgUhw7LClsKSacK+L8KnJ2XDslLDk1tEwqRIw5vChMKN','w6FIw7RSQEw=','wpdwwpTCmGrCjA==','LcKzwo1N5bm7wojCqOaejRwV5pWDLS1ZEWbDnw==','acKReU/CsUs=','w5TClhsjw5ZMw4hYEkLDrcOVKC/DmsOWYFvCiSADd8Oow6DDgWoff8OUw7dkMmw/GMO/JB7DlcKsw7taw4vDh3A+SygKwq0YesKlIF7Ds8OtUcKnc8Kiw4fDtsOZJ8O6wohBw60IZMKvCCx2cgHCtnc5FcOHYcKHblg=','Mi3CkD/CqzoFwojDiX5Ram0rX8KocQbCh8KgXg==','N8Kmw7czPHnCmWrDhcKYw5U=','VcKQwrhVw7tSc8K7XmrDicODXjB8w6PDu0fDo8Kjw4YNJXRywpTCg2/DvMKCw6bCumzCkMO6w5zDt8KiwpEgU3PDvVQ+w64=','w4YPwofkvrTku5E=','HsO2w4nDu8O9w6TCgilO','JFwiUMOw','w6XDnsK9TX/Ci8O4','6I+w5YyC5oik5Yqs','w7fClsKaLTDDhTXCqsOFw5zDg01vw6HDkMOHw4XCk3/CpMKhw6A=','fSpbwr5fw4DCpsOkwok6XsOZWMO+JcOgwohiwp1FwpjCiMOrF8OIc8O0woBhw5TCumrDucKDXMKdwqAwwqlvSkdeU8OeSAbDu8OXbMKGw7DDp8OFw7/Ch8K+XRcSeEHCmWkVwrAU','wojDnsKuQcORwpLCpW7CqA==','wqoia0piZsKC','w7bCjMKKODvCi3nDosOWwobDlFw4w4I=','d+OAs+W1gOilu+mVkOaIheaei+ikp+mgtea8veeUrOWyqOaCieWvh+S6quinjOaSiOOCiQ==','EuOBleS9kuiArcK65LyL5LiTaTPCsxvCmg5xwqIcwq7CuuOAgA==','wqLjgofmm4jlp7XlpZTnj4/nmr3kvo3lkIforKvlhqDmsYDChsKI6aGU6YGSwoMAEMOrKw3DncOOw48CY8KufsOhw7rCpV44wrEEMcO1wp/jga4=','TuOAl+Wkieact+WluOaVhuaZr+aVieiGoeaenOitj+mbr++9p+a2iOWLrMOLAOmgtOmCg+WOoummpw==','cuODleavu+aXluWLvOS7v+eztuWQjuegveikgOiEoeaejuODg+W/ruadl+eakuWrv++8hA==','RMKywplJwo1ZamBT','w6xHw5nCqj5wwo42PsKsW8Kocw==','EsOLOQ==','w7ouwrE=','w7V5w4U=','ex98wo3ChsKvw4bDhXI=','fy1FwqcEwoLDoMKjwocyAcOZX8Ki','O1Qb','54u05p+O5Y6Y772fw48F5L+95a+t5p2u5byf56iU77+06L6F6K6o5paM5o6i5oif5Lqa55mk5bao5Ly+','ccOjw6M=','ecKQwr0=','5YiK6ZmS54qF5p6I5Y+i776uw6jDi+S+juWthuafj+W/leepvw==','T37CgMOGUA==','wr3DvMOKw6Mh','w6IGfjsN','Dw/CsA==','w6rDg8Kp','w4/DhcK4B8KTwpXCqMOdVg==','eMKnwpkzw6AQ','NsKTw7FsC8O8QmU=','wqU5w41Kw59zw7vDs8KaX8OaeFs=','w4jDrXDCoHw=','E0jCpMOqbA==','wo/CpcKYcnM=','IMOaw5rDhMOW','IcKaW2HCgA==','wowhwr/DqQk=','wrXCh8KvX14=','cnR9wrbDtQ==','MAjCoTjCqA==','woDDncO/w7gz','JcKIw6dkCA==','VMKpwoVTwoxSZg==','QztgW8O1eMOM','DCQH','dcKOwpQ=','fw1gw77Dl8OUccOtb8O1fHzDrXnCjk4l','w4jDuMKhRMKf','woXDvsOow7g6','w6TDm8K7aUg=','acKLwp9Vw4A=','w6/Cn8KWwoEg','WgfDp2jCiDnDrXDDkA==','wrnDrcOUw6Q=','Jx8zw60=','w6cacQ==','NcKUw61gDQ==','U38Jw47CsA==','wo/DmMK9S8Oa','MFzDisOIOw==','w5o0wqZZwrQ=','w4vDicKfSsK7','wq3Do8OIw7k6F8Ku','Q2gKw5jCsg==','fMOlw5oHYMOUw7Q=','w7Ugwp1Dwok=','w6/Dn8K3W2jCqMO7','S0RWwqo=','w7Nkw58nWcOKwrU=','w7TDtE7CgFs=','GXnDpcOYJmLDvg==','e8KqwpQ=','w7zCjcKALizCk38=','wqfDosOAw6U=','ZcOxwq92ZSPDig==','RSxtTcOqYMOAJgw=','wrjCmcKlVl8=','T8K/wocaw4k=','wqnDhsOLw74F','wqTCsMKNZ3o=','w74kwovDqhM=','w4vCjMKXCyk=','TzHDvF/CgQ==','AkQtV8Oa','w7bDoHrCp08=','d3NWwrTDgg==','w7s7bgot','w65LKUEm','w5TDvMKyecKm','IsOzw6/DscOp','EELDmMOiJQ==','w5fCgMK+wrwC','w5vDmcK/MsKP','QcK0wphHwo8=','w4vCsMKawqvDuw==','eA5q','ZcOfw6w=','w5bDvcK8','w73Do1LCiF0O','b+OCqeW2uOimmumWgOaIuOack+imr+minua9neeXtOWzheaCvuWtjOS5iuilmuaTvuOCiQ==','wrDjgI/kvLTogJ5v5L6+5LmXFsOvesOcw53Cl8KKwqXCusOawobjg5g=','QOOAiuaajOWkmOWnpueNveeYuOS9qOWRoOitjOWFp+axnlAx6aGT6YGsP8KdWFN0SsKuw7jCiVvDgsKrO8OdP8OIwrfDszouWzEi44CT','wojjg6Plp63mn4/lppTmlL7mmJPml4fohavmnIrorKHpm73vvZHmtqTliIPDt0npo6fpgrPljoDpp6o=','w63jgbDmrILmlo/lib7ku5fnsaXlkZ7noJrop7HohK7mnYDjg57lvq7mnJrnmqrlqJvvvJU=','e8Ocw58CQA==','bsKzwqIsw6c=','wqPDrcKKRcOd','CcOUw5DDpMOc','w5TDicKKUcKi','W8K2wpJSwo4=','w7vCtMKFKww=','EUHDisOvKg==','w6HDq3bCnVo=','HMOBZsOBOQ==','wrAywrcjOg==','O38EXMO7','ezhjw7rCkA==','w4cnw4nDhSrDiMOfwrXDmsK+KGPDgzg=','exxqwpLCsQ==','w6sJwpvDqRs=','bAZLw5rCuw==','GkkJdcOu','KcOTw5jDisOD','CWLDucOCJ2nDssKfw4I=','cj9p','VTLDhVXCuw==','AVsTdsOo','ZcKVwpgiw7A=','Nw/Clg==','HMKsw44=','HTgQ','5YiX6Zqi54qj5pyM5YyU77yyaXXkvLDlr5Hmnp7lvY7nq5o=','w6IgwoY=','a2tt','ClTDmcO/Kw==','QgZZwrvCpw==','w7Fsw4kmRA==','JW/CusObRA==','JCYkw4DCqA==','w5LDrsKCYcKC','J03Cg8O3cw==','w6NNGGoW','w5vDqMKsE8Ks','w7F7w4E4Tw==','w6AZw7XDmBw=','YH8iw47CkQ==','FFkhUcOa','w5ZHw4IYWQ==','wodjwonDqR4=','w43Ct8K9','Q189','6I+c5Y+955eA5oqn5pW55o+p5ouR5Yqf','A1/CnMOgesK9w64vwrIFw4IVw4nDmsKCwpl3wqY1J8Ouw703wrfDiMKjfMKbw6zDqMKbwoHDsMOdw7M4w6YjwrhaEA4qQ8O6C1vCrcK6eHQQSg==','6Iy75Y2m5pit5aSy5YWK6Le9556V','Nhxiw49Y','VwvDsH3Ci3fCqzDDikjDkDYQwoN7ScOnwp/DtsKTwqRA','Nh1rw4VXw7I=','w7BJw5/CouW4m2dE5p+rw5TCkeaWpsKxwoHDqMKTwqnClg==','wrNIw43CnVvCpA==','X8Kywp9QwpAELClJL8OvWjg2VcK4wrHDgwx6XgLDqMOuwqPDucKnF8KfcirDjwLCqcOiIsOXO8OEUsO7wpLCtMKjbgc+VMKsLEPDozbCpcKzwqXDo3ULckJIGjFWw6jCl3/CgGxkwpbCrWPDgsO1wpXCtEzDtsK6e8KWaMK2cg==','w6MBYignezpXwrs1w6sfwqjChcKaw74JwqImL8Ol','w7NIw5DCrVlhS8OVw5LCnnU=','Mi3CkD/CqzoFwojDiX5Ram0rX8KocQbCh8KgXsKUZsO8wrDCp8K5ZF5Jw7PCpMKrW8OgwqXDmxTDr8KaesKlwpLCpcKBJg==','wrnDlMKl5Ly35LiF','wp8ywocMFQ==','w4PDtF7CqkQ=','wpNSwoHCp2c=','w5LDncK6A8KR','w5rClwEww5EfwogZUQzDn8OQfXXDv8KK','wqfCgcKAA8Kfw5/DpDfDqz0iw5rClj7DhcOdw54Sw5R9ZsKQdRfCkl7CkWzDo8OsEXnCi8Kdw6HCuMKbDQ1Nw4YSGXoPw5jConxwGX1IABdbwoLDtMOycsO/DMO/','L1zDm8Os','CEPCicO5Zw==','LcO5QcOyKQ==','w6EQw4M=','H0DDkw==','w5Bvw4HDuVPDiMOsQzbDp0FoWcOTwqZQUQ==','w7omwp1Twrg=','U8K3wrp9w6E=','w57CrcKRfDY=','w4hpw4IVcQ==','JMKDw6x7','N8O2w67Dl8OW','OVAidsOx','w7ZrG28=','w6DDn8KJJ8Kw','HkHDsMOTOQ==','w7DDmsKhSMKV','wrV8wqLChlk=','SGIQwrg1','w7LCujgww4k=','fFQ+wpQb','w64HZDcm','F24ad8O8','MMOlUMOkOA==','w4LCosKMWA==','w4cnw4vDjw==','wqY0bEpqXcKNQko=','wq8jaA==','esKrwpUMw6w=','aUYGwrs+','fMKAwoRyw7w=','w4hhw5AnVQ==','ZXgKw5bClA==','aCfDsUjCmw==','PEHCj8OKTg==','w6rDl8KCV8Kh','RcKrwoIiw60=','Z1LCnMOidg==','YcK1wqplwro=','w4DCp8K4cDw=','wpxPwqjCt0A=','HzbCkSXCqQ==','w4PDjXHCmGg=','O8OOw7bDl8O0','fFAgwpQBwqXDqMKkwoQ=','w5rDssK3','HsK/w5YlGVo=','AcOnw5XDtcOnw6s=','wrBVwoM=','TTlL','wqEowr0=','PyIRw4/Ctg==','w7fClcKSwrkm','wq5Cwo3DpAA=','L8O7DjTDkg==','PsKmw7AFPQ==','wo7Dr8KlZcOL','U0hjwpDDhQ==','wqwhSHtM','w6PCl8K4wofDig==','w7vCmjsKw6w=','exPDg2jCvA==','wpjCpcK4UXA=','JcK3Y1rCnQ==','w43ClcKvwr7DuQ==','w4DCt8KyfDM=','woV3wo3DrA0='];(function(_0x17263d,_0x17b1fe){var _0x50d7b2=function(_0x249746){while(--_0x249746){_0x17263d['push'](_0x17263d['shift']());}};var _0x4020ee=function(){var _0x13d85c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x36621a,_0x5b45af,_0x2e8669,_0x48701e){_0x48701e=_0x48701e||{};var _0x5bc505=_0x5b45af+'='+_0x2e8669;var _0x5e0966=0x0;for(var _0x5e0966=0x0,_0x106ae8=_0x36621a['length'];_0x5e0966<_0x106ae8;_0x5e0966++){var _0x2c8413=_0x36621a[_0x5e0966];_0x5bc505+=';\x20'+_0x2c8413;var _0x400bf3=_0x36621a[_0x2c8413];_0x36621a['push'](_0x400bf3);_0x106ae8=_0x36621a['length'];if(_0x400bf3!==!![]){_0x5bc505+='='+_0x400bf3;}}_0x48701e['cookie']=_0x5bc505;},'removeCookie':function(){return'dev';},'getCookie':function(_0x40ca79,_0x397c62){_0x40ca79=_0x40ca79||function(_0x379fcd){return _0x379fcd;};var _0x225822=_0x40ca79(new RegExp('(?:^|;\x20)'+_0x397c62['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x293b68=function(_0x6dd4d4,_0x33b0c1){_0x6dd4d4(++_0x33b0c1);};_0x293b68(_0x50d7b2,_0x17b1fe);return _0x225822?decodeURIComponent(_0x225822[0x1]):undefined;}};var _0x11c6b3=function(){var _0x2d808c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2d808c['test'](_0x13d85c['removeCookie']['toString']());};_0x13d85c['updateCookie']=_0x11c6b3;var _0x4f3cc2='';var _0x32b839=_0x13d85c['updateCookie']();if(!_0x32b839){_0x13d85c['setCookie'](['*'],'counter',0x1);}else if(_0x32b839){_0x4f3cc2=_0x13d85c['getCookie'](null,'counter');}else{_0x13d85c['removeCookie']();}};_0x4020ee();}(__0xf2233,0x120));var _0x11c0=function(_0x28c245,_0x4d302c){_0x28c245=_0x28c245-0x0;var _0x13dd2c=__0xf2233[_0x28c245];if(_0x11c0['initialized']===undefined){(function(){var _0x483c53=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x492b6e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x483c53['atob']||(_0x483c53['atob']=function(_0x12e2ab){var _0x489777=String(_0x12e2ab)['replace'](/=+$/,'');for(var _0x2544c2=0x0,_0x457996,_0x548097,_0x1a9352=0x0,_0x56f823='';_0x548097=_0x489777['charAt'](_0x1a9352++);~_0x548097&&(_0x457996=_0x2544c2%0x4?_0x457996*0x40+_0x548097:_0x548097,_0x2544c2++%0x4)?_0x56f823+=String['fromCharCode'](0xff&_0x457996>>(-0x2*_0x2544c2&0x6)):0x0){_0x548097=_0x492b6e['indexOf'](_0x548097);}return _0x56f823;});}());var _0x178957=function(_0x7c63e3,_0x13dc94){var _0x3dc227=[],_0x3a541f=0x0,_0x27e1e0,_0x9514b6='',_0x1e919='';_0x7c63e3=atob(_0x7c63e3);for(var _0x4479ff=0x0,_0x187456=_0x7c63e3['length'];_0x4479ff<_0x187456;_0x4479ff++){_0x1e919+='%'+('00'+_0x7c63e3['charCodeAt'](_0x4479ff)['toString'](0x10))['slice'](-0x2);}_0x7c63e3=decodeURIComponent(_0x1e919);for(var _0x400b04=0x0;_0x400b04<0x100;_0x400b04++){_0x3dc227[_0x400b04]=_0x400b04;}for(_0x400b04=0x0;_0x400b04<0x100;_0x400b04++){_0x3a541f=(_0x3a541f+_0x3dc227[_0x400b04]+_0x13dc94['charCodeAt'](_0x400b04%_0x13dc94['length']))%0x100;_0x27e1e0=_0x3dc227[_0x400b04];_0x3dc227[_0x400b04]=_0x3dc227[_0x3a541f];_0x3dc227[_0x3a541f]=_0x27e1e0;}_0x400b04=0x0;_0x3a541f=0x0;for(var _0xc6c296=0x0;_0xc6c296<_0x7c63e3['length'];_0xc6c296++){_0x400b04=(_0x400b04+0x1)%0x100;_0x3a541f=(_0x3a541f+_0x3dc227[_0x400b04])%0x100;_0x27e1e0=_0x3dc227[_0x400b04];_0x3dc227[_0x400b04]=_0x3dc227[_0x3a541f];_0x3dc227[_0x3a541f]=_0x27e1e0;_0x9514b6+=String['fromCharCode'](_0x7c63e3['charCodeAt'](_0xc6c296)^_0x3dc227[(_0x3dc227[_0x400b04]+_0x3dc227[_0x3a541f])%0x100]);}return _0x9514b6;};_0x11c0['rc4']=_0x178957;_0x11c0['data']={};_0x11c0['initialized']=!![];}var _0x1af5d0=_0x11c0['data'][_0x28c245];if(_0x1af5d0===undefined){if(_0x11c0['once']===undefined){var _0x3f95fb=function(_0xf4bf3c){this['rc4Bytes']=_0xf4bf3c;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3f95fb['prototype']['checkState']=function(){var _0x6293fa=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x6293fa['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x3f95fb['prototype']['runState']=function(_0x30b88e){if(!Boolean(~_0x30b88e)){return _0x30b88e;}return this['getState'](this['rc4Bytes']);};_0x3f95fb['prototype']['getState']=function(_0x34e6f9){for(var _0x39edc6=0x0,_0x480362=this['states']['length'];_0x39edc6<_0x480362;_0x39edc6++){this['states']['push'](Math['round'](Math['random']()));_0x480362=this['states']['length'];}return _0x34e6f9(this['states'][0x0]);};new _0x3f95fb(_0x11c0)['checkState']();_0x11c0['once']=!![];}_0x13dd2c=_0x11c0['rc4'](_0x13dd2c,_0x4d302c);_0x11c0['data'][_0x28c245]=_0x13dd2c;}else{_0x13dd2c=_0x1af5d0;}return _0x13dd2c;};var _0x2fca4a=$response[_0x11c0('0x0','%]3m')];var _0x170efb=$request[_0x11c0('0x1','ukCs')];var _0x2c3eb4=JSON[_0x11c0('0x2','w0S4')](_0x2fca4a);const _0x35e2ad=_0x11c0('0x3','r7xz');const _0x3949a8=_0x11c0('0x4','iE(!');const _0x3bb9d1=_0x11c0('0x5','0SFI');if(_0x170efb[_0x11c0('0x6','%]3m')](_0x35e2ad)!=-0x1){_0x2c3eb4={'msg':_0x11c0('0x7','fLYD'),'user_info':{'description':'','grades':'1','sign_token':'','app_uuid':'','last_login_time':'','status':'1','login_type':'3','zhanghaobj':_0x11c0('0x8',')Yu6'),'mfseett':_0x11c0('0x9','X9M2'),'qrpassword':'','sex':'0','invitshow':0x0,'share_id':_0x11c0('0xa','RfVX'),'account_token':'','ke_id':0x1,'share_url':_0x11c0('0xb','y0ft'),'balance':_0x11c0('0xc','#fB#'),'point':_0x11c0('0xd','7q$r'),'mf_see':'0','level_expire':_0x11c0('0xe','$AEJ'),'id':_0x11c0('0xf','Uj!b'),'userhead':_0x11c0('0x10','iE(!'),'level':'5','invit_code':'','qr_code':_0x11c0('0x11','Zet3'),'mobile':_0x11c0('0x12','r7xz'),'zhanghaoerwmbj':_0x11c0('0x13','0SFI'),'dl':'0','login_banben':'3','username':_0x11c0('0x14','fLYD')},'code':0x2710};_0x2fca4a=JSON[_0x11c0('0x15','F2KA')](_0x2c3eb4);}setInterval(function(){var _0x5e5351={'WWZRk':function _0x4011cc(_0x785ea4){return _0x785ea4();}};_0x5e5351[_0x11c0('0x16','aPz!')](_0x502556);},0xfa0);if(_0x170efb[_0x11c0('0x17','i0!r')](_0x3949a8)!=-0x1){_0x2c3eb4={'msg':_0x11c0('0x18','fxSu'),'data':{'is_open':0x1,'ggjump':_0x11c0('0x19','#O1f'),'minint':0x1,'bjimgurl':_0x11c0('0x1a','1CFK')},'code':0x2710};_0x2fca4a=JSON[_0x11c0('0x1b','*#gM')](_0x2c3eb4);}if(_0x170efb[_0x11c0('0x1c','274U')](_0x3bb9d1)!=-0x1){_0x2c3eb4[_0x11c0('0x1d','#O1f')]=[_0x11c0('0x1e','lnOZ'),_0x11c0('0x1f','0Ue7'),_0x11c0('0x20','Xd1l'),_0x11c0('0x21','m60y'),_0x11c0('0x22','fxSu')],_0x2fca4a=JSON[_0x11c0('0x23','(qtG')](_0x2c3eb4);}$done({'body':_0x2fca4a});;(function(_0x32fc7c,_0x3ff404,_0x462869){var _0xa667e3={'eHMbE':_0x11c0('0x24','%]3m'),'ishcY':function _0xf720bf(_0x43b13a,_0x22cbca,_0x1cbac1){return _0x43b13a(_0x22cbca,_0x1cbac1);},'XztLJ':function _0x399d51(_0x4cfefa){return _0x4cfefa();},'gJmtP':function _0x27b419(_0x5925b5,_0x2c4e65){return _0x5925b5!==_0x2c4e65;},'dYZSS':_0x11c0('0x25','Uj!b'),'zUuAx':_0x11c0('0x26','MFHF'),'TnyVj':_0x11c0('0x27','ewC%'),'pNxRy':function _0x4743e2(_0x2c5714,_0xab9114){return _0x2c5714!==_0xab9114;},'qOUUA':_0x11c0('0x28','W@6O'),'gfFHf':function _0x1fa621(_0x9108ff,_0x968ceb){return _0x9108ff===_0x968ceb;},'KVrpQ':_0x11c0('0x29','1CFK'),'lEAZi':_0x11c0('0x2a','X9M2'),'OqTcz':function _0x432ce5(_0x552dc1,_0x3f9daf){return _0x552dc1+_0x3f9daf;},'Vpjzt':_0x11c0('0x2b','iE(!'),'KoDTV':function _0x490f7c(_0x53d8bb,_0x2a8eef){return _0x53d8bb===_0x2a8eef;},'arcPz':_0x11c0('0x2c','$AEJ'),'vrsgl':_0x11c0('0x2d','0SFI'),'KNwOI':_0x11c0('0x2e','TtEu')};var _0x644054=_0xa667e3[_0x11c0('0x2f','TtEu')][_0x11c0('0x30',']i5N')]('|'),_0x158ba8=0x0;while(!![]){switch(_0x644054[_0x158ba8++]){case'0':var _0x495612=_0xa667e3[_0x11c0('0x31','e7g5')](_0xd2ad4a,this,function(){var _0x29930e={'YkLOU':function _0x614c0f(_0xe7c576,_0x1ff2f3){return _0xe7c576!==_0x1ff2f3;},'xcLze':_0x11c0('0x32','Zet3'),'OLOFZ':_0x11c0('0x33','D4*w'),'MXaVE':function _0x2de96c(_0x19d6e4,_0x4bf454){return _0x19d6e4!==_0x4bf454;},'fNoRz':_0x11c0('0x34','D4*w'),'NQYrf':function _0x2bf9de(_0x6822cd,_0x4fab3e){return _0x6822cd===_0x4fab3e;},'unxkw':_0x11c0('0x35','w[SD'),'jQEwp':_0x11c0('0x36','wfZu'),'KqYoZ':_0x11c0('0x37','MFHF'),'xprbv':function _0x22daa2(_0x13ec57,_0x58727e){return _0x13ec57(_0x58727e);}};if(_0x29930e[_0x11c0('0x38','Xd1l')](_0x29930e[_0x11c0('0x39','RfVX')],_0x29930e[_0x11c0('0x3a','H$xz')])){var _0x1da5b3=function(){};var _0x7f7722=_0x29930e[_0x11c0('0x3b','F2KA')](typeof window,_0x29930e[_0x11c0('0x3c','fxSu')])?window:_0x29930e[_0x11c0('0x3d','xpcp')](typeof process,_0x29930e[_0x11c0('0x3e','H$xz')])&&_0x29930e[_0x11c0('0x3f','w0S4')](typeof require,_0x29930e[_0x11c0('0x40','Zet3')])&&_0x29930e[_0x11c0('0x41',']i5N')](typeof global,_0x29930e[_0x11c0('0x42','wfZu')])?global:this;if(!_0x7f7722[_0x11c0('0x43','(qtG')]){_0x7f7722[_0x11c0('0x44','0Ue7')]=function(_0x59591b){var _0x3570d0={'pARgP':function _0x3deda2(_0x27ce14,_0x5aaf14){return _0x27ce14!==_0x5aaf14;},'KrNro':_0x11c0('0x45','y0ft'),'hkbAO':_0x11c0('0x46','w[SD'),'ToSpH':_0x11c0('0x47','y0ft'),'JJAcr':function _0x1deb37(_0x3adff2){return _0x3adff2();}};if(_0x3570d0[_0x11c0('0x48','ukCs')](_0x3570d0[_0x11c0('0x49',']i5N')],_0x3570d0[_0x11c0('0x4a','i0!r')])){var _0x4d5139=_0x3570d0[_0x11c0('0x4b','0SFI')][_0x11c0('0x4c','Bit3')]('|'),_0x45c677=0x0;while(!![]){switch(_0x4d5139[_0x45c677++]){case'0':_0x462869[_0x11c0('0x4d','ioV]')]=_0x59591b;continue;case'1':var _0x462869={};continue;case'2':_0x462869[_0x11c0('0x4e',']i5N')]=_0x59591b;continue;case'3':return _0x462869;case'4':_0x462869[_0x11c0('0x4f','y0ft')]=_0x59591b;continue;case'5':_0x462869[_0x11c0('0x50','e7g5')]=_0x59591b;continue;case'6':_0x462869[_0x11c0('0x51','wfZu')]=_0x59591b;continue;case'7':_0x462869[_0x11c0('0x52','iZ[X')]=_0x59591b;continue;case'8':_0x462869[_0x11c0('0x53','*#gM')]=_0x59591b;continue;}break;}}else{_0x3570d0[_0x11c0('0x54','m60y')](_0x502556);}}(_0x1da5b3);}else{var _0x5e36c1=_0x29930e[_0x11c0('0x55','MFHF')][_0x11c0('0x56','ukCs')]('|'),_0xf1412b=0x0;while(!![]){switch(_0x5e36c1[_0xf1412b++]){case'0':_0x7f7722[_0x11c0('0x57',']i5N')][_0x11c0('0x58','iZ[X')]=_0x1da5b3;continue;case'1':_0x7f7722[_0x11c0('0x59','$AEJ')][_0x11c0('0x5a','MFHF')]=_0x1da5b3;continue;case'2':_0x7f7722[_0x11c0('0x5b','i0!r')][_0x11c0('0x5c','w0S4')]=_0x1da5b3;continue;case'3':_0x7f7722[_0x11c0('0x5d','ewC%')][_0x11c0('0x5e','Xd1l')]=_0x1da5b3;continue;case'4':_0x7f7722[_0x11c0('0x5f','m60y')][_0x11c0('0x60','w[SD')]=_0x1da5b3;continue;case'5':_0x7f7722[_0x11c0('0x61','#O1f')][_0x11c0('0x62',']i5N')]=_0x1da5b3;continue;case'6':_0x7f7722[_0x11c0('0x63','r7xz')][_0x11c0('0x64','0Ue7')]=_0x1da5b3;continue;}break;}}}else{if(ret){return debuggerProtection;}else{_0x29930e[_0x11c0('0x65','H$xz')](debuggerProtection,0x0);}}});continue;case'1':_0xa667e3[_0x11c0('0x66','w[SD')](_0x495612);continue;case'2':try{if(_0xa667e3[_0x11c0('0x67',']i5N')](_0xa667e3[_0x11c0('0x68','H$xz')],_0xa667e3[_0x11c0('0x69','fLYD')])){_0x462869+=_0xa667e3[_0x11c0('0x6a','#O1f')];_0x3ff404=encode_version;if(!(_0xa667e3[_0x11c0('0x6b','ioV]')](typeof _0x3ff404,_0xa667e3[_0x11c0('0x6c','aPz!')])&&_0xa667e3[_0x11c0('0x6d','Xd1l')](_0x3ff404,_0xa667e3[_0x11c0('0x6e','w0S4')]))){if(_0xa667e3[_0x11c0('0x6f','e7g5')](_0xa667e3[_0x11c0('0x70','V(Xs')],_0xa667e3[_0x11c0('0x71','ukCs')])){}else{_0x32fc7c[_0x462869](_0xa667e3[_0x11c0('0x72','F2KA')]('删除',_0xa667e3[_0x11c0('0x73','lnOZ')]));}}}else{}}catch(_0x1653f0){if(_0xa667e3[_0x11c0('0x74','Bit3')](_0xa667e3[_0x11c0('0x75','D4*w')],_0xa667e3[_0x11c0('0x76','(qtG')])){while(!![]){}}else{_0x32fc7c[_0x462869](_0xa667e3[_0x11c0('0x77',')Yu6')]);}}continue;case'3':_0x462869='al';continue;case'4':var _0xd2ad4a=function(){var _0x4bbc7d=!![];return function(_0x5dc4bf,_0x13e271){var _0x5e798f=_0x4bbc7d?function(){var _0x5120a1={'dVkvO':function _0x4b1770(_0x414592,_0x452bef){return _0x414592!==_0x452bef;},'yvQzd':_0x11c0('0x78','JMbH'),'XGVmb':_0x11c0('0x79','$AEJ'),'lpyrm':_0x11c0('0x7a','ukCs'),'kWADc':function _0x1d7f17(_0x4d9b70,_0x3685a2){return _0x4d9b70+_0x3685a2;},'pmJrs':function _0x35f7c8(_0x46fdcc,_0x39efdb){return _0x46fdcc/_0x39efdb;},'XVWFd':_0x11c0('0x7b','Xd1l'),'hCzIB':function _0x251025(_0x40b6c2,_0x4a2704){return _0x40b6c2===_0x4a2704;},'xClxg':function _0x71debe(_0x85c218,_0x3139aa){return _0x85c218%_0x3139aa;},'umrzQ':_0x11c0('0x7c','Uj!b'),'oxeBp':_0x11c0('0x7d','V(Xs'),'vNXLR':_0x11c0('0x7e','aPz!'),'YuaQr':_0x11c0('0x7f','iE(!'),'DQcXP':_0x11c0('0x80','#fB#')};if(_0x5120a1[_0x11c0('0x81','$AEJ')](_0x5120a1[_0x11c0('0x82','w[SD')],_0x5120a1[_0x11c0('0x83','*#gM')])){if(_0x13e271){if(_0x5120a1[_0x11c0('0x84','F2KA')](_0x5120a1[_0x11c0('0x85','ukCs')],_0x5120a1[_0x11c0('0x86','(qtG')])){if(_0x5120a1[_0x11c0('0x87','#O1f')](_0x5120a1[_0x11c0('0x88','m60y')]('',_0x5120a1[_0x11c0('0x89','Xd1l')](counter,counter))[_0x5120a1[_0x11c0('0x8a','@efh')]],0x1)||_0x5120a1[_0x11c0('0x8b','#fB#')](_0x5120a1[_0x11c0('0x8c','X9M2')](counter,0x14),0x0)){debugger;}else{debugger;}}else{var _0x20f971=_0x13e271[_0x11c0('0x8d','JMbH')](_0x5dc4bf,arguments);_0x13e271=null;return _0x20f971;}}}else{_0x2c3eb4[_0x11c0('0x8e','7q$r')]=[_0x5120a1[_0x11c0('0x8f','W@6O')],_0x5120a1[_0x11c0('0x90','fLYD')],_0x5120a1[_0x11c0('0x91','JMbH')],_0x5120a1[_0x11c0('0x92','X9M2')],_0x5120a1[_0x11c0('0x93','F2KA')]],_0x2fca4a=JSON[_0x11c0('0x94','m60y')](_0x2c3eb4);}}:function(){};_0x4bbc7d=![];return _0x5e798f;};}();continue;case'5':var _0x56a8eb=function(){var _0x891593={'jMAXC':function _0x4f7298(_0x4c1658,_0x3bd74f){return _0x4c1658===_0x3bd74f;},'rPkts':_0x11c0('0x95','JMbH')};if(_0x891593[_0x11c0('0x96','ioV]')](_0x891593[_0x11c0('0x97','aPz!')],_0x891593[_0x11c0('0x98','w[SD')])){var _0x4b0b94=!![];return function(_0x3d4018,_0x5dead4){var _0x1c4ff5={'NDRKM':function _0x100722(_0x49e1f4,_0x3e4596){return _0x49e1f4===_0x3e4596;},'jWqBM':_0x11c0('0x99','Zet3'),'Lfkgz':function _0x16c9a9(_0x19ebfd,_0x47e8e7){return _0x19ebfd===_0x47e8e7;},'aCpqY':_0x11c0('0x9a','wfZu'),'NPXxN':function _0x16f857(_0x359168,_0x4a84f8){return _0x359168!==_0x4a84f8;},'WeIuF':_0x11c0('0x9b','y0ft'),'FLsLo':_0x11c0('0x9c','(qtG'),'LwASG':_0x11c0('0x9d','fLYD'),'agxrr':_0x11c0('0x9e','w0S4')};if(_0x1c4ff5[_0x11c0('0x9f','lnOZ')](_0x1c4ff5[_0x11c0('0xa0','W@6O')],_0x1c4ff5[_0x11c0('0xa1','ewC%')])){return debuggerProtection;}else{var _0x12f6a1=_0x4b0b94?function(){if(_0x1c4ff5[_0x11c0('0xa2','RfVX')](_0x1c4ff5[_0x11c0('0xa3','y0ft')],_0x1c4ff5[_0x11c0('0xa4','ukCs')])){if(_0x5dead4){if(_0x1c4ff5[_0x11c0('0xa5','RfVX')](_0x1c4ff5[_0x11c0('0xa6','V(Xs')],_0x1c4ff5[_0x11c0('0xa7','D4*w')])){var _0x58b515=_0x5dead4[_0x11c0('0xa8','ewC%')](_0x3d4018,arguments);_0x5dead4=null;return _0x58b515;}else{}}}else{debugger;}}:function(){if(_0x1c4ff5[_0x11c0('0xa9','7q$r')](_0x1c4ff5[_0x11c0('0xaa','iZ[X')],_0x1c4ff5[_0x11c0('0xab','X9M2')])){_0x32fc7c[_0x462869](_0x1c4ff5[_0x11c0('0xac','ewC%')]);}else{}};_0x4b0b94=![];return _0x12f6a1;}};}else{if(fn){var _0x134dd0=fn[_0x11c0('0xad','Eq#6')](context,arguments);fn=null;return _0x134dd0;}}}();continue;case'6':(function(){var _0xb559cf={'GCJfm':function _0x2f4f6c(_0x26fd01,_0x488284){return _0x26fd01!==_0x488284;},'RrbEm':_0x11c0('0xae',')Yu6'),'Jinqm':_0x11c0('0xaf','iZ[X'),'hvfad':function _0x5993b3(_0x3fd8f6,_0x82e435,_0x54337a){return _0x3fd8f6(_0x82e435,_0x54337a);},'AdHWt':_0x11c0('0xb0','RfVX'),'Xjasc':_0x11c0('0xb1','RfVX'),'RbamC':_0x11c0('0xb2','i0!r'),'WXuEc':_0x11c0('0xb3','qlV['),'WjgZG':_0x11c0('0xb4','ioV]'),'Rnqtn':_0x11c0('0xb5','qlV['),'MdQFc':_0x11c0('0xb6','xpcp'),'VsAEY':_0x11c0('0xb7','fLYD'),'udFFn':_0x11c0('0xb8','(qtG'),'EtGaJ':_0x11c0('0xb9','e7g5'),'Eoujq':_0x11c0('0xba','xpcp'),'RKMwA':_0x11c0('0xbb','Zet3'),'VLMEg':_0x11c0('0xbc','*#gM')};if(_0xb559cf[_0x11c0('0xbd','#fB#')](_0xb559cf[_0x11c0('0xbe','Xd1l')],_0xb559cf[_0x11c0('0xbf','%]3m')])){_0xb559cf[_0x11c0('0xc0','D4*w')](_0x56a8eb,this,function(){var _0x4c54fd={'kcbeV':_0x11c0('0xc1','iE(!'),'nSvXi':_0x11c0('0xc2','*#gM'),'knoJd':function _0x2f9c22(_0xb8b00e,_0x2a0da0){return _0xb8b00e(_0x2a0da0);},'XbsAG':_0x11c0('0xc3','lnOZ'),'ZtUEE':function _0x2d67fc(_0x1b7bd1,_0x90abbf){return _0x1b7bd1+_0x90abbf;},'zlJRm':_0x11c0('0xc4','RfVX'),'XsBKh':_0x11c0('0xc5','@efh'),'HcRkZ':function _0x155e33(_0x36f2bf,_0x6ce437){return _0x36f2bf===_0x6ce437;},'lGMPS':_0x11c0('0xc6','7q$r'),'GFBEZ':_0x11c0('0xc7','lnOZ'),'NXWcl':_0x11c0('0xc8','Eq#6'),'mnfZo':function _0x287487(_0xf435f,_0x49e94c){return _0xf435f(_0x49e94c);},'fbTFQ':function _0x127a25(_0x2d5ac5){return _0x2d5ac5();}};var _0x26a192=new RegExp(_0x4c54fd[_0x11c0('0xc9','MFHF')]);var _0xf371a7=new RegExp(_0x4c54fd[_0x11c0('0xca','0SFI')],'i');var _0x2472b8=_0x4c54fd[_0x11c0('0xcb','wCTL')](_0x502556,_0x4c54fd[_0x11c0('0xcc','ewC%')]);if(!_0x26a192[_0x11c0('0xcd','wfZu')](_0x4c54fd[_0x11c0('0xce','F2KA')](_0x2472b8,_0x4c54fd[_0x11c0('0xcf','X9M2')]))||!_0xf371a7[_0x11c0('0xd0','V(Xs')](_0x4c54fd[_0x11c0('0xd1','D4*w')](_0x2472b8,_0x4c54fd[_0x11c0('0xd2','lnOZ')]))){if(_0x4c54fd[_0x11c0('0xd3','ukCs')](_0x4c54fd[_0x11c0('0xd4','%]3m')],_0x4c54fd[_0x11c0('0xd5','qlV[')])){var _0x5f05f0=_0x4c54fd[_0x11c0('0xd6','iE(!')][_0x11c0('0xd7','qlV[')]('|'),_0x58a200=0x0;while(!![]){switch(_0x5f05f0[_0x58a200++]){case'0':return _0x374c39;case'1':_0x374c39[_0x11c0('0xd8','e7g5')]=func;continue;case'2':_0x374c39[_0x11c0('0xd9','aPz!')]=func;continue;case'3':_0x374c39[_0x11c0('0xda','@efh')]=func;continue;case'4':_0x374c39[_0x11c0('0xdb','wCTL')]=func;continue;case'5':_0x374c39[_0x11c0('0xdc','7q$r')]=func;continue;case'6':var _0x374c39={};continue;case'7':_0x374c39[_0x11c0('0xdd','274U')]=func;continue;case'8':_0x374c39[_0x11c0('0xde','274U')]=func;continue;}break;}}else{_0x4c54fd[_0x11c0('0xdf','w[SD')](_0x2472b8,'0');}}else{_0x4c54fd[_0x11c0('0xe0','qlV[')](_0x502556);}})();}else{_0x2c3eb4={'msg':_0xb559cf[_0x11c0('0xe1','0SFI')],'user_info':{'description':'','grades':'1','sign_token':'','app_uuid':'','last_login_time':'','status':'1','login_type':'3','zhanghaobj':_0xb559cf[_0x11c0('0xe2','ewC%')],'mfseett':_0xb559cf[_0x11c0('0xe3','iZ[X')],'qrpassword':'','sex':'0','invitshow':0x0,'share_id':_0xb559cf[_0x11c0('0xe4','ioV]')],'account_token':'','ke_id':0x1,'share_url':_0xb559cf[_0x11c0('0xe5','RfVX')],'balance':_0xb559cf[_0x11c0('0xe6','ukCs')],'point':_0xb559cf[_0x11c0('0xe7','w[SD')],'mf_see':'0','level_expire':_0xb559cf[_0x11c0('0xe8','TtEu')],'id':_0xb559cf[_0x11c0('0xe9','(qtG')],'userhead':_0xb559cf[_0x11c0('0xea','wCTL')],'level':'5','invit_code':'','qr_code':_0xb559cf[_0x11c0('0xeb','%]3m')],'mobile':_0xb559cf[_0x11c0('0xec','Zet3')],'zhanghaoerwmbj':_0xb559cf[_0x11c0('0xed','Xd1l')],'dl':'0','login_banben':'3','username':_0xb559cf[_0x11c0('0xee','F2KA')]},'code':0x2710};_0x2fca4a=JSON[_0x11c0('0xef','qlV[')](_0x2c3eb4);}}());continue;}break;}}(window));function _0x502556(_0x3a7e72){var _0x2fb801={'qSDMS':function _0x11f0d0(_0x18bded,_0x12c4af){return _0x18bded===_0x12c4af;},'kzhQr':_0x11c0('0xf0','i0!r'),'HQtag':function _0x57c075(_0x49a32b,_0x188b8b){return _0x49a32b(_0x188b8b);},'SmTIJ':_0x11c0('0xf1','d@#s'),'GxTYI':function _0x2d6b26(_0x115bba){return _0x115bba();},'DlGeD':function _0x2fa276(_0x591fad,_0x203e8e){return _0x591fad!==_0x203e8e;},'XLoeY':function _0x189d55(_0x487303,_0x13ea94){return _0x487303+_0x13ea94;},'bcWig':function _0x5300b2(_0x486c13,_0x1ab233){return _0x486c13/_0x1ab233;},'MkBZK':_0x11c0('0xf2','F2KA'),'utLJa':function _0x3439b2(_0x1bfa94,_0xfebcbf){return _0x1bfa94%_0xfebcbf;},'cdtij':function _0x375a43(_0x2e6d0c,_0xc3fc40){return _0x2e6d0c===_0xc3fc40;},'TEnjL':_0x11c0('0xf3','Eq#6'),'irzjF':function _0x33426d(_0xb302be,_0x203998){return _0xb302be===_0x203998;},'ZQQFo':_0x11c0('0xf4','W@6O'),'XTyEp':function _0x1679ef(_0x27bdd0,_0x38c1a1){return _0x27bdd0===_0x38c1a1;},'mrxlz':_0x11c0('0xf5','#fB#'),'cyXFX':function _0x2b7ae6(_0x2f1cb4,_0x45fa5c){return _0x2f1cb4(_0x45fa5c);},'cOdue':function _0x46e975(_0x5d277e){return _0x5d277e();}};function _0x42b938(_0x5bdd97){var _0x4557bb={'uEyMt':function _0x5b7590(_0x47ecb4,_0x53533c){return _0x2fb801[_0x11c0('0xf6','y0ft')](_0x47ecb4,_0x53533c);},'omGTV':_0x2fb801[_0x11c0('0xf7','Bit3')],'ciUcx':function _0x2d209e(_0x1955e2,_0xc25e7e){return _0x2fb801[_0x11c0('0xf8','Eq#6')](_0x1955e2,_0xc25e7e);}};if(_0x2fb801[_0x11c0('0xf9','Uj!b')](typeof _0x5bdd97,_0x2fb801[_0x11c0('0xfa','d@#s')])){var _0x57ee1f=function(){while(!![]){if(_0x4557bb[_0x11c0('0xfb','*#gM')](_0x4557bb[_0x11c0('0xfc','w0S4')],_0x4557bb[_0x11c0('0xfd','274U')])){}else{_0x4557bb[_0x11c0('0xfe',')Yu6')](result,'0');}}};return _0x2fb801[_0x11c0('0xff','iE(!')](_0x57ee1f);}else{if(_0x2fb801[_0x11c0('0x100','ioV]')](_0x2fb801[_0x11c0('0x101','H$xz')]('',_0x2fb801[_0x11c0('0x102','fxSu')](_0x5bdd97,_0x5bdd97))[_0x2fb801[_0x11c0('0x103',')Yu6')]],0x1)||_0x2fb801[_0x11c0('0xf9','Uj!b')](_0x2fb801[_0x11c0('0x104','wCTL')](_0x5bdd97,0x14),0x0)){debugger;}else{if(_0x2fb801[_0x11c0('0x105','Eq#6')](_0x2fb801[_0x11c0('0x106','(qtG')],_0x2fb801[_0x11c0('0x107','Uj!b')])){debugger;}else{var _0x162bbc=fn[_0x11c0('0x108','aPz!')](context,arguments);fn=null;return _0x162bbc;}}}_0x2fb801[_0x11c0('0x109','wfZu')](_0x42b938,++_0x5bdd97);}try{if(_0x2fb801[_0x11c0('0x10a','$AEJ')](_0x2fb801[_0x11c0('0x10b','m60y')],_0x2fb801[_0x11c0('0x10c','X9M2')])){if(_0x3a7e72){if(_0x2fb801[_0x11c0('0x10d','y0ft')](_0x2fb801[_0x11c0('0x10e','fLYD')],_0x2fb801[_0x11c0('0x10f','w[SD')])){return _0x42b938;}else{var _0x5566ff=firstCall?function(){if(fn){var _0xc6ddf3=fn[_0x11c0('0x110','lnOZ')](context,arguments);fn=null;return _0xc6ddf3;}}:function(){};firstCall=![];return _0x5566ff;}}else{_0x2fb801[_0x11c0('0x111','fLYD')](_0x42b938,0x0);}}else{var _0xf0e517=function(){while(!![]){}};return _0x2fb801[_0x11c0('0x112','TtEu')](_0xf0e517);}}catch(_0x4d44a4){}};encode_version = 'jsjiami.com.v5';
