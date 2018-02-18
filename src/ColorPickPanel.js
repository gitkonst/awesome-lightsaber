import React, { PureComponent } from "react";
import ColorPickButton from "./ColorPickButton";
import "./ColorPickPanel.css";

class ColorPickPanel extends PureComponent {
  render() {
    return (
      <div className="color-pick-panel">
        <ColorPickButton className="color-button color-button-green"/>
        <ColorPickButton className="color-button color-button-blue"/>
        <ColorPickButton className="color-button color-button-red"/>
      </div>
    );
  }
}

export default ColorPickPanel;
