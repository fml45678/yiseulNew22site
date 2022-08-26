import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// I think I should make a component to render this

function Home() {
  return (
    <div className="home__container">
      <div className="circleGroup">
        <Link to="/page/a">
          <div className="circle">
            <div className="circle__text">
              Level A <br /> Projects
            </div>
          </div>
        </Link>
        <Link to="/page/b">
          <div className="circle">
            <div className="circle__text">
              Level B <br /> Projects
            </div>
          </div>
        </Link>
        <Link to="/page/c">
          <div className="circle">
            <div className="circle__text">
              Level C <br /> Projects
            </div>
          </div>
        </Link>
        <Link to="/page/d">
          <div className="circle">
            <div className="circle__text">
              Level D <br /> Projects
            </div>
          </div>
        </Link>

        <Link to="/page/you">
          <div className="circle">
            <div className="circle__textSingle">YOU</div>
          </div>
        </Link>
        <Link to="/page/iit">
          <div className="circle">
            <div className="circle__textSingle">I, It</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
