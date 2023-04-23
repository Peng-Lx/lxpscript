// ==UserScript==
// @ScriptName        酷我音乐、酷我音乐纯净版[ SVIP+净化 ]
// @Attention         史上最全酷我音乐净化加VIP音乐畅听，已兼容酷我原版与酷我畅听版
// @Author            @ddgksf2013
// @WechatID          公众号墨鱼手记
// @TgChannel         https://t.me/ddgksf2021
// @Contribute        https://t.me/ddgksf2013_bot
// @Feedback          📮 ddgksf2013@163.com 📮
// @UpdateTime        2023-04-12
// @Attention         使用中若有问题请发邮件！
// @Suitable          自行观看“# > ”注释内容
// @Attention         如需引用请注明出处，谢谢合作！
// @Version           V2.0.44
// @ScriptURL         https://gist.githubusercontent.com/ddgksf2013/0f76e952f0c4a2579932f45a209b40c3/raw/Kuwo.conf
// ==/UserScript==



//本重写仅限本人使用，严禁传播
//解决酷我发热问题，在本地添加下面的分流
//host-suffix, kuwo.cn, direct

hostname = *.kuwo.cn, *.lrts.me


# > 酷我音乐_通用广告请求
https?:\/\/vip1\.kuwo\.cn\/vip\/activity\/kwMemberDay url reject-200
# > 酷我音乐_屏蔽热词
https?:\/\/hotword\.kuwo\.cn\/hotword\.s url reject-dict
# > 酷我音乐_通用广告请求
https?:\/\/vip1\.kuwo\.cn\/vip_adv\/ url reject-dict
# > 酷我音乐_通用广告请求
https?:\/\/wapi\.kuwo\.cn\/openapi\/v1\/app\/pasterAdvert url reject-200
# > 酷我音乐_应用内弹窗及右下角
^https?:\/\/mobilead\.kuwo\.cn\/ url reject-200
# > 酷我音乐_搜索框处理
https?:\/\/searchrecterm\.kuwo\.cn\/recterm\.s url script-response-body https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
# > 酷我音乐_去除首页轮播广告和tips
https?:\/\/mgxhtj\.kuwo\.cn\/mgxh\.s url script-response-body https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
# > 酷我音乐_去除会员页广告
https?:\/\/appi\.kuwo\.cn\/kuwopay\/vip-tab\/page\/cells url script-response-body https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
# > 酷我音乐_去除会员页顶部广告tab
https?:\/\/appi\.kuwo\.cn\/kuwopay\/vip-tab\/setting url script-response-body https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
# > 酷我音乐_开屏广告
https?:\/\/rich\.kuwo\.cn\/AdService url reject-200
# > 酷我音乐_数字专辑
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?newver url script-response-body https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
# > 酷我音乐_听书权限接口1
^https?:\/\/.*\.(kuwo|lrts)\.(cn|me)\/a\.p url script-response-body https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
# > 酷我音乐_听书权限接口2
^https?:\/\/.*\.kuwo\.cn\/v2\/api\/pay\/vip\/extraVipStatus url script-response-body https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
# > 酷我音乐_新版vip接口1
^https?:\/\/vip1\.kuwo\.cn\/vip\/enc\/user\/vip\?op=ui url script-response-body https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
# > 酷我音乐_新版vip接口2
^https?:\/\/vip1\.kuwo\.cn\/vip\/v2\/userbase\/vip\?op=get url script-response-body https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
# > 酷我音乐_旧版vip接口
^https?:\/\/vip1\.kuwo\.cn\/vip\/v2\/user\/vip($|\?op=ui) url script-response-body https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
# > 酷我音乐_皮肤解锁
^https?:\/\/vip1\.kuwo\.cn\/vip\/v2\/theme url script-response-body https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
# > 酷我音乐_无损下载[限纯净版]
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?ui url script-request-header https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
