import React from "react";
import Circles from "../components/Circles";
import "./Iit.css";
import iItCircles from "../data/CirclesForIIt.js";

function Iit() {
  return (
    <div className="iIt__container">
      <button className="revealMe">Reveal me - Click circles</button>
      <div className="iIt__bioCv">
        <div className="iIt__bio">
          <span className="iIt__circleText">BIO</span>
        </div>
        <div className="iIt__cv">
          <span className="iIt__circleText">CV</span>
        </div>
      </div>
      <div className="iIt__circleContainer">
        {iItCircles.map((circles, key) => (
          <Circles
            key={key}
            color={circles.color}
            text={circles.text}
            top={circles.top}
            left={circles.left}
          />
        ))}
      </div>
    </div>
  );
}

export default Iit;
