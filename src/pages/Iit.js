import React from "react";
import Circles from "../components/Circles";
import "./Iit.css";
import iItCircles from "../data/CirclesForIIt.js";
import Cv from "../components/Cv";
import Bio from "../components/Bio";
import { useState } from "react";

function Iit() {
  const [showComponent, setShowComponent] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);

  // console.log("bio is", showComponent);
  // console.log("cv is", showComponent2);

  return (
    <div className="iIt__container">
      <div className="iIt__topContent">
        <span id="iItPageTitle" className="pageTitle">
          I, It
        </span>
        {!showComponent && !showComponent2 && (
          <button id="revealMe" className="revealMe">
            Reveal me - Click circles
          </button>
        )}
        <div className="iIt__bioCv">
          <Bio
            onClick={setShowComponent}
            showComponent={showComponent}
            showComponent2={showComponent2}
          />
          <Cv
            onClick={setShowComponent2}
            showComponent={showComponent2}
            showComponent1={showComponent}
          />
        </div>
      </div>
      {!showComponent && !showComponent2 && (
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
      )}
    </div>
  );
}

export default Iit;
