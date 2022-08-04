/*
 *脚本功能：答岸Master VIP
 *脚本整理：Peng-Lx
      FROM：By Hausd0rff
 **********************
 *QX
 [rewrite_local]
 ^https?:\/\/123\.57\.195\.48\/api\/(Usercent|teach)er\/get(User|TeacherDetail)Info\?token=.+$ url script-response-body 
 **********************
 *hostname = 123.57.195.48

 **********************
 
 *Surge&loon
 [Script]
 http-response ^https?:\/\/123\.57\.195\.48\/api\/(Usercent|teach)er\/get(User|TeacherDetail)Info\?token=.+$ url requires-body=1,max-size=0,script-path=
 
 */
 
 

var body = $response.body;
var urlq = $request.url;
var objc = JSON.parse(body);

const svip = '/getUserInfo';
const play = '/getTeacherDetailInfo';

if (urlq.indexOf(play) != -1) {
    objc.data["is_vip"] = 2;
    body = JSON.stringify(objc);
}

if (urlq.indexOf(svip) != -1) {
    objc.data["is_vip"] = 2;
    objc.data["vip_expire_time"] = "32495476149";
    objc.data["vip_expire_date"] = "2999-09-28";
    objc.data["username"] = "PENG-Lx";
    objc.data["avatar"] = "http://dazclassbucket.oss-cn-beijing.aliyuncs.com/uploads/20211226/dfdd41c833cf30f5244f363e9a0ceb61.png";
    body = JSON.stringify(objc);
}

$done({ body });
