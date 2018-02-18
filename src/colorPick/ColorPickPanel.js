import React, { PureComponent } from "react";
import ColorPickButton from "./ColorPickButton";
import "./ColorPickPanel.css";
import playUnsheatheSound from "../sound/unsheatheSound";

class ColorPickPanel extends PureComponent {
  changeColorClass = (colorClass) => {
    this.props.changeColorClass(colorClass);
    playUnsheatheSound();
  };

  render() {
    return (
      <div className="color-pick-panel">
        <ColorPickButton className="color-button color-button-green" onClick={() => this.changeColorClass("lightsaber-green")}/>
        <ColorPickButton className="color-button color-button-blue" onClick={() => this.changeColorClass("lightsaber-blue")}/>
        <ColorPickButton className="color-button color-button-red" onClick={() => this.changeColorClass("lightsaber-red")}/>
      </div>
    );
  }
}

export default ColorPickPanel;
