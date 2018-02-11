import React, { PureComponent } from "react";
import AwesomeLightsaber from "./AwesomeLightsaber";
import "./App.css";

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
