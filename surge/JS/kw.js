/*
酷我音乐 解锁会员试听及部分功能
By Nobyda

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/surge/JS/kw.js

[mitm]
hostname = vip1.kuwo.cn

***************************
Surge4 or Loon:

[Script]
http-response ^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/surge/JS/kw.js
