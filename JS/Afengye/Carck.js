/*******************************
脚本功能：脚本解锁订阅集合
脚本作者：afengye
注意事项：查看频道说明
频道地址：https://t.me/afengye
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/api\.(revenuecat|rc-backup)\.com\/.+\/(receipts$|subscribers\/.+$) url script-response-body https://raw.githubusercontent.com/afengye/QX/main/crack.js
^https:\/\/api\.(revenuecat|rc-backup)\.com\/.+\/(receipts$|subscribers\/.+$) url script-request-header https://raw.githubusercontent.com/afengye/QX/main/crack.js
[mitm] 
hostname = api.revenuecat.com,api.rc-backup.com
*******************************/
let obj = {};

if(typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  obj.headers = $request.headers;
}else {
  let body = JSON.parse(typeof $response != "undefined" && $response.body || null);
  if(body && body.subscriber) {
    let date = {"expires_date": "2999-01-01T00:00:00Z","original_purchase_date":"2021-01-01T00:00:00Z","purchase_date": "2021-01-01T00:00:00Z","ownership_type": "PURCHASED","store": "app_store"};
    let subscriber = body.subscriber;
    let bundle_id = $request.headers["X-Client-Bundle-ID"]?$request.headers["X-Client-Bundle-ID"]:$request.headers["User-Agent"].match(/^[%a-zA-Z0-9]+/)[0];
    const list = [
      {"app_name":"Days","bundle_id":"net.mattdavenport.daysuntil","product_id":"net.mattdavenport.daysuntil.dayspremiumlifetime","entitlements":["premium","pro"],"version":"3.15"},
      {"app_name":"Diarly","bundle_id":"com.pureformstudio.diaryOSX","product_id":"com.pureformstudio.diary.yearly_2022_promo","entitlements":["PRO"],"version":"3.18"},
      {"app_name":"Loopsie","bundle_id":"","product_id":"com.gamelounge.loopsie.ios.one_time","entitlements":["premium"],"version":"8.17.1"},
      {"app_name":"1Blocker","bundle_id":"","product_id":"blocker.ios.iap.lifetime","entitlements":["premium"],"version":"5.8"},
      {"app_name":"VidCap","bundle_id":"io.fadel.VidCap","product_id":"subs.vcp_59.99_365_3","entitlements":["io.fadel.vidcap.pro"],"version":"1.0.197"},
      {"app_name":"SuperPlanner","bundle_id":"com.gabrielguarino.SuperPlanner","product_id":"superplanner_pro_lifetime","entitlements":["pro_lifetime"],"version":"2.1.2406"},
      {"app_name":"Ereasy","bundle_id":"background.remover.bg.eraser","product_id":"app.ereasy.ereasy.na.bold.one_year","entitlements":["premium","Full_access_app"],"version":"2.0.0"},
      {"app_name":"stepapp","bundle_id":"com.gunthermarktl.stepapp","product_id":"app.steps.stepsapp.premium.year","entitlements":["stepapppro"],"version":"8.0.1"},
      {"app_name":"WorldClock","bundle_id":"com.overdesigned.WorldClock","product_id":"com.overdesigned.worldclock.removeads1","entitlements":["lifetime-unlock"],"version":"1.21.2"},
      {"app_name":"%E8%A7%A3%E5%BF%A7%E5%A8%83%E5%A8%83","bundle_id":"id.com.WorryDolls","product_id":"magicmode","entitlements":["magicmode"],"version":"2.0"},
      {"app_name":"opusvpn","bundle_id":"com.biel.opus.vpn","product_id":"opusvpn.v2.yearly","entitlements":["PRO"],"version":"1.8.6"},
      {"app_name":"Fleeky","bundle_id":"net.cacaomobile.customizescreen","product_id":"fleeky_week_cny48_3d","entitlements":["Unlimited"],"version":"3.15.0"},
      {"app_name":"Zen7%20VPN","bundle_id":"com.efe.zen7vpn","product_id":"yearly","entitlements":["Premium"],"version":"2.0"},
      {"app_name":"HappyScale","bundle_id":"com.frontpocketsoftware.happyscale","product_id":"com.frontpocketsoftware.happyscale.premium.perpetual","entitlements":["premium"],"version":"2024.15"},
      {"app_name":"%E9%85%B7%E6%8B%8D","bundle_id":"com.wallpapershub.anime","product_id":"com.wallpapershub.anime.premiumCategories","entitlements":["Premium"],"version":"3.7"},
      {"app_name":"ZoomEarth","bundle_id":"com.neave.zoomearth","product_id":"ze_pro_annual_v1","entitlements":["pro"],"version":"3.1"},
      {"app_name":"FitnessView","bundle_id":"com.funnmedia.fitnessview","product_id":"fitnessview.premiumOnetime","entitlements":["fitnessview-premium"],"version":"2.5.7"},
      {"app_name":"Video%20Up!","bundle_id":"video.up.editor.maker","product_id":"app.videoup.videoup.na.base.one_year","entitlements":["Full_access_app"],"version":"1.23.1"},
      {"app_name":"ElementNote","bundle_id":"com.soysaucelab.element.note","product_id":"com.soysaucelab.element.note.lifetime","entitlements":["pro"],"version":"2.5.0"},
      {"app_name":"Bend2","bundle_id":"com.bowery-digital.bend","product_id":"subs_29.99_365_0","entitlements":["all_access"],"version":"6.1.3"},
      {"app_name":"Carbon","bundle_id":"rr.carbon","product_id":"carbon.subscription.yearly.1.freetrial","entitlements":["pro"],"version":"14.2"},
      {"app_name":"Assembly","bundle_id":"com.pixite.assembly","product_id":"com.pixite.assembly.1yearP","entitlements":["premium_access"],"version":"2.4.7"},
      {"app_name":"UTC","bundle_id":"tech.miidii.UTC","product_id":"tech.miidii.UTC.unlock.pro","entitlements":["Entitlement.Pro"],"version":"3.11"},
      {"app_name":"Ramble","bundle_id":"com.bowery-digital.ramble","product_id":"subs.rmbl_19.99_365_0","entitlements":["all_access"],"version":"1.1.1"},
      {"app_name":"PDFScanner","bundle_id":"pdf.scanner.reader.online.pro","product_id":"weekly_f3_699_scanner","entitlements":["full_access"],"version":"2.7.76"},
      {"app_name":"GeniusScan","bundle_id":"com.geniussoftware.GeniusScan","product_id":"com.thegrizzlylabs.geniusscan.geniuscloud.subscription.year.1","entitlements":["ultra"],"version":"7.22"},
      {"app_name":"Gymnotize","bundle_id":"com.gymnotize","product_id":"com.gymnotize.upgrade.pro.subscription.annual","entitlements":["rc.gymnotize.pro.subscription"],"version":"9.2.62"},
      {"app_name":"XS%20VPN","bundle_id":"com.xsvpn.free.turbofast","product_id":"xs_ios_yearly_sub_1","entitlements":["Premium"],"version":"2.6"},
      {"app_name":"Goru","bundle_id":"com.ahmetserdarkaradeniz.Goru","product_id":"com.ahmetserdarkaradeniz.goruyearlyalternative","entitlements":["goru_pro"],"version":"1.6.1"},
      {"app_name":"Pedometer","bundle_id":"com.crossforward.pedometer","product_id":"pedometer_annual_20","entitlements":["premium"],"version":"6.1"},
      {"app_name":"%E5%A4%A9%E6%B0%94%20%C2%B4","bundle_id":"maxime.maheo.simple-weather","product_id":"maxime.maheo.simpleweather.yearly","entitlements":["premium"],"version":"3.5.4"},
      {"app_name":"ChatGPT","bundle_id":"com.prod.gpt","product_id":"com.prod.gpt.1y40","entitlements":["premium"],"version":"1.2.6"},
      {"app_name":"Foodvisor","bundle_id":"com.foodvisor.Foodvisor","product_id":"com.foodvisor.Foodvisor.lifetime","entitlements":["coaching","daily_assessment","diet_article","full_access","journal","nutritional_facts","premium","recipe"],"version":"7.5.1"},
      {"app_name":"Flow","bundle_id":"design.yugen.Flow","product_id":"design.yugen.Flow.Lifetime","entitlements":["pro"],"version":"3.8.2"},
      {"app_name":"YouCanFocus2","bundle_id":"com.Bundulas.Vilius.youCanFocus.ios.project.YouCanFocus2","product_id":"yc_1299_all","entitlements":["Pro"],"version":"2.3.0"},
      {"app_name":"quitnow","bundle_id":"com.eaginsoftware.QuitNow","product_id":"24q4_year","entitlements":["pro_features"],"version":"10.2.0"},
      {"app_name":"WeatherFit","bundle_id":"com.antonchuiko.wthrd","product_id":"com.antonchuiko.wthrd.premium_onetime","entitlements":["Pro"],"version":"6.12.3"},
      {"app_name":"Focuskeeper","bundle_id":"com.limepresso.pomodorofree","product_id":"com.limepresso.pomodorofree.subscription.year","entitlements":["premium"],"version":"2.8.4"},
      {"app_name":"ClevCalc","bundle_id":"com.dencreak.dlcalculator","product_id":"com.dencreak.dlcalculator.iap.dlc_sub_premium.1y","entitlements":["Premium"],"version":"1.3.7"},
      {"app_name":"Shift%20Days","bundle_id":"com.limepresso.shiftworkcalendar","product_id":"PRO1","entitlements":["premium"],"version":"1.90.14"},
      {"app_name":"My%20Diary","bundle_id":"com.simpleinnovation.diary","product_id":"com.simpleinnovation.diary.premium.forever.base","entitlements":["Pro"],"version":"1.10.4"},
      {"app_name":"StrongVPN","bundle_id":"com.solutioncat.proxy.vpn","product_id":"com.solutioncat.proxy.vpn.master.oneYearNew","entitlements":["isPremium"],"version":"1.5.4"},
      {"app_name":"Accountit","bundle_id":"DesignTech-SIA.Spendit","product_id":"DesignTech.SIA.Spendit.Plus.Lifetime","entitlements":["spenditPlus"],"version":"2.4.4"},
      {"app_name":"Giftr","bundle_id":"com.Yooshr.Giftr","product_id":"com.Yooshr.Giftr.everythingForever","entitlements":["com.Yooshr.Giftr.subscriptionPremium"],"version":"2.2"},
      {"app_name":"FastConnectLite","bundle_id":"com.freefastconnect.vpn.lite","product_id":"com.freefastconnect.vpn.lite.monthly","entitlements":["pro"],"version":"1.0.4"},
      {"app_name":"CheckCalendar","bundle_id":"com.checkcalendar","product_id":"checkcalendar.610.lifetime","entitlements":["premium"],"version":"12.29.0"},
      {"app_name":"HeartRateTracker","bundle_id":"com.mosin.heartrate","product_id":"com.mosin.heartrate.premiumNonConsumable","entitlements":["heart_premium"],"version":"2.0.20"},
      {"app_name":"CapCap","bundle_id":"in.capcap.app","product_id":"in.capcap.subscription.pro.weekly.non.trial","entitlements":["Pro"],"version":"1.5.5"},
      {"app_name":"Teleprompter","bundle_id":"matekovacs.Teleprompter","product_id":"com.teleprompter.pro.annual","entitlements":["Teleprompter Pro"],"version":"7.0.1"},
      {"app_name":"BRUSH","bundle_id":"com.DariaPletnova.BRUSH","product_id":"brs_3999_1y","entitlements":["pro"],"version":"2.1"},
      {"app_name":"Period%20Calendar","bundle_id":"com.lbrc.PeriodCalendar","product_id":"com.lbrc.PeriodCalendar.premium.forever","entitlements":["Pro"],"version":"10.7.4"},
      {"app_name":"%E4%BD%93%E9%87%8D%E6%8C%87%E6%95%B0%E8%AE%A1%E7%AE%97%E5%99%A8","bundle_id":"net.smayer.bodydata","product_id":"RemoveAds","entitlements":["ad_free"],"version":"1.9.3"},
      {"app_name":"TapeKit","bundle_id":"com.widget-kid","product_id":"com.widgetkid.trialannual","entitlements":["com.widgetkid.unlimited"],"version":"2.10.0"},
      {"app_name":"YPlayer","bundle_id":"net.duoziwei.yplayer","product_id":"net.duoziwei.yplayer.premium","entitlements":["Premium"],"version":"8.3"},
      {"app_name":"Overdue","bundle_id":"moshou.Overdue","product_id":"1","entitlements":["Pro"],"version":"5.5.1"},
      {"app_name":"Tally","bundle_id":"com.rainbow.PlusOne","product_id":"tally.remove_ad","entitlements":["pro"],"version":"3.9.0"},
      {"app_name":"timetrack","bundle_id":"io.timetrack.ios","product_id":"io.timetrack.auto_renew.1","entitlements":["atimelogger-premium-month"],"version":"1.6.128"},
      {"app_name":"Monefy","bundle_id":"com.monefyapp.monefy","product_id":"com.monefyapp.subscription.yearly.v2","entitlements":["monefy_premium"],"version":"1.5.1"},
      {"app_name":"HabitMinder","bundle_id":"","product_id":"habitminder.subscription.yearly.v2","entitlements":["habitminder_premium"],"version":"2.9.0"},
      {"app_name":"pixel_me_tokyo","bundle_id":"sato.tokyo.pixel-me","product_id":"pm_usd499_0d0","entitlements":["pro"],"version":"4.7.1"},
      {"app_name":"Calflow","bundle_id":"kike.Calflow","product_id":"kike.calflow.pro.lifetime","entitlements":["pro"],"version":"1.7.6"},
      {"app_name":"HealthView","bundle_id":"com.funnmedia.HealthMinder","product_id":"com.funnmedia.HealthMinder.subscription.yearly.v2","entitlements":["healthview_premium"],"version":"3.9.0"},
      {"app_name":"Strides","bundle_id":"com.puresignal.strides","product_id":"LifetimePlan","entitlements":["plus"],"version":"17.3"},   
      {"app_name":"TimerPlus","bundle_id":"com.minimasoftware.TimerPlus","product_id":"tp_pro_lifetime","entitlements":["pro"],"version":"2.29.1"},
      {"app_name":"Cheatsheet","bundle_id":"com.overdesigned.Cheatsheet","product_id":"pro_lifetime","entitlements":["pro"],"version":"5.0.2"},
      {"app_name":"fastdiet","bundle_id":"com.happy.fastdiet","product_id":"com.happy.fastdiet.forever","entitlements":["premium"],"version":"1.3.7"},
      {"app_name":"%E7%A7%A9%E5%BA%8F%E7%9B%AE%E6%A0%87","bundle_id":"com.metaorder.OKRTomato","product_id":"com.metaorder.OKRTomato.vip.supremacy","entitlements":["pro"],"version":"3.4.5"},
      {"app_name":"js_code_pad","bundle_id":"com.markodevcic.js-code-pad","product_id":"js_code_pad_developer_upgrade","entitlements":["developer"],"version":"1.8.5"},
      {"app_name":"Quitzilla","bundle_id":"com.despdevs.quitzilla","product_id":"com.despdevs.quitzilla.sub1y","entitlements":["premium"],"version":"1.2"},
      {"app_name":"money_manager","bundle_id":"com.happy.moneyManager","product_id":"com.happy.money.forever","entitlements":["premium"],"version":"1.2.9"},
      {"app_name":"G%20E%20I%20S%20T","bundle_id":"com.memorado.app","product_id":"com.memorado.subscription.yearly.v1","entitlements":["memorado_premium"],"version":"7.7.0"},
      {"app_name":"IntervalTimer","bundle_id":"com.simpleinnovation.timer.interval","product_id":"com.simpleinnovation.timer.interval.pro.forever.discount25","entitlements":["pro"],"version":"1.7.1"},
      {"app_name":"YetiVpn","bundle_id":"com.yetivpn.mastersecure.bestvpnproxy","product_id":"yetipro.yearly","entitlements":["Yeti Pro Subscription"],"version":"1.0.34"},
      {"app_name":"Penbook02","bundle_id":"camp.user.penbook","product_id":"penbook.lifetime.2024.12.C","entitlements":["proLoyalty"],"version":"6.8.3"},
      {"app_name":"%E6%9E%81%E7%AE%80%E6%97%B6%E9%92%9F","bundle_id":"com.mad.FlipClock","product_id":"com.mad.zenflipclock.iap.buymeacoffee","entitlements":["pro"],"version":"4.6.4"},
      {"app_name":"PDF%20Converter%20Swift","bundle_id":"com.pdf.converter.editor.jpgtopdf.maker","product_id":"pdf.converter.pro.lifetime","entitlements":["pdf.converter.pro.lifetime"],"version":"1.0.54"},
      {"app_name":"Tidur%20Timers","bundle_id":"net.voidstern.multitimer","product_id":"net.voidstern.multitimer.yearly","entitlements":["Pro"],"version":"5.5.5"},
      {"app_name":"Thiro","bundle_id":"io.github.ctlvie.atelerix","product_id":"atelerix_pro_lifetime","entitlements":["pro"],"version":"1.3.12"},
      {"app_name":"PROVPN","bundle_id":"com.adpsafe.provpnwebshield","product_id":"com.provpn.year","entitlements":["pro"],"version":"2.0.1"},
      {"app_name":"RunKit","bundle_id":"com.qeezon.RunKit","product_id":"runkit_19.99_1y","entitlements":["Premium"],"version":"1.24"},
      {"app_name":"Fiery%20Feeds","bundle_id":"net.voidstern.fiery-feeds","product_id":"net.voidstern.fieryfeeds.yearly.trial","entitlements":["com.fieryfeeds.pro"],"version":"2.12.5"},
      {"app_name":"Focused%20iOS","bundle_id":"net.voidstern.focused","product_id":"net.voidstern.focused.yearly.trial","entitlements":["Pro"],"version":"1.9.2"},
      {"app_name":"Any%20IPTV%20Player","bundle_id":"com.anyiptvplayer.cihan","product_id":"lifetimepremium","entitlements":["premium"],"version":"6.9.7"},
      {"app_name":"WordBoard","bundle_id":"net.bytesize.wordboard","product_id":"net.bytesize.wordboard.iap.pro","entitlements":["pro"],"version":"6.5.1"},
      {"app_name":"HabitDone","bundle_id":"com.dison.HabitDone","product_id":"Lifetime","entitlements":["pro"],"version":"3.1.2"},
      {"app_name":"Hydro%20Coach","bundle_id":"com.codium.hydrocoach","product_id":"hc_pro_lifetime","entitlements":["pro"],"version":"1.0.10"},
      {"app_name":"Planny","bundle_id":"com.kevinreutter.Artemis","product_id":"com.kevinreutter.Artemis.PremiumLifetime","entitlements":["Premium"],"version":"10.0.17"},
      {"app_name":"%E8%A8%80%E5%A4%96%E7%AC%94%E8%AE%B0","bundle_id":"io.innerpeace.yiye","product_id":"io.innerpeace.yiye.lifetime.forYearly","entitlements":["Lifetime","Premium"],"version":"2.18.7"},
      {"app_name":"Persona","bundle_id":"com.tickettothemoon.video.persona","product_id":"com.tickettothemoon.video.persona.vip.inab3.one.time.195","entitlements":["unlimited"],"version":"1.11.22"},
      {"app_name":"Foca","bundle_id":"com.foca-2020.foca","product_id":"lifetime_purchase_macOS_1.0","entitlements":["Pro"],"version":"1.3.0"},
      {"app_name":"AIChat","bundle_id":"com.talgat.AIChat","product_id":"com.talgat.AIChat.year","entitlements":["FullAccess"],"version":"1.92"},
      {"app_name":"vpn","bundle_id":"us.ultrasurf.vpn","product_id":"ultrasurf_yearly","entitlements":["pro"],"version":"2.2"}
   ];  
   for(let data of list){
     if(bundle_id == data.bundle_id || bundle_id == data.app_name){
       let product_id = data.product_id;
       let entitlements = data.entitlements;
       subscriber.subscriptions[(product_id)] = date;
       for (let entitlement of entitlements) {
         subscriber.entitlements[(entitlement)] = date;        
         subscriber.entitlements[(entitlement)].product_identifier = product_id; 
       }
       break; 
     }   
   }
   obj.body = JSON.stringify(body);
  }
}

$done(obj);
