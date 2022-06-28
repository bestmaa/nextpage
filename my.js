function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        alert("window")
    }

    if (/android/i.test(userAgent)) {
       alert("Android");
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        alert("iOS");
    }

    // return "unknown";
}

getMobileOperatingSystem()