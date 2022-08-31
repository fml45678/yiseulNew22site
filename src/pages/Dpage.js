import React, { useState } from "react";
import "./Dpage.css";

function Dpage() {
  const [showComponent, setShowComponent] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);
  const [showComponent4, setShowComponent4] = useState(false);
  const [showComponent5, setShowComponent5] = useState(false);
  const [showComponent6, setShowComponent6] = useState(false);
  const [showComponent7, setShowComponent7] = useState(false);
  const [showComponent8, setShowComponent8] = useState(false);

  return (
    <div className="dPage__container">
      {/* this is for the ipad version */}
      {/* <span className="dpage__headerTitle">PROJECT D</span> */}

      <div className="dContainer">
        <div
          onClick={() => {
            setShowComponent(true);
          }}
          className="dPageCircle__full"
        ></div>
        {showComponent && (
          <div className="dPage__circleRight">
            <div className="dPageTri__right"></div>
            <div className="dPageCircle__border">
              <span className="dPage__circleText">Sworld</span>
              <span className="dPage__middleText1">
                United Vegetable States
              </span>
              <span className="dPage__middleText2">
                United Under Water States
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="dContainer__noMiddleText">
        {showComponent2 && (
          <div className="dPage__circleRight">
            <div id="oneNoMidBorder" className="dPageCircle__border">
              <span id="oneNoMidText" className="dPage__circleText">
                Toothbrush
              </span>
            </div>
          </div>
        )}
        <div
          onClick={() => {
            setShowComponent2(true);
          }}
          id="oneNoMidFull"
          className="dPageCircle__full"
        ></div>
      </div>

      <div className="dContainer">
        <div
          onClick={() => {
            setShowComponent3(true);
          }}
          id="twoFull"
          className="dPageCircle__full"
        ></div>
        {showComponent3 && (
          <div className="dPage__circleRight">
            <div id="twoTri" className="dPageTri__right"></div>
            <div id="twoBorder" className="dPageCircle__border">
              <span id="twoText" className="dPage__circleText">
                Fish
              </span>
              <span className="dPage__middleText1">Fish Bar Over 21</span>
              <span className="dPage__middleText2">Fish Elementary</span>
            </div>
          </div>
        )}
      </div>

      <div className="dContainer__noMiddleText">
        {showComponent4 && (
          <div className="dPage__circleRight">
            <div id="twoNoMidBorder" className="dPageCircle__border">
              <div id="twoNoMidText" className="dPage__circleText">
                Index of
                <br />
                Heartbreak
              </div>
            </div>
          </div>
        )}
        <div
          onClick={() => {
            setShowComponent4(true);
          }}
          id="twoNoMidFull"
          className="dPageCircle__full"
        ></div>
      </div>

      <div className="dContainer">
        <div
          onClick={() => {
            setShowComponent5(true);
          }}
          id="threeFull"
          className="dPageCircle__full"
        ></div>
        {showComponent5 && (
          <div className="dPage__circleRight">
            <div id="threeTri" className="dPageTri__right"></div>
            <div id="threeBorder" className="dPageCircle__border">
              <span id="threeText" className="dPage__circleText">
                Languages
              </span>
              <span id="threeMiddleTextOne" className="dPage__middleText1">
                7 letters & Infinite Sounds
              </span>
              <div className="dPage__middleText2">
                No name
                <br />
                (musical complimentary symbols)
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="dContainer__noMiddleText">
        {showComponent6 && (
          <div className="dPage__circleRight">
            <div id="fourBorder" className="dPageCircle__border">
              <span id="fourText" className="dPage__circleText">
                Portrait
              </span>
              <span className="dPage__middleTextBottom">COMING SOON </span>
            </div>
          </div>
        )}
        <div
          onClick={() => {
            setShowComponent6(true);
          }}
          id="fourFull"
          className="dPageCircle__full"
        ></div>
      </div>

      <div className="dContainer__noMiddleText">
        <div
          onClick={() => {
            setShowComponent7(true);
          }}
          id="fiveFull"
          className="dPageCircle__full"
        ></div>
        {showComponent7 && (
          <div className="dPage__circleRight">
            <div id="fiveBorder" className="dPageCircle__border">
              <span id="fiveText" className="dPage__circleText">
                Plugs <br />
                From Trash
              </span>
              <span id="fiveMiddleText" className="dPage__middleTextBottom">
                COMING SOON{" "}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="dContainer__noMiddleText">
        {showComponent8 && (
          <div className="dPage__circleRight">
            <div id="threeNoMidBorder" className="dPageCircle__border">
              <span id="threeNoMidText" className="dPage__circleText">
                Distance, Relationship & Response
              </span>
            </div>
          </div>
        )}
        <div
          onClick={() => {
            setShowComponent8(true);
          }}
          id="threeNoMidFull"
          className="dPageCircle__full"
        ></div>
      </div>
    </div>
  );
}

export default Dpage;
