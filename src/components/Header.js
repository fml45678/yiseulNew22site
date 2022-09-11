import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const highlight = (letter) => {
    document.querySelectorAll(".subHeader__categories").forEach((e) => {
      e.style.backgroundColor = "transparent";
    });
    const circle = document.getElementById(letter).style;
    circle.backgroundColor = "#B9B2B24D";
  };

  return (
    <div className="header">
      <Link to="/">
        <span>YISEUL LEMIEUX</span>
      </Link>
      <div className="header__largeScreens">
        <Link to="/page/a">
          <div
            id="a"
            onClick={() => highlight("a")}
            className="subHeader__categories"
          >
            A
          </div>
        </Link>
        <Link to="/page/b">
          <div
            id="b"
            onClick={() => highlight("b")}
            className="subHeader__categories"
          >
            B
          </div>
        </Link>
        <Link to="/page/c">
          <div
            id="c"
            onClick={() => highlight("c")}
            className="subHeader__categories"
          >
            C
          </div>
        </Link>
        <Link to="/page/d">
          <div
            id="d"
            onClick={() => highlight("d")}
            className="subHeader__categories"
          >
            D
          </div>
        </Link>
        <Link to="/page/you">
          <div
            id="you"
            onClick={() => highlight("you")}
            className="subHeader__categories"
          >
            YOU
          </div>
        </Link>
        <Link to="/page/iit">
          <div
            id="iIt"
            onClick={() => highlight("iIt")}
            className="subHeader__categories"
          >
            I, It
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
