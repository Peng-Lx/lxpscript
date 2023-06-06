/******************************************
 * @name 波点音乐
 * @desc 解锁音乐会员权限
 * @statement 仅供学习交流，禁止用于商业用途
 * @author yuheng
 * @create 20230519
 * @version 1.0.0
******************************************

[mitm]
hostname = bd-api.kuwo.cn

[rewrite_local]
^http[s]:\/\/(.*.kuwo.cn) url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/bdyy.js

******************************************/
const body = $response.body
    .replace(/isVip":\d/g, 'isVip":1')
    .replace(/vip":"\d"/g, 'vip":"1"')
    .replace(/expireDate":\d/g, 'expireDate":4082853940000');
$done({ body });
