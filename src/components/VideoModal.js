import React from "react";
import "./VideoModal.css";
import { useState } from "react";

const VideoModal = ({ description }) => {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <>
      <div
        className="description__text"
        onClick={() => {
          setShowComponent(true);
        }}
      >
        Description
      </div>
      {showComponent && (
        <div
          onClick={() => {
            setShowComponent(false);
          }}
          className="videoDescriptionModal"
        >
          {/* <span className="videoModal__close">X</span> */}
          <svg
            className="bio__x"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
          >
            <g
              id="Group_254"
              data-name="Group 254"
              transform="translate(-1314 -305.724)"
            >
              <circle
                id="Ellipse_618"
                data-name="Ellipse 618"
                cx="22.5"
                cy="22.5"
                r="22.5"
                transform="translate(1314 305.724)"
                fill="#e35d36"
              />
              <g
                id="Group_252"
                data-name="Group 252"
                transform="translate(1322.601 314.601)"
              >
                <line
                  id="Line_7"
                  data-name="Line 7"
                  x2="27"
                  y2="27"
                  transform="translate(0.398 0.124)"
                  fill="none"
                  stroke="#faf2f2"
                  strokeWidth="3"
                />
                <line
                  id="Line_8"
                  data-name="Line 8"
                  x1="27"
                  y2="27"
                  transform="translate(0.398 0.124)"
                  fill="none"
                  stroke="#faf2f2"
                  strokeWidth="3"
                />
              </g>
            </g>
          </svg>
          <p>{description}</p>
          <p>
            Hundred percent organic Made, Squeezed, packaged By <br /> Yiseul
            LeMieux
          </p>
        </div>
      )}
    </>
  );
};

export default VideoModal;
