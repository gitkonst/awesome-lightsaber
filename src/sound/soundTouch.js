import saberBuzz from "./saberBuzz";
import {touchSpeedMagnitudeNormalized} from "./pointerSpeedMagnitude"
import playImpactSound from "./impactSound";

const MAX_TIME_BETWEEN_IMPACTS = 750; // in milliseconds, during non-stop waving

let timeSoundEnabled = null;

function enableSound(mouseMultiplier) {
  saberBuzz.on(mouseMultiplier);
  if(!timeSoundEnabled) timeSoundEnabled = Date.now();
}

function disableSound() {
  saberBuzz.off();
  setTimeout(playImpactSound, 50);
  timeSoundEnabled = null;
}

function addTouchSound(element) {
  if(!element) return;
  let disableTimer = 0;

  element.addEventListener("touchmove", (event) => {
    const touchSpeedMultiplier = touchSpeedMagnitudeNormalized(event);
    console.log(touchSpeedMultiplier);
    const timeSinceSoundEnabled = Date.now() - timeSoundEnabled;
    const notYetNeedImpact = timeSinceSoundEnabled < MAX_TIME_BETWEEN_IMPACTS * Math.random(); // Frame rate dependent. Whatever.
    const soundDisabled = !timeSoundEnabled;
    if(notYetNeedImpact || soundDisabled) {
      enableSound(touchSpeedMultiplier);
      clearTimeout(disableTimer);
      disableTimer = setTimeout(disableSound, 100);
    }
  });
}

export default addTouchSound;