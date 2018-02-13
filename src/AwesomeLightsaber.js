import React, { PureComponent } from "react";
import "./AwesomeLightsaber.css";
import addInputEventListeners from "./addInputEventListeners";
import {enableImpactSoundHandler} from "./sound/impactSound";
import playUnsheatheSound from "./sound/unsheatheSound";
import {isMobile} from "./platformDetection";

const SABER_IMG = "images/star-wars-2908144_1280_upright.png";

class AwesomeLightsaber extends PureComponent {
  componentDidMount() {
    if(!isMobile()) playUnsheatheSound(); // on mobile play it in enableImpactSoundHandler
  }

  disableContextMenu = (event) => {
    event.preventDefault();
    return false;
  };

  render() {
    return (
      <div
        className="awesome-lightsaber-wrapper"
        ref={addInputEventListeners}
        onTouchEnd={enableImpactSoundHandler}
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
