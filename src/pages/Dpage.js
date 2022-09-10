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
      <span className="pageTitle dPage__headerTitle">PROJECT D</span>

      <div id="firstCircle" className="dContainer">
        <div
          onClick={() => {
            setShowComponent(true);
          }}
          // className="dPageCircle__full"
        >
          <svg
            className="svgCircle"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 300 300"
          >
            <circle
              id="Ellipse_70"
              data-name="Ellipse 70"
              cx="150"
              cy="150"
              r="150"
              fill="#de1717"
            />
          </svg>
        </div>
        {showComponent && (
          <svg
            className="svgCircleText"
            xmlns="http://www.w3.org/2000/svg"
            width="1021"
            height="100"
            viewBox="0 0 1021 240"
          >
            <g
              id="Group_318"
              data-name="Group 318"
              transform="translate(-634 -331)"
            >
              <g
                id="Component_13_33"
                data-name="Component 13 – 33"
                transform="translate(1435 351)"
              >
                <g
                  id="Ellipse_246"
                  data-name="Ellipse 246"
                  fill="#fff"
                  stroke="#de1717"
                  stroke-linecap="round"
                  stroke-width="20"
                >
                  <circle cx="100" cy="100" r="100" stroke="none" />
                  <circle cx="100" cy="100" r="110" fill="none" />
                </g>
              </g>
              <line
                id="Line_1"
                data-name="Line 1"
                x2="278"
                y2="81"
                transform="translate(1138.5 370.5)"
                fill="none"
                stroke="#de1717"
                stroke-width="3"
              />
              <line
                id="Line_2"
                data-name="Line 2"
                y1="60"
                x2="291"
                transform="translate(1125.5 451.5)"
                fill="none"
                stroke="#de1717"
                stroke-width="3"
              />
              <text
                id="United_Vegetable_States"
                data-name="United Vegetable States"
                transform="translate(673 381)"
                fill="#2972ae"
                stroke="#2b66a0"
                stroke-width="1"
                font-size="45"
                fontFamily="C90Degree"
                letter-spacing="0.022em"
              >
                <tspan x="0" y="0">
                  United Vegetable States
                </tspan>
              </text>
              <text
                id="United_Under_Water_States"
                data-name="United Under Water States"
                transform="translate(635 522)"
                fill="#2972ae"
                stroke="#2b66a0"
                stroke-width="1"
                font-size="45"
                fontFamily="C90Degree"
                letter-spacing="0.022em"
              >
                <tspan x="0" y="0">
                  United Under Water States
                </tspan>
              </text>
              <text
                id="Sworld"
                transform="translate(1538 466.5)"
                fill="#2972ae"
                stroke="#2b66a0"
                stroke-width="1"
                font-size="50"
                fontFamily="C90Degree"
                letter-spacing="0.022em"
              >
                <tspan x="-51" y="0">
                  Sworld
                </tspan>
              </text>
            </g>
          </svg>
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
          // id="twoFull"
          // className="dPageCircle__full"
        >
          <svg
            className="svgCircle"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 300 300"
          >
            <circle
              id="Ellipse_72"
              data-name="Ellipse 72"
              cx="150"
              cy="150"
              r="150"
              fill="#ddc73e"
            />
          </svg>
        </div>
        {showComponent3 && (
          <svg
            className="svgCircleText"
            xmlns="http://www.w3.org/2000/svg"
            width="850.75"
            height="100"
            viewBox="0 0 850.75 240"
          >
            <g
              id="Group_319"
              data-name="Group 319"
              transform="translate(-799.25 -1765)"
            >
              <path
                id="Polygon_10"
                data-name="Polygon 10"
                d="M15,0,30,25H0Z"
                transform="translate(1183 1770) rotate(90)"
                fill="#fff"
              />
              <path
                id="Polygon_9"
                data-name="Polygon 9"
                d="M15,0,30,25H0Z"
                transform="translate(1603 1770) rotate(90)"
                fill="#fff"
              />
              <g
                id="Component_13_35"
                data-name="Component 13 – 35"
                transform="translate(1430 1785)"
              >
                <g
                  id="Ellipse_246"
                  data-name="Ellipse 246"
                  fill="#fff"
                  stroke="#ddc73e"
                  stroke-linecap="round"
                  stroke-width="20"
                >
                  <circle cx="100" cy="100" r="100" stroke="none" />
                  <circle cx="100" cy="100" r="110" fill="none" />
                </g>
              </g>
              <text
                id="Fish"
                transform="translate(1495.75 1903)"
                fill="#2972ae"
                stroke="#2b66a0"
                stroke-width="1"
                font-size="50"
                font-family="C90Degree"
                letter-spacing="0.022em"
              >
                <tspan x="0" y="0">
                  Fish
                </tspan>
              </text>
              <text
                id="Fish_Bar_Over_21"
                data-name="Fish Bar Over 21"
                transform="translate(955.25 1822.5)"
                fill="#2972ae"
                stroke="#2b66a0"
                stroke-width="1"
                font-size="50"
                font-family="C90Degree"
                letter-spacing="0.022em"
              >
                <tspan x="-149" y="0">
                  Fish Bar Over 21
                </tspan>
              </text>
              <text
                id="Fish_Elementary"
                data-name="Fish Elementary"
                transform="translate(953.25 1954.5)"
                fill="#2972ae"
                stroke="#2b66a0"
                stroke-width="1"
                font-size="50"
                font-family="C90Degree"
                letter-spacing="0.022em"
              >
                <tspan x="-152" y="0">
                  Fish Elementary
                </tspan>
              </text>
              <line
                id="Line_5"
                data-name="Line 5"
                x2="278"
                y2="81"
                transform="translate(1138.5 1801)"
                fill="none"
                stroke="#ddc73e"
                stroke-width="3"
              />
              <line
                id="Line_6"
                data-name="Line 6"
                y1="60"
                x2="291"
                transform="translate(1125.5 1882)"
                fill="none"
                stroke="#ddc73e"
                stroke-width="3"
              />
            </g>
          </svg>

          // <div className="dPage__circleRight">
          //   <div id="twoTri" className="dPageTri__right"></div>
          //   <div id="twoBorder" className="dPageCircle__border">
          //     <span id="twoText" className="dPage__circleText">
          //       Fish
          //     </span>
          //     <span className="dPage__middleText1">Fish Bar Over 21</span>
          //     <span className="dPage__middleText2">Fish Elementary</span>
          //   </div>
          // </div>
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
          // id="threeFull"
          // className="dPageCircle__full"
        >
          <svg
            className="svgCircle"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 300 300"
          >
            <circle
              id="Ellipse_74"
              data-name="Ellipse 74"
              cx="150"
              cy="150"
              r="150"
              fill="#2972ae"
            />
          </svg>
        </div>
        {showComponent5 && (
          <svg
            className="svgCircleText"
            xmlns="http://www.w3.org/2000/svg"
            width="979"
            height="100"
            viewBox="0 0 979 249"
          >
            <g
              id="Group_320"
              data-name="Group 320"
              transform="translate(-679 -3167)"
            >
              <g
                id="Component_13_37"
                data-name="Component 13 – 37"
                transform="translate(1438 3187)"
              >
                <g
                  id="Ellipse_246"
                  data-name="Ellipse 246"
                  fill="#fff"
                  stroke="#2972ae"
                  stroke-linecap="round"
                  stroke-width="20"
                >
                  <circle cx="100" cy="100" r="100" stroke="none" />
                  <circle cx="100" cy="100" r="110" fill="none" />
                </g>
              </g>
              <text
                id="Languages"
                transform="translate(1538.5 3296.5)"
                fill="#2972ae"
                stroke="#2b66a0"
                stroke-width="1"
                font-size="42"
                font-family="C90Degree"
                letter-spacing="0.022em"
              >
                <tspan x="-88" y="0">
                  Languages
                </tspan>
              </text>
              <text
                id="_7_letters_Infinite_Sounds"
                data-name="7 letters &amp; Infinite Sounds"
                transform="translate(973 3208)"
                fill="#2972ae"
                stroke="#2b66a0"
                stroke-width="1"
                font-size="50"
                font-family="C90Degree"
                letter-spacing="0.022em"
              >
                <tspan x="-243" y="0">
                  7 letters &amp; Infinite Sounds
                </tspan>
              </text>
              <text
                id="No_name_musical_complimentary_symbols_"
                data-name="No name
        (musical complimentary symbols)"
                transform="translate(960 3345)"
                fill="#2972ae"
                stroke="#2b66a0"
                stroke-width="1"
                font-size="50"
                font-family="C90Degree"
                letter-spacing="0.022em"
              >
                <tspan x="-70" y="0">
                  No name
                </tspan>
                <tspan x="-279" y="55">
                  (musical complimentary symbols)
                </tspan>
              </text>
              <line
                id="Line_3"
                data-name="Line 3"
                x2="184"
                y2="89"
                transform="translate(1239.5 3207.5)"
                fill="none"
                stroke="#2972ae"
                stroke-width="3"
              />
              <line
                id="Line_4"
                data-name="Line 4"
                y1="91"
                x2="170"
                transform="translate(1253.5 3296.5)"
                fill="none"
                stroke="#2972ae"
                stroke-width="3"
              />
            </g>
          </svg>

          // <div className="dPage__circleRight">
          //   <div id="threeTri" className="dPageTri__right"></div>
          //   <div id="threeBorder" className="dPageCircle__border">
          //     <span id="threeText" className="dPage__circleText">
          //       Languages
          //     </span>
          //     <span id="threeMiddleTextOne" className="dPage__middleText1">
          //       7 letters & Infinite Sounds
          //     </span>
          //     <div className="dPage__middleText2">
          //       No name
          //       <br />
          //       (musical complimentary symbols)
          //     </div>
          //   </div>
          // </div>
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
