import React, { PureComponent } from "react";
import "./ColorPickButton.css";

class ColorPickButton extends PureComponent {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}/>
    );
  }
}

export default ColorPickButton;
