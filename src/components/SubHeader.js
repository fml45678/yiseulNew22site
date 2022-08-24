import React from "react";
import { Link } from "react-router-dom";
import "./SubHeader.css";
function SubHeader() {
  return (
    <div className="subHeader__container">
      <Link to="/a">
        <span className="subHeader__categories">A</span>
      </Link>
      <Link to="/b">
        <span className="subHeader__categories">B</span>
      </Link>
      <Link to="/c">
        <span className="subHeader__categories">C</span>
      </Link>
      <Link to="/d">
        <span className="subHeader__categories">D</span>
      </Link>
      <Link to="/you">
        <span className="subHeader__categories">YOU</span>
      </Link>
      <Link to="iit">
        <span className="subHeader__categories">I, It</span>
      </Link>
    </div>
  );
}

export default SubHeader;
