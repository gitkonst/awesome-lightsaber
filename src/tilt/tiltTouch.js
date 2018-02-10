function offsetCenterX(event) {
  const boundingRect = event.currentTarget.getBoundingClientRect();
  const realOffsetX = (event.touches[0].clientX - boundingRect.left);
  return realOffsetX - event.currentTarget.offsetWidth / 2;
}

function offsetBottomY(event) {
  const boundingRect = event.currentTarget.getBoundingClientRect();
  let offsetBottomY = boundingRect.bottom - event.touches[0].clientY;
  if(offsetBottomY <= 0) offsetBottomY = 0.01;
  return offsetBottomY;
}

function idle(event) {
  let angle = 0;
  let transitionTime = 0.19;
  if(event.type === "touchstart") {
    angle = angleRad(event);
    transitionTime /= 3;
  }
  const tiltedImgStyle = event.currentTarget.firstChild.style;
  tiltedImgStyle.transform = `rotateZ(${angle}rad)`;
  tiltedImgStyle.transition = `transform ${transitionTime}s ease-out`;
}

function angleRad(event) {
  const offsetX = offsetCenterX(event);
  let tan = 99999;
  if(offsetX !== 0) {
    tan = offsetBottomY(event) / offsetX;
  }
  let angleRad =  Math.PI / 2 - Math.atan(tan);
  if(tan < 0) angleRad -= Math.PI;
  return angleRad;
}

function touchTiltHandler(event) {
  event.preventDefault();

  const tiltedImgStyle = event.currentTarget.firstChild.style;
  tiltedImgStyle.transition = "";
  tiltedImgStyle.transform = "rotateZ(" + angleRad(event) + "rad)";
}

function addTouchTilt(element) {
  element.addEventListener("touchmove", touchTiltHandler.bind(element));
  element.addEventListener("touchend", idle);
  element.addEventListener("touchstart", idle);
}

export default addTouchTilt;