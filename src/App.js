import React, { PureComponent } from "react";
import "./App.css";
import AwesomeLightsaber from "./AwesomeLightsaber";

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <AwesomeLightsaber />
      </div>
    );
  }
}

export default App;
