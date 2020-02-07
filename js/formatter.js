/**
 * This just enables/disables the mobile/desktop style sheets depending on the
 * user agent.
 */

if ( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i) ) {

    formatForMobile();
}
else {
    formatForDesktop();
}

function formatForDesktop() {
    document.styleSheets[0].disabled = true;
    document.styleSheets[1].disabled = false;
}

function formatForMobile() {
    document.styleSheets[0].disabled = false;
    document.styleSheets[1].disabled = true;
    document.getElementById("nav").classList.add("hidden");
    document.getElementById("nav-mobile").classList.remove("hidden");
}

function dropDown() {
    if(document.getElementById("nav-mobile-options").classList.contains("hidden")) {
        document.getElementById("nav-mobile-options").classList.remove("hidden");
        document.getElementById("nav-mobile-options").classList.add("dropdown");
    }
    else {
        document.getElementById("nav-mobile-options").classList.remove("dropdown");
        document.getElementById("nav-mobile-options").classList.add("hidden");
    }
}