import React, { PureComponent } from "react";
import "./AwesomeLightsaber.css";
import saberImg from "./images/star-wars-2908144_1280_upright.png";
import unsheatheAnimation from "./animation/unseatheAnimation";

class AwesomeLightsaberTilted extends PureComponent {
  componentDidMount() {
    window.addEventListener("resize", () => this.setHeight(document.querySelector(".lightsaber-unsheathe")));
  }

  setHeight = (elem) => {
    elem.style.height = document.body.clientHeight + "px";
  };

  render() {
    return (
      <div className="lightsaber-tilted">
        <div className="lightsaber-unsheathe" ref={this.setHeight}>
          <img
            className={`lightsaber-img ${this.props.colorClass}`}
            src={saberImg}
            alt="Lightsaber"
            draggable="false"
            onLoad={unsheatheAnimation}
          />
        </div>
      </div>
    );
  }
}

export default AwesomeLightsaberTilted;