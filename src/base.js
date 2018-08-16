export function serviceHOST(s) {
    s = s || "oeay";
    //let url = "http://gmsvrsc2.uqsoft.com:810/skynet_sync/";
    let url = "http://192.168.1.128:12002/skynet_sync/";
    //let url = "http://123.59.40.19:15002/skynet_sync/";
    switch (s) {
        case "oeay":
            return url + "oeay";
            break;
        case "usif":
            return url + "usif";
            break;
        case "mntn":
            return url + "mntn";
            break;
        case "mail":
            return url + "mail";
            break;
    }
}

/* export function address(name){
	switch (name) {
		case "getServer":
			return "http://gmsvrsc2.uqsoft.com:810/skynet_sync/mail";
			//return "http://192.168.1.128:12002/skynet_sync/mail";
			//return "http://123.59.40.19:15002/skynet_sync/mail";
		break;
	}
} */

export function formatTime(time) {
    var date = new Date(time);
    var t = date.getTime() / 1000;
    return t;
}


export function format(d, n) {
    //每个小时3600
    var d = d - (12 * 3600);
    var utc = "美国时间"
    var date = new Date(d * 1000);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var secounds = date.getSeconds();
    secounds = secounds < 10 ? ('0' + secounds) : secounds;
    if (n == 0) {
        return y + "-" + m + "-" + d;
    } else if (n == 1) {
        return h + ":" + minute;
    } else {
        return utc + "：" + y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + secounds;
    }
}

/* gmsvrsc2.uqsoft.com
443
50.23.186.213 */