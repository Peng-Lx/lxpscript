/*
配置参考：https://github.com/TributePaulWalker/Profiles/blob/main/JavaScript/Surge/TimeCard.js
世界节日倒计时 = script-name=世界节日倒计时,update-interval=0
*/
var tlist = {
  1: ["生日", "2023-05-12"],
  2: ["劳动节", "2023-05-01"],
  3: ["520", "2023-05-20"],
  4: ["521", "2023-05-21"],
  5: ["端午节", "2023-06-22"],
  6: ["WWDC22", "2023-06-07"],
  7: ["No老婆", "2022-12-12"],
  8: ["七夕节", "2023-08-04"],
  9: ["中秋节", "2022-09-10"],
  10: ["国庆节", "2022-10-01"],
  11: ["重阳节", "2022-10-04"],
  12: ["世界粮食日", "2022-10-16"],
  13: ["世界消除贫困日", "2022-10-17"],
  14: ["世界传统医药日", "2022-10-22"],
  15: ["联合国日", "2022-10-24"],
  16: ["世界勤俭日", "2022-10-31"],
  17: ["全国消防安全宣传教育日", "2022-11-09"],
  18: ["世界糖尿病日", "2022-11-14"],
  19: ["腊八节", "2022-12-30"],
  20: ["元旦", "2023-01-01"],
  21: ["小年", "2022-01-14"],
  22: ["除夕", "2023-01-21"],
  23: ["春节", "2023-01-22"],
  24: ["元宵节", "2023-02-05"],
  25: ["三八妇女节", "2023-03-08"],
  26: ["清明节", "2023-04-05"]
  27: ["世界艾滋病日", "2022-12-01"]
  28: ["万圣节", "2022-11-01"]
  29: ["平安夜", "2022-12-24"]
  30: ["圣诞节", "2022-12-25"]
};
let tnow = new Date();
let tnowf =
  tnow.getFullYear() + "-" + (tnow.getMonth() + 1) + "-" + tnow.getDate();

/* 计算2个日期相差的天数，不包含今天，如：2016-12-13到2016-12-15，相差2天
 * @param startDateString
 * @param endDateString
 * @returns
 */
function dateDiff(startDateString, endDateString) {
  var separator = "-"; //日期分隔符
  var startDates = startDateString.split(separator);
  var endDates = endDateString.split(separator);
  var startDate = new Date(startDates[0], startDates[1] - 1, startDates[2]);
  var endDate = new Date(endDates[0], endDates[1] - 1, endDates[2]);
  return parseInt(
    (endDate - startDate) / 1000 / 60 / 60 / 24
  ).toString();
}

//计算输入序号对应的时间与现在的天数间隔
function tnumcount(num) {
  let dnum = num;
  return dateDiff(tnowf, tlist[dnum][1]);
}

//获取最接近的日期
function now() {
  for (var i = 1; i <= Object.getOwnPropertyNames(tlist).length; i++) {
    if (Number(dateDiff(tnowf, tlist[i.toString()][1])) >= 0) {
      //console.log("最近的日期是:" + tlist[i.toString()][0]);
      //console.log("列表长度:" + Object.getOwnPropertyNames(tlist).length);
      //console.log("时间差距:" + Number(dateDiff(tnowf, tlist[i.toString()][1])));
      return i;
    }
  }
}

//如果是0天，发送emoji;
let nowlist = now();
function today(day) {
  let daythis = day;
  if (daythis == "0") {
    datenotice();
    return "🎉";
  } else {
    return daythis;
  }
}

//提醒日当天发送通知
function datenotice() {
  if ($persistentStore.read("timecardpushed") != tlist[nowlist][1] && tnow.getHours() >= 6) {
    $persistentStore.write(tlist[nowlist][1], "timecardpushed");
    $notification.post("假日祝福","", "今天是" + tlist[nowlist][1] + "日 " + tlist[nowlist][0] + "   🎉")
  } else if ($persistentStore.read("timecardpushed") == tlist[nowlist][1]) {
    //console.log("当日已通知");
  }
}
$done({
title:"世界节日倒计时",
icon:"list.dash.header.rectangle",
'icon-color': "#5AC8FA",
content:tlist[nowlist][0]+"  :  "+today(tnumcount(nowlist))+"天\n"+tlist[Number(nowlist) + Number(1)][0] +"  :  "+ tnumcount(Number(nowlist) + Number(1))+ "天\n"+tlist[Number(nowlist) + Number(2)][0]+"  :  "+tnumcount(Number(nowlist) + Number(2))+"天"
})
