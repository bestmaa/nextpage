function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        alert("this device window")
    }

    if (/android/i.test(userAgent)) {
        window.location="https://play.google.com/store/apps/details?id=com.nexusmalls.elantenexusone"
    //    alert("this device Android");
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location="https://apps.apple.com/us/app/nexusone/id1600539826"
        // alert("this device iOS");
    }

    // return "unknown";
}

getMobileOperatingSystem()