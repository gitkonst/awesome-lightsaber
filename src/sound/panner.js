// pans sound left and right depending on mouse position

import Tone from "tone";

function offsetCenterXNorm(event) {
  const boundingRect = event.currentTarget.getBoundingClientRect();
  const realOffsetX = (event.clientX - boundingRect.left);
  const offsetCenterX = realOffsetX - event.currentTarget.offsetWidth / 2;
  return offsetCenterX / (boundingRect.width / 2);
}

const panner = new Tone.Panner(0);
// TODO (maybe) shouldn't add to body if Awesome Lightsaber isn't full page
document.body.addEventListener("mousemove", (event) => {
  panner.pan.value = offsetCenterXNorm(event);
});

export default panner;