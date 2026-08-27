let obj = JSON.parse($response.body);

function getFlag(code) {
    if (!code) return "🌐";
    return String.fromCodePoint(...code.toUpperCase().split('').map(c => 127397 + c.charCodeAt()));
}

let flag = getFlag(obj.countryCode);

$done({
    title: `${flag} ${obj.country || '未知'}`,
    subtitle: `${obj.query || '无IP'} | ${obj.isp || ''}`,
    ip: obj.query,
    isp: obj.isp
});
