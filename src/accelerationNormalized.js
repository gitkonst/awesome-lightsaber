import touchActive from "./touchActive";

let maxMagnitudeDynamic = 23; // one of my devices goes up to 75
let maxXMagnitudeDynamic = 2.84; // up to 4.22?
const MIN_X_NORM = 0.05;

const includingGravity = event => !event.acceleration || (event.acceleration.x === null);

const getAcceleration = event => includingGravity(event) ? event.accelerationIncludingGravity : event.acceleration;

function getMagnitude(event) {
  const a = getAcceleration(event);
  let magnitude = Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
  if(includingGravity(event)) {
    magnitude -= 9.81;  // not perfect on down swing
  }
  return magnitude;
}

function accelerationNormalized(event, withoutZ = false) {
  if(touchActive()) { // Touch screen overrides accelerometer
    return 0;
  }
  const magnitude = getMagnitude(event, withoutZ);
  maxMagnitudeDynamic = Math.max(magnitude, maxMagnitudeDynamic);
  const clippedMagnitude = Math.min(magnitude, maxMagnitudeDynamic);
  const clippedMNorm = clippedMagnitude / maxMagnitudeDynamic;
  return Math.pow(clippedMNorm, 1.5);
}

function accelerationNormalizedTilt(event) {
  const portrait = window.matchMedia("(orientation: portrait)").matches;
  const accelX = portrait ? getAcceleration(event).x : getAcceleration(event).y;
  const accelXAbs = Math.abs(accelX);
  maxXMagnitudeDynamic = Math.max(accelXAbs, maxXMagnitudeDynamic);
  const accelXAbsClipped = Math.min(accelXAbs, maxXMagnitudeDynamic);
  let accelXNorm = accelXAbsClipped / maxXMagnitudeDynamic;
  if(accelXNorm < MIN_X_NORM) {  // avoid sensor noise
    accelXNorm = 0;
  }
  return accelXNorm * Math.sign(accelX);
}

export {accelerationNormalized,  accelerationNormalizedTilt};