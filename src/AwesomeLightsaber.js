import React, { PureComponent } from "react";
import "./AwesomeLightsaber.css";
import ColorPickPanel from "./colorPick/ColorPickPanel";
import AwesomeLightsaberTilted from "./AwesomeLightsaberTilted";
import LinksPanel from "./LinksPanel";
import addInputEventListeners from "./addInputEventListeners";
import {enableImpactSoundHandler} from "./sound/impactSound";
import playUnsheatheSound from "./sound/unsheatheSound";
import {isMobile} from "./platformDetection";


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
        onContextMenu={this.disableContextMenu}
      >
        <ColorPickPanel changeColorClass={this.changeColorClass}/>
        <LinksPanel />
        <AwesomeLightsaberTilted colorClass={this.state.colorClass}/>
      </div>
    );
  }
}

export default AwesomeLightsaber;
