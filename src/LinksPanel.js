import React, { PureComponent } from "react";
import "./LinksPanel.css";

const tweet = "Awesome Lightsaber: https://gitkonst.github.io/awesome-lightsaber #starwars #lightsaber #jedi";
const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;

class LinksPanel extends PureComponent {
  render() {
    return (
      <div className="links-panel">
        <a href={twitterUrl}><i className="fab fa-twitter" /></a>
        <a href="https://github.com/gitkonst/awesome-lightsaber"><i className="fab fa-github" /></a>
      </div>
    );
  }
}

export default LinksPanel;