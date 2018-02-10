import React, { PureComponent } from "react";
import "./AwesomeLightsaber.css";
import isMobile from "./isMobile";

import addMouseSound from "./sound/soundMouse/soundMouse";
import addTouchSound from "./sound/soundTouch";
import addAccelerometerSound from "./sound/soundAccelerometer";
import addMouseTilt from "./tilt/tiltMouse";
import addTouchTilt from "./tilt/tiltTouch";


class AwesomeLightsaber extends PureComponent {
  addSoundListeners = (element) => {
    if(!element) return;
    if(isMobile()) {
      addTouchTilt(element);
      //addTouchSound(element);
      addAccelerometerSound(element);
    }
    else {
      addMouseTilt(element);
      addMouseSound(element);
    }
  };

  render() {
    return (
      <div
        className="awesome-lightsaber-wrapper"
        ref={this.addSoundListeners}
      >
        <img className="awesome-lightsaber" src="images/star-wars-2908144_1280_upright.png" alt="Lightsaber"/>
      </div>
    );
  }
}

export default AwesomeLightsaber;
