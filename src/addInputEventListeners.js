import {addMouseSound, addTouchSound, addAccelerometerSound} from "./sound/soundFromInput";
import addMouseTilt from "./tilt/tiltMouse";
import addTouchTilt from "./tilt/tiltTouch";
import {isMobile} from "./platformDetection";

import Tone from "tone";
import StartAudioContext from "startaudiocontext";

function addInputEventListeners(element) {
  if(!element) {
    return;
  }
  if(isMobile()) {
    addTouchSound(element);
    addAccelerometerSound(element);
    addTouchTilt(element);
  }
  else {
    addMouseSound(element);
    addMouseTilt(element);
  }
  StartAudioContext(Tone.context, element);  // Might make Tone.js work on iOS. I don't have an iOS device at hand.
}

export default addInputEventListeners;