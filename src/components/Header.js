import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <span>YISEUL LEMIEUX</span>
      </Link>
      <div className="header__largeScreens">
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
    </div>
  );
}

export default Header;
