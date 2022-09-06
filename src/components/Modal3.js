import React, { useEffect } from "react";
import "./Modal1.css";
import { useState } from "react";

const Modal3 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowComponent(true);
      clearInterval(intervalId);
    }, 120000);
  }, []);

  return (
    <>
      {showComponent && (
        <div
          onClick={() => {
            setShowComponent(false);
          }}
          className="modal1Container__container"
        >
          <div className="modal3">
            <svg
              id="Component_23_1"
              data-name="Component 23 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="217.593"
              viewBox="0 0 300 217.593"
            >
              <g id="Polygon_69" data-name="Polygon 69" fill="#fff">
                <path
                  d="M 280.9605102539062 210.0925750732422 L 19.03949928283691 210.0925750732422 C 17.72495460510254 210.0925750732422 17.08854484558105 209.2545776367188 16.82618141174316 208.7550354003906 C 16.56381797790527 208.2555389404297 16.2350902557373 207.2559356689453 16.98118209838867 206.1736755371094 L 147.9416809082031 16.2000789642334 C 148.590087890625 15.25944232940674 149.5095977783203 15.11903285980225 150 15.11903285980225 C 150.4903564453125 15.11903285980225 151.4098663330078 15.25944232940674 152.0582733154297 16.2000789642334 L 283.0188293457031 206.1736755371094 C 283.7649230957031 207.2559356689453 283.4361877441406 208.2555389404297 283.173828125 208.7550811767578 C 282.9114685058594 209.2545776367188 282.2750549316406 210.0925750732422 280.9605102539062 210.0925750732422 Z"
                  stroke="none"
                />
                <path
                  d="M 150 26.42848205566406 L 28.55917358398438 202.5925750732422 L 271.4407348632812 202.5925750732422 L 150 26.42848205566406 M 150 7.619003295898438 C 153.1229553222656 7.619003295898438 156.2458953857422 9.0604248046875 158.2332458496094 11.94328308105469 L 289.1937561035156 201.9168701171875 C 293.7669982910156 208.5508728027344 289.0180358886719 217.5925750732422 280.9605102539062 217.5925750732422 L 19.03948974609375 217.5925750732422 C 10.98196411132812 217.5925750732422 6.233001708984375 208.5508728027344 10.80621337890625 201.9168701171875 L 141.7666931152344 11.94332885742188 C 143.7540435791016 9.060455322265625 146.8770294189453 7.619003295898438 150 7.619003295898438 Z"
                  stroke="none"
                  fill="#e35d36"
                />
              </g>
              <g
                id="Group_255"
                data-name="Group 255"
                transform="translate(138.92 34.881)"
              >
                <ellipse
                  id="Ellipse_618"
                  data-name="Ellipse 618"
                  cx="12"
                  cy="11.5"
                  rx="12"
                  ry="11.5"
                  fill="#4b5c28"
                />
                <g
                  id="Group_252"
                  data-name="Group 252"
                  transform="translate(5 5)"
                >
                  <line
                    id="Line_7"
                    data-name="Line 7"
                    x2="14"
                    y2="14"
                    fill="none"
                    stroke="#faf2f2"
                    strokeWidth="3"
                  />
                  <line
                    id="Line_8"
                    data-name="Line 8"
                    x1="14"
                    y2="14"
                    fill="none"
                    stroke="#faf2f2"
                    strokeWidth="3"
                  />
                </g>
              </g>
              <text
                id="I_am_a_big_fan_of_KungFu_Panda_but_Kungfu_Panda_3_is_Just_wrong."
                data-name="I am 
                            a big fan of 
                            KungFu Panda, but
                            Kungfu Panda 3 is 
                            Just wrong."
                transform="translate(146.495 78.997)"
                fill="#10325b"
                stroke="#132c4e"
                strokeWidth="1"
                fontSize="17"
                fontFamily="C90Degree, C90 Degree"
                letterSpacing="0.075em"
              >
                <tspan x="-17" y="0">
                  I am{" "}
                </tspan>
                <tspan x="-45" y="21">
                  a big fan of{" "}
                </tspan>
                <tspan x="-61" y="42">
                  KungFu Panda, but
                </tspan>
                <tspan x="-64" y="63">
                  Kungfu Panda 3 is{" "}
                </tspan>
                <tspan x="-38" y="84">
                  Just wrong.
                </tspan>
              </text>
              <text
                id="_Just_in_case_you_re_getting_bored_"
                data-name="**Just in case you’re getting bored**"
                transform="translate(150 197.593)"
                fill="#de1717"
                stroke="#de1717"
                strokeWidth="1"
                fontSize="13"
                fontFamily="Helvetica"
                letterSpacing="0.075em"
              >
                <tspan x="-105" y="0">
                  **
                </tspan>
                <tspan y="0" fontFamily="C90Degree, C90 Degree">
                  Just in case you’re getting bored
                </tspan>
                <tspan y="0">**</tspan>
              </text>
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal3;
