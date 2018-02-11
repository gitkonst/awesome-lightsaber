import saberBuzz from "./saberBuzz";
import {mouseSpeedMagnitudeN, touchSpeedMagnitudeN} from "./pointerSpeedMagnitude"
import playImpactSound from "./impactSound";
import accelerometerSpeedFuncN from "./accelerometerSpeedFuncN";

const MAX_TIME_BETWEEN_IMPACTS = 250; // in milliseconds, during non-stop waving
const MIN_BUZZ_SPEED = 0.01; // range is 0...1
const MIN_IMPACT_SPEED = 0.075;

let timeSoundEnabled = null;

function enableSound(mouseMultiplier) {
  saberBuzz.on(mouseMultiplier);
  if(!timeSoundEnabled) timeSoundEnabled = Date.now();
}

function disableSound(pointerSpeedN) {
  saberBuzz.off();
  if(pointerSpeedN > MIN_IMPACT_SPEED) {
    setTimeout(playImpactSound, 50);
  }
  timeSoundEnabled = null;
}

function addPointerSound(element, eventName, speedFunc, maxTimeBetweenImpacts = MAX_TIME_BETWEEN_IMPACTS) {
  if(!element) return;
  let disableTimer = 0;
  element.addEventListener(eventName, (event) => {
    const pointerSpeedN = speedFunc(event);
    const mouseFastEnough = pointerSpeedN > MIN_BUZZ_SPEED;
    const timeSinceSoundEnabled = Date.now() - timeSoundEnabled;
    const soundDisabled = !timeSoundEnabled;
    const notYetNeedImpact = timeSinceSoundEnabled < maxTimeBetweenImpacts * Math.random(); // Frame rate dependent. Whatever.
    const shouldEnableSound = mouseFastEnough && (soundDisabled || notYetNeedImpact);
    if (shouldEnableSound) {
      enableSound(pointerSpeedN);
      clearTimeout(disableTimer);
      const disableSoundWithSpeed = disableSound.bind(null, pointerSpeedN);
      disableTimer = setTimeout(disableSoundWithSpeed, 100);
    }
  });
}

function addMouseSound(element) {
  return addPointerSound(element, "mousemove", mouseSpeedMagnitudeN);
}

function addTouchSound(element) {
  return addPointerSound(element, "touchmove", touchSpeedMagnitudeN);
}

function addAccelerometerSound(element) {
  return addPointerSound(window, "devicemotion", accelerometerSpeedFuncN, MAX_TIME_BETWEEN_IMPACTS * 3);
}

export {addMouseSound, addTouchSound, addAccelerometerSound};