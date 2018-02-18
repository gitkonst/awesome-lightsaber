import React, { PureComponent } from "react";
import ColorPickButton from "./ColorPickButton";
import "./ColorPickPanel.css";

class ColorPickPanel extends PureComponent {
  render() {
    return (
      <div className="color-pick-panel">
        <ColorPickButton className="color-button color-button-green" onClick={() => this.props.changeColorClass("lightsaber-green")}/>
        <ColorPickButton className="color-button color-button-blue" onClick={() => this.props.changeColorClass("lightsaber-blue")}/>
        <ColorPickButton className="color-button color-button-red" onClick={() => this.props.changeColorClass("lightsaber-red")}/>
      </div>
    );
  }
}

export default ColorPickPanel;
