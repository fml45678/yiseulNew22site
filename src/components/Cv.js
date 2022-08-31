import React from "react";
import "./Cv.css";
import { useState } from "react";

const Cv = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="cvContainer__container">
      <div
        onClick={() => {
          setShowComponent(true);
        }}
        className="iIt__cv"
      >
        <span className="iIt__circleText">CV</span>
      </div>

      {showComponent && (
        <div
          onClick={() => {
            setShowComponent(false);
          }}
          className="cvContainer__container"
        >
          <div className="cv__container">
            <img src="/cv/cv1.png" alt="cv page 1" />
            <img src="/cv/cv1.png" alt="cv page 2" />
            <img src="/cv/cv1.png" alt="cv page 3" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cv;
