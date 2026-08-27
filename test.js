let obj = JSON.parse($response.body);

function getFlag(code) {
    if (!code) return "🌐";
    return String.fromCodePoint(...code.toUpperCase().split('').map(c => 127397 + c.charCodeAt()));
}

// title 显示国旗和地区，subtitle 显示具体的 IP 和运营商
let title = `${getFlag(obj.countryCode)} ${obj.country || 'Unknown'}`;
let subtitle = `${obj.query || 'No IP'} | ${obj.isp || ''}`;

$done({ title: title, subtitle: subtitle });
