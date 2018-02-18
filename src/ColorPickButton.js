import React, { PureComponent } from "react";
import "./ColorPickButton.css";

class ColorPickButton extends PureComponent {
  render() {
    return (
      <button className={this.props.className} />
    );
  }
}

export default ColorPickButton;
