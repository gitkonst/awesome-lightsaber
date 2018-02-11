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
  const withGravity = !event.acceleration || (event.acceleration.x === null);
  const magnitude = withGravity ? getMagnitudeWithGravity(event) : getMagnitude(event);
  const clippedMagnitude = Math.min(magnitude, MAX_ACCELERATION_MAGNITUDE);
  const clippedMNorm = clippedMagnitude / MAX_ACCELERATION_MAGNITUDE;
  return Math.pow(clippedMNorm, 1.5);
}

function getMagnitude(event) {
  const a = event.acceleration;
  return Math.sqrt(a.x*a.x + a.y*a.y + a.z*a.z);
}

// For devices with fewer sensors
function getMagnitudeWithGravity(event) {
  const a = event.accelerationIncludingGravity;
  return Math.sqrt(a.x*a.x + a.y*a.y + a.z*a.z) - 9.81; //not great, but hey...
}

export default accelerometerSpeedFuncN;