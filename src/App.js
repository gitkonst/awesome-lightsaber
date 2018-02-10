import React, { PureComponent } from "react";
import AwesomeLightsaber from "./AwesomeLightsaber";
import SoundEnableButtonMobile from "./SoundEnableButtonMobile";
import isMobile from "./isMobile";
import "./App.css";

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <AwesomeLightsaber />
        {isMobile() && <SoundEnableButtonMobile />}
      </div>
    );
  }
}

export default App;
