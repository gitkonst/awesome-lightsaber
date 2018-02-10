// Mobile Chrome, Safari require a mouse click to start playing Audio.
// This component shows a button to click if run on mobile.

import React, { PureComponent } from "react";
import "./SoundEnableButtonMobile.css";
import {impactAudio} from "./impactSound";

class SoundEnableButtonMobile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {shown: true};
  }

  buttonClick = () => {
    // audio object needs to have play() called in a click callback chain to start working
    impactAudio.play().then(() => {impactAudio.pause()});
    this.setState({shown: false});
  };

  render() {
    if (this.state.shown) {
      return (
        <div className="sound-enable-button-wrapper">
          <button onClick={this.buttonClick} className="sound-enable-button">START</button>
        </div>
      );
    }
    else {
      return null;
    }
  }
}

export default SoundEnableButtonMobile;