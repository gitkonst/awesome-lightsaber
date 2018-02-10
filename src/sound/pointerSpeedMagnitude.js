import mouseSpeed from "./mouse-speed";
import Vec2 from "vec2";

const MAX_MAGNITUDE_MOUSE = 560;  // Set experimentally on my computer
const MAX_MAGNITUDE_TOUCH = 90;

function speedMagnitudeNormalized(moveEvent, maxMagnitude) {
  const speedXY = mouseSpeed(moveEvent);
  const speedVec = new Vec2(speedXY.x, speedXY.y);
  const magnitude = speedVec.length();
  const clampedMagnitude = Math.min(magnitude, maxMagnitude);
  return clampedMagnitude / maxMagnitude;
}

function mouseSpeedMagnitudeN(mouseMoveEvent) {
  return speedMagnitudeNormalized(mouseMoveEvent, MAX_MAGNITUDE_MOUSE);
}

function touchSpeedMagnitudeN(touchMoveEvent) {
  return speedMagnitudeNormalized(touchMoveEvent.touches[0], MAX_MAGNITUDE_TOUCH);
}

export {mouseSpeedMagnitudeN, touchSpeedMagnitudeN};