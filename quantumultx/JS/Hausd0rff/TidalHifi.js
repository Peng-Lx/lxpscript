/*
 *脚本功能：TIDAL解锁HiFi Plus for US
 *脚本整理：Peng-Lx
 **********************
 *QX
 [rewrite_local]
 ^https?:\/\/api\.tidal\.com\/v1\/users\/\d+\/subscription.+ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/TIDALHiFiPlusCrack.js
^https?:\/\/api\.tidal\.com\/v1\/tracks/\d+\/playbackinfopostpaywall.+ url script-analyze-echo-response https://raw.githubusercontent.com/yqc007/QuantumultX/master/TidalHiFiPlusCrack.js
 **********************
 *hostname = api.tidal.com
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https?:\/\/api\.tidal\.com\/v1\/(pages\/album|(user|track|page)s\/(\d+)\/(state|subscription|lyrics|onboarding|playbackinfopostpaywall)) requires-body=1,max-size=0,script-path= 
