function isMobile() {
  return window.matchMedia("only screen and (max-width: 760px)").matches;
}


function isAndroid() {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
}

function getAndroidVersion(ua) {
  ua = (ua || navigator.userAgent).toLowerCase();
  const match = ua.match(/android\s([0-9.]*)/);
  return match ? match[1] : false;
}

const androidOlderThan6 = isAndroid() && (parseInt(getAndroidVersion(), 10) < 6);



const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
const isMobileFirefox = isFirefox && isMobile();

export {isMobile, androidOlderThan6, isMobileFirefox};