/*
脚本功能：解锁SVIP
脚本整理：Peng-Lx
[rewrite_local]
# > 解锁 SVIP
^https?:\/\/biz\.caiyunapp\.com\/(membership_rights|v2\/user) url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/cytq.js
[mitm] 
hostname = biz.caiyunapp.com
surge&Loon
彩云天气 = type=http-response,requires-body=1,max-size=0,pattern=https?:\/\/biz\.caiyunapp\.com\/(membership_rights|v2\/user),script-path= https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/cytq.js
