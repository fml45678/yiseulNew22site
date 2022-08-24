import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home__container">
      <div className="circleGroup">
        <div className="circle">
          <div className="circle__text">
            Level A <br /> Projects
          </div>
        </div>
        <div className="circle">
          <div className="circle__text">
            Level B <br /> Projects
          </div>
        </div>
        <div className="circle">
          <div className="circle__text">
            Level C <br /> Projects
          </div>
        </div>
        <div className="circle">
          <div className="circle__text">
            Level D <br /> Projects
          </div>
        </div>

        <div className="circle">
          <div className="circle__textSingle">YOU</div>
        </div>
        <div className="circle">
          <div className="circle__textSingle">I, IT</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
