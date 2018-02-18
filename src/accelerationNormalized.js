import touchActive from "./touchActive";

let maxMagnitudeDynamic = 23; // one of my devices goes up to 75
let maxXMagnitudeDynamic = 15;
const MIN_X = 1;

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
  let accelXAbs = Math.abs(accelX);
  if(accelXAbs < MIN_X) {  // avoid sensor noise
    accelXAbs = 0;
  }
  maxXMagnitudeDynamic = Math.max(accelXAbs, maxXMagnitudeDynamic);
  const accelXAbsClipped = Math.min(accelXAbs, maxXMagnitudeDynamic);
  const accelXNorm = accelXAbsClipped / maxXMagnitudeDynamic;
  return accelXNorm * Math.sign(accelX);
}

export {accelerationNormalized,  accelerationNormalizedTilt};