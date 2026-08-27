// QuantumultX geo_location_checker 脚本
// 显示：国旗 + 国家 作为 title，ISP + IPv4 作为 subtitle

let resp;
try {
  resp = JSON.parse($response.body);
} catch (e) {
  $done({ title: "⚠️ 解析失败", subtitle: "响应格式异常" });
}

if (resp && resp.status === "success") {
  const flag = getFlagEmoji(resp.countryCode);
  const title = `${flag} ${resp.country}`;
  const isp = resp.isp || resp.org || "";
  const ip = resp.query || "";
  const subtitle = `${isp} | ${ip}`;

  $done({ title: title, subtitle: subtitle });
} else {
  $done({ title: "⚠️ 检测失败", subtitle: (resp && resp.message) || "未知错误" });
}

function getFlagEmoji(countryCode) {
  if (!countryCode) return "🏳️";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
