import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const highlight = (letter) => {
  document.querySelectorAll(
    "div.header__largeScreens > a"
  ).style.backgroundColor = "green";
  document.querySelector(letter).style.backgroundColor = "red";
};
console.log(document.querySelectorAll("div.header__largeScreens"));

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <span>YISEUL LEMIEUX</span>
      </Link>
      <div className="header__largeScreens">
        <Link to="/page/a">
          <span
            id="a"
            onClick={() => highlight("#a")}
            className="subHeader__categories"
          >
            A
          </span>
        </Link>
        <Link to="/page/b">
          <span
            id="b"
            onClick={() => highlight("#b")}
            className="subHeader__categories"
          >
            B
          </span>
        </Link>
        <Link to="/page/c">
          <span
            id="c"
            onClick={() => highlight("#c")}
            className="subHeader__categories"
          >
            C
          </span>
        </Link>
        <Link to="/page/d">
          <span
            id="d"
            onClick={() => highlight("#d")}
            className="subHeader__categories"
          >
            D
          </span>
        </Link>
        <Link to="/page/you">
          <span
            id="you"
            onClick={() => highlight("#you")}
            className="subHeader__categories"
          >
            YOU
          </span>
        </Link>
        <Link to="/page/iit">
          <span
            id="iIt"
            onClick={() => highlight("#iIt")}
            className="subHeader__categories"
          >
            I, It
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
