import React, { PureComponent } from "react";
import "./AwesomeLightsaber.css";
import ColorPickPanel from "./colorPick/ColorPickPanel";
import addInputEventListeners from "./addInputEventListeners";
import {enableImpactSoundHandler} from "./sound/impactSound";
import playUnsheatheSound from "./sound/unsheatheSound";
import {isMobile} from "./platformDetection";
import saberImg from "./images/star-wars-2908144_1280_upright.png";

class AwesomeLightsaber extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {colorClass: "lightsaber-blue"};
  }

  changeColorClass = (colorClass) => {
    this.setState({colorClass});
  };

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
        <ColorPickPanel changeColorClass={this.changeColorClass}/>
        <div className="awesome-lightsaber">
          <img
            className={`awesome-lightsaber-img ${this.state.colorClass}`}
            onContextMenu={this.disableContextMenu}
            src={saberImg}
            alt="Lightsaber"
            draggable="false"
          />
        </div>
      </div>
    );
  }
}

export default AwesomeLightsaber;
