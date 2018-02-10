import mouseSpeed from "./mouse-speed";
import Vec2 from "vec2";

function mouseSpeedMagnitudeNormalized(mouseMoveEvent)
{
  const speedXY = mouseSpeed(mouseMoveEvent);
  const speedVec = new Vec2(speedXY.x, speedXY.y);
  const magnitude = speedVec.length();
  const maxMagnitude = 560; // Set experimentally on my computer
  const clampedMagnitude = Math.min(magnitude, maxMagnitude);
  return clampedMagnitude / maxMagnitude;
}

export default mouseSpeedMagnitudeNormalized;