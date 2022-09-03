import React from "react";
import Circles from "../components/Circles";
import "./Iit.css";
import iItCircles from "../data/CirclesForIIt.js";
import Cv from "../components/Cv";
import Bio from "../components/Bio";

function Iit() {
  return (
    <div className="iIt__container">
      <span className="pageTitle">I, It</span>

      <button className="revealMe">Reveal me - Click circles</button>
      <div className="iIt__bioCv">
        <Bio />
        <Cv />
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
