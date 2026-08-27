let obj = JSON.parse($response.body);

function getFlag(code) {
    if (!code) return "🌐";
    return String.fromCodePoint(...code.toUpperCase().split('').map(c => 127397 + c.charCodeAt()));
}

// 第一行显示国旗和地区，第二行显示 IP 和运营商
let title = `${getFlag(obj.countryCode)} ${obj.country || '未知'}`;
let subtitle = `${obj.query || '无IP'} | ${obj.isp || ''}`;

$done({ title: title, subtitle: subtitle });
