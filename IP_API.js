if ($response.statusCode != 200) {
  $done(null);
}

const emojis= ['🆘','🈲','⚠️','🔞','📵','🚦','🏖','🖥','📺','🐧','🐬','🦉','🍄','⛳️','🚴','🤑','👽','🤖','🎃', '👺', '👁', '🐶', '🐼','🐌', '👥'];
var isp0 = "Cross-GFW.org";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function ISP_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return isp0
//emojis[getRandomInt(emojis.length)]
  }
}

function Area_check(para) {
  if(para=="中华民国"){
  return "台湾"
  } else
  {
  return para
  }
}

var flags = new Map([["AC","🇦🇨"],["AE","🇦🇪"],["AF","🇦🇫"],["AI","🇦🇮"],["AL","🇦🇱"],["AM","🇦🇲"],["AQ","🇦🇶"],["AR","🇦🇷"],["AS","🇦🇸"],["AT","🇦🇹"],["AU","🇦🇺"],["AW","🇦🇼"],["AX","🇦🇽"],["AZ","🇦🇿"],["BA","🇧🇦"],["BB","🇧🇧"],["BD","🇧🇩"],["BE","🇧🇪"],["BF","🇧🇫"],["BG","🇧🇬"],["BH","🇧🇭"],["BI","🇧🇮"],["BJ","🇧🇯"],["BM","🇧🇲"],["BN","🇧🇳"],["BO","🇧🇴"],["BR","🇧🇷"],["BS","🇧🇸"],["BT","🇧🇹"],["BV","🇧🇻"],["BW","🇧🇼"],["BY","🇧🇾"],["BZ","🇧🇿"],["CA","🇨🇦"],["CF","🇨🇫"],["CH","🇨🇭"],["CK","🇨🇰"],["CL","🇨🇱"],["CM","🇨🇲"],["CN","🇨🇳"],["CO","🇨🇴"],["CP","🇨🇵"],["CR","🇨🇷"],["CU","🇨🇺"],["CV","🇨🇻"],["CW","🇨🇼"],["CX","🇨🇽"],["CY","🇨🇾"],["CZ","🇨🇿"],["DE","🇩🇪"],["DG","🇩🇬"],["DJ","🇩🇯"],["DK","🇩🇰"],["DM","🇩🇲"],["DO","🇩🇴"],["DZ","🇩🇿"],["EA","🇪🇦"],["EC","🇪🇨"],["EE","🇪🇪"],["EG","🇪🇬"],["EH","🇪🇭"],["ER","🇪🇷"],["ES","🇪🇸"],["ET","🇪🇹"],["EU","🇪🇺"],["FI","🇫🇮"],["FJ","🇫🇯"],["FK","🇫🇰"],["FM","🇫🇲"],["FO","🇫🇴"],["FR","🇫🇷"],["GA","🇬🇦"],["GB","🇬🇧"],["GE","🇬🇪"],["GR","🇬🇷"],["HK","🇭🇰"],["HR","🇭🇷"] ,["HU","🇭🇺"],["ID","🇮🇩"],["IE","🇮🇪"],["IL","🇮🇱"],["IM","🇮🇲"],["IN","🇮🇳"],["IR","🇮🇷"] ,["IS","🇮🇸"],["IT","🇮🇹"],["JO","🇯🇴"],["JP","🇯🇵"],["KE","🇰🇪"],["KG","🇰🇬"],["KH","🇰🇭"],["KR","🇰🇷"],["KZ","🇰🇿"],["LT","🇱🇹"],["LU","🇱🇺"],["LV","🇱🇻"] ,["MA","🇲🇦"],["MD","🇲🇩"],["MK","🇲🇰"],["MN","🇲🇳"],["MO","🇲🇴"],["MX","🇲🇽"],["MY","🇲🇾"] ,["NG","🇳🇬"],["NL","🇳🇱"],["NO","🇳🇴"],["NP","🇳🇵"],["NZ","🇳🇿"],["PA","🇵🇦"],["PE","🇵🇪"],["PH","🇵🇭"],["PK","🇵🇰"],["PL","🇵🇱"],["PT","🇵🇹"],["RO","🇷🇴"],["RS","🇷🇸"],["RU","🇷🇺"],["RW","🇷🇼"],["SA","🇸🇦"],["SB","🇸🇧"],["SC","🇸🇨"],["SD","🇸🇩"],["SE","🇸🇪"],["SG","🇸🇬"],["SI","🇸🇮"],["SK","🇸🇰"],["TH","🇹🇭"],["TN","🇹🇳"],["TO","🇹🇴"],["TR","🇹🇷"],["TV","🇹🇻"],["TW","🇨🇳"],["UA","🇺🇦"],["UK","🇬🇧"],["UM","🇺🇲"],["US","🇺🇸"],["UY","🇺🇾"],["UZ","🇺🇿"],["VA","🇻🇦"],["VE","🇻🇪"],["VG","🇻🇬"],["VI","🇻🇮"],["VN","🇻🇳"],["ZA","🇿🇦"]])

var body = $response.body;
var obj = JSON.parse(body);
var title =flags.get(obj['short_name']) + ' '+ City_ValidCheck(obj['province']);//+Area_check(obj['country']);
var subtitle = ISP_ValidCheck(obj['isp']);
var ip = obj['ip'];
var city0 = obj['country'];
function City_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return city0
//emojis[getRandomInt(emojis.length)]
  }
}
var description = '服务商:'+obj['isp'] + '\n'+'地区:' +City_ValidCheck(obj['province'])+ '\n' + 'IP:'+ obj['ip']+ '\n' + '网络类型:'+ obj['net'];
$done({title, subtitle, city0, ip, description});
