// 1. 严格拦截非成功请求，防止 QX 面板崩溃
if ($response.statusCode != 200) {
  $done(null);
}

var body = $response.body;
var obj = JSON.parse(body);

// 2. 将字母代码转换为国旗 Emoji (兼容性更强的写法)
function getFlag(code) {
  if (!code) return "🌐";
  var c = code.toUpperCase();
  return String.fromCodePoint(c.charCodeAt(0) + 127397, c.charCodeAt(1) + 127397);
}

// 3. 提取核心数据
var flag = getFlag(obj["countryCode"]);
var location = obj["city"] || obj["country"] || "未知地区";
var ipAddress = obj["query"] || "无IP";
var provider = obj["org"] || obj["isp"] || obj["as"] || "未知网络";

// 4. 组装显示格式（满足你要求：国旗、地区、IP、提供商同时显示）
var title = flag + " " + location;
var subtitle = ipAddress + " | " + provider;
var description = "国家: " + obj["country"] + "\n城市: " + location + "\n网络: " + provider + "\nIP: " + ipAddress;

// 5. 严格按照 QX 标准格式输出
$done({ title: title, subtitle: subtitle, ip: ipAddress, description: description });
