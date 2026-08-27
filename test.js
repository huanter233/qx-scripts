let obj = JSON.parse($response.body);

function getFlag(code) {
    if (!code) return "🌐";
    return String.fromCodePoint(...code.toUpperCase().split('').map(c => 127397 + c.charCodeAt()));
}

// 强制拼接为单行：国旗 地区 | IP
let text = `${getFlag(obj.countryCode)} ${obj.country} | ${obj.query}`;
$done({ title: text });
