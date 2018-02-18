import React, { PureComponent } from "react";
import "./AwesomeLightsaber.css";
import ColorPickPanel from "./colorPick/ColorPickPanel";
import addInputEventListeners from "./addInputEventListeners";
import {enableImpactSoundHandler} from "./sound/impactSound";
import playUnsheatheSound from "./sound/unsheatheSound";
import {isMobile} from "./platformDetection";
import saberImg from "./images/star-wars-2908144_1280_upright.png";
import unsheatheAnimation from "./animation/unseatheAnimation";

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
    window.addEventListener("resize", () => this.setHeight(document.querySelector(".lightsaber-unsheathe")));
  }

  disableContextMenu = (event) => {
    event.preventDefault();
    return false;
  };

  setHeight = (elem) => {
    elem.style.height = document.body.clientHeight + "px";
  };

  render() {
    return (
      <div
        className="awesome-lightsaber-wrapper"
        ref={addInputEventListeners}
        onTouchEnd={enableImpactSoundHandler}
      >
        <ColorPickPanel changeColorClass={this.changeColorClass}/>
        <div className="lightsaber-tilted"  ref={this.setHeight} onResize={this.setHeight}>
            <div className="lightsaber-unsheathe" ref={this.setHeight} onResize={this.setHeight}>
              <img
                className={`lightsaber-img ${this.state.colorClass}`}
                onContextMenu={this.disableContextMenu}
                src={saberImg}
                alt="Lightsaber"
                draggable="false"
                onLoad={unsheatheAnimation}
              />
            </div>
        </div>
      </div>
    );
  }
}

export default AwesomeLightsaber;
