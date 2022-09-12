import React, { useEffect } from "react";
import "./Modal1.css";
import { useState } from "react";

const Modal2 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowComponent(true);
      clearInterval(intervalId);
    }, 90000);
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
          <div
            onClick={() => {
              setShowComponent(false);
            }}
            className="modal1__container"
            id="modal2"
          >
            <div id="modal2__textContainer" className="modal1__textContainer">
              <span className="modal2__question">
                IT’S BEEN 90 SECONDS. <br /> SCONE? OR ICE CREAM?
              </span>
              <div className="modal2__choices">
                <div className="blueCircle__container">
                  <div className="modal2__circles"></div>
                  <span>SCONE</span>
                </div>
                <div className="blueCircle__container">
                  <div id="modal2BlueCircle" className="modal2__circles"></div>
                  <span>ICE CREAM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal2;
