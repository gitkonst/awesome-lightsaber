import React, { PureComponent } from "react";
import "./AwesomeLightsaber.css";
import {isMobile} from "./platformDetection";
import Tone from "tone";
import {impactAudio} from "./sound/impactSound";
import playUnsheatheSound from "./sound/unsheatheSound";
import StartAudioContext from "startaudiocontext";

import {addMouseSound, addTouchSound, addAccelerometerSound} from "./sound/soundFromInput";
import addMouseTilt from "./tilt/tiltMouse";
import addTouchTilt from "./tilt/tiltTouch";

const SABER_IMG = "images/star-wars-2908144_1280_upright.png";

class AwesomeLightsaber extends PureComponent {
  impactAudioEnabled = false;

  addSoundListeners = (element) => {
    if(!element) return;
    StartAudioContext(Tone.context, element);  // Might make Tone.js work on iOS. I don't have an iOS device at hand.
    if(isMobile()) {
      addTouchSound(element);
      addAccelerometerSound(element);
      addTouchTilt(element);
    }
    else {
      addMouseSound(element);
      addMouseTilt(element);
      playUnsheatheSound();
    }
  };

  disableContextMenu = (event) => {
    event.preventDefault();
    return false;
  };

  enableImpactSound = () => {
    // mobile browsers don't enable sound unless it's started by a touchend event
    if(!this.impactAudioEnabled) {
      impactAudio.play().then(() => {
        impactAudio.pause()
      });
      this.impactAudioEnabled = true;
      playUnsheatheSound();
    }
  };

  render() {
    return (
      <div
        className="awesome-lightsaber-wrapper"
        ref={this.addSoundListeners}
        onTouchEnd={this.enableImpactSound}
      >
        <div className="awesome-lightsaber">
          <img
            className="awesome-lightsaber-img"
            onContextMenu={this.disableContextMenu}
            src={SABER_IMG}
            alt="Lightsaber"
            draggable="false"
          />
        </div>
      </div>
    );
  }
}

export default AwesomeLightsaber;
