import React from "react";
import "./Cv.css";

const Cv = ({ onClick, showComponent }) => {
  return (
    <div className="cvContainer__container">
      <div onClick={() => onClick(!showComponent)} className="iIt__cv">
        <span className="iIt__circleText">CV</span>
      </div>

      {showComponent && (
        <div
          onClick={() => onClick(!showComponent)}
          className="cvContainer__container"
        >
          <span className="cv__xButton">X</span>
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
