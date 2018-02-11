const MAX_ACCELERATION_MAGNITUDE = 75;

let touchActive = false;

let touchStart = () => touchActive = true;
let touchEnd = () => touchActive = false;

document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener("touchstart", touchStart);
  document.addEventListener("touchend", touchEnd);
});

function accelerometerSpeedFuncN(event) {
  if(touchActive) {
    return 0;
  }
  const a = event.acceleration;
  const accelerationMagnitude = Math.sqrt(a.x*a.x + a.y*a.y + a.z*a.z);
  const clippedAM = Math.min(accelerationMagnitude, MAX_ACCELERATION_MAGNITUDE);
  const clippedAMNorm = clippedAM / MAX_ACCELERATION_MAGNITUDE;
  return Math.pow(clippedAMNorm, 1.5);
}

export default accelerometerSpeedFuncN;