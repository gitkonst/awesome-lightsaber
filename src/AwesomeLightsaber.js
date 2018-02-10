import React, { PureComponent } from "react";
import "./AwesomeLightsaber.css";
import addSaberMouseSound from "./SaberMouseSound";
import addMouseTilt from "./TiltWithMouse";
import addTouchTilt from "./TiltWithTouch";
import addSaberTouchSound from "./SaberTouchSound";
import addSaberAccelerometerSound from "./SaberAccelerometerSound";
import isMobile from "./isMobile";

class AwesomeLightsaber extends PureComponent {
  addSoundListeners = (element) => {
    if(!element) return;
    if(isMobile()) {
      addTouchTilt(element);
      //addSaberTouchSound(element);
      addSaberAccelerometerSound(element);
    }
    else {
      addMouseTilt(element);
      addSaberMouseSound(element);
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
