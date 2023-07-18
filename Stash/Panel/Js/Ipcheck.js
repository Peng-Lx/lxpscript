//https://raw.githubusercontent.com/StevenKwan/stash-waffle/main/tiles/ipcheck.js
let url = "http://ip-api.com/json"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let isp = jsonData.isp
    let ip = jsonData.query
  body = {
    title: "节点信息",
    content: `${ip} | IP信息\n${isp} | 运营商\n${emoji}${country} - ${city} | 所在地`,
    icon: "globe.asia.australia.fill"
  }
  $done(body);
});

function getFlagEmoji(countryCode) {
      if (countryCode.toUpperCase() == 'TW') {
    countryCode = 'CN'
  }
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)

}
