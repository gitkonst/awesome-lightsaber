function impactFlash() {
  const appElement = document.querySelector(".app");
  if(appElement) {
    console.log("spark");
    appElement.style.animation = "none";
    appElement.offsetHeight; /* trigger reflow */
    appElement.style.animation = "impactFlash 70ms linear";
  }
}

export default impactFlash;