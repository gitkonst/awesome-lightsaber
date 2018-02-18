import styleFromPointerEvent from "./styleFromPointerEvent";

function offsetCenterX(event) {
  const boundingRect = event.currentTarget.getBoundingClientRect();
  const realOffsetX = (event.clientX - boundingRect.left);
  return realOffsetX - event.currentTarget.offsetWidth / 2;
}

function offsetBottomY(event) {
  const boundingRect = event.currentTarget.getBoundingClientRect();
  let offsetBottomY = boundingRect.bottom - event.clientY;
  if(offsetBottomY <= 0) offsetBottomY = 0.01;
  return offsetBottomY;
}

function idle(event) {
  const tiltedImgStyle = styleFromPointerEvent(event);
  tiltedImgStyle.transform = "rotateZ(0)";
  tiltedImgStyle.transition = "transform 0.19s ease-out";
}

function mouseTiltHandler(event) {

  const offsetX = offsetCenterX(event);
  let tan = 99999;
  if(offsetX !== 0) {
    tan = offsetBottomY(event) / offsetX;
  }
  let angleRad =  Math.PI / 2 - Math.atan(tan);
  if(tan < 0) angleRad -= Math.PI;
  const tiltedImgStyle = styleFromPointerEvent(event);
  tiltedImgStyle.transition = "";
  tiltedImgStyle.transform = "rotateZ(" + angleRad + "rad)";
}

function addMouseTilt(element) {
  element.addEventListener("mousemove", mouseTiltHandler);
  element.addEventListener("mouseleave", idle);
}

export default addMouseTilt;