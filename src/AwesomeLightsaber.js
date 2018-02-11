import React, { PureComponent } from "react";
import "./AwesomeLightsaber.css";
import isMobile from "./isMobile";

import {addMouseSound, addTouchSound, addAccelerometerSound} from "./sound/soundFromInput";
import addMouseTilt from "./tilt/tiltMouse";
import addTouchTilt from "./tilt/tiltTouch";

class AwesomeLightsaber extends PureComponent {
  addSoundListeners = (element) => {
    if(!element) return;
    if(isMobile()) {
      addTouchSound(element);
      addAccelerometerSound(element);
      addTouchTilt(element);
    }
    else {
      addMouseSound(element);
      addMouseTilt(element);
    }
  };

  disableContextMenu = (event) => {
    event.preventDefault();
    return false;
  };

  render() {
    return (
      <div
        className="awesome-lightsaber-wrapper"
        ref={this.addSoundListeners}
      >
        <img
          className="awesome-lightsaber"
          onContextMenu={this.disableContextMenu}
          src="images/star-wars-2908144_1280_upright.png"
          alt="Lightsaber"/>
      </div>
    );
  }
}

export default AwesomeLightsaber;
