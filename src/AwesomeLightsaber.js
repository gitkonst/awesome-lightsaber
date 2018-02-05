import React, { PureComponent } from "react";
import "./AwesomeLightsaber.css";
import addSaberMouseSound from "./SaberMouseSound";


class AwesomeLightsaber extends PureComponent {
  addSoundListeners = (element) => {
    if(!element) return;
    addSaberMouseSound(element);
  };

  render() {
    return (
      <div className="awesome-lightsaber-wrapper" ref={this.addSoundListeners}>
        <img className="awesome-lightsaber" src="images/star-wars-2908144_1280_upright.png" alt="Lightsaber"/>
      </div>
    );
  }
}

export default AwesomeLightsaber;
