import React, { useEffect } from "react";
import "./Modal1.css";
import { useState } from "react";

const Modal1 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowComponent(true);
      clearInterval(intervalId);
    }, 5000);
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
          >
            <div className="modal1__textContainer">
              <span>I drink coffee everyday.</span> <span>You SHOULD TRY</span>
              <span className="small">
                (if you are in my neighborhood) Believe it or not, it is really
                hard to find good coffee in NYC.
              </span>
              <span>1. St. Killda (8th ave/21st)</span>
              <span className="small">EVERYTHING IS PRETTY GOOD.</span>
              <span className="small">
                They have 2 locations. The other one in Hell’s Kitchen.
              </span>
              <span>2. Foreigners (6th ave/23rd)</span>
              <span className="small">
                It’s okay coffee and good consistency.
              </span>
              <span>3. Yanni’s Coffee (7th ave/16th)</span>
              <span className="small">
                Cookies are delicious. Coffee is good. Perfect consistency.
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal1;
