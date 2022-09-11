import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./SubHeader.css";
function SubHeader() {
  const highlightSub = (letter) => {
    document.querySelectorAll(".phoneSubHeader__categories").forEach((e) => {
      e.style.backgroundColor = "transparent";
    });
    const circle = document.getElementById(letter).style;
    circle.backgroundColor = "#B9B2B24D";
  };
  return (
    <div>
      <div className="subHeader__container">
        <Link to="/page/a">
          <div
            className="phoneSubHeader__categories"
            id="aSub"
            onClick={() => highlightSub("aSub")}
          >
            A
          </div>
        </Link>
        <Link to="/page/b">
          <div
            className="phoneSubHeader__categories"
            id="bSub"
            onClick={() => highlightSub("bSub")}
          >
            B
          </div>
        </Link>
        <Link to="/page/c">
          <div
            className="phoneSubHeader__categories"
            id="cSub"
            onClick={() => highlightSub("cSub")}
          >
            C
          </div>
        </Link>
        <Link to="/page/d">
          <div
            className="phoneSubHeader__categories"
            id="dSub"
            onClick={() => highlightSub("dSub")}
          >
            D
          </div>
        </Link>
        <Link to="/page/you">
          <div
            className="phoneSubHeader__categories"
            id="youSub"
            onClick={() => highlightSub("youSub")}
          >
            YOU
          </div>
        </Link>
        <Link to="/page/iit">
          <div
            className="phoneSubHeader__categories"
            id="iItSub"
            onClick={() => highlightSub("iItSub")}
          >
            I, It
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default SubHeader;
