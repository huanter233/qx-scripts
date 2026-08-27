let obj = JSON.parse($response.body);

function getFlag(code) {
    if (!code) return "🌐";
    return String.fromCodePoint(...code.toUpperCase().split('').map(c => 127397 + c.charCodeAt()));
}

let flag = getFlag(obj.countryCode);
let location = obj.city || obj.country || "未知";
let ip = obj.query || "无IP";
let isp = obj.isp || obj.org || "";

// Stash 专属：强制单行输出
$done({ 
    title: `${flag} ${location} | ${ip} | ${isp}` 
});
