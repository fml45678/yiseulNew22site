import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./SubHeader.css";
function SubHeader() {
  return (
    <div>
      <div className="subHeader__container">
        <Link to="/page/a">
          <span className="subHeader__categories">A</span>
        </Link>
        <Link to="/page/b">
          <span className="subHeader__categories">B</span>
        </Link>
        <Link to="/page/c">
          <span className="subHeader__categories">C</span>
        </Link>
        <Link to="/page/d">
          <span className="subHeader__categories">D</span>
        </Link>
        <Link to="/page/you">
          <span className="subHeader__categories">YOU</span>
        </Link>
        <Link to="/page/iit">
          <span className="subHeader__categories">I, It</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default SubHeader;
