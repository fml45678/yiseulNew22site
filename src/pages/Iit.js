import React from "react";
import "./Iit.css";

const iItCircles = [
  { color: "#1C342E", text: "Donkey Lives Long life" },
  { color: "#5E271D", text: "observation" },
  { color: "#DF99B5", text: "Compose Things" },
  { color: "#D2A53B", text: "Highland Cow" },
  { color: "#AECBC7", text: "Watch out for My Revenge Against you" },
  { color: "#D23021", text: "Don’t want to Fall asleep" },
  { color: "#95B2D5", text: "Your Truth" },
  { color: "#3F6D5B", text: "Believe In Details" },
  { color: "#A8ADC0", text: "Have you been to my dinner?" },
  { color: "#132C4E", text: "texture exist E---very- where" },
  { color: "#F1B168", text: "Used to be A Pianist" },
  { color: "#3C9D96", text: "Love to Quilt Odd things" },
  { color: "#DB3529", text: "Maker anything" },
  { color: "#2B66A0", text: "Coffee No milk No sugar" },
  { color: "#EEA4C8", text: "Night Night Movie(s)" },
  { color: "#D2A53B", text: "I have Many Stories" },
  { color: "#785E4C", text: "ISFJ(?)" },
  { color: "#DDC73E", text: "ALLERGIC To Things things" },
  { color: "#132C4E", text: "Quiet, But, I have OPINIONS" },
  { color: "#95B2D5", text: "Creator At Anywhere anytime" },
  { color: "#E35D36", text: "Dr. Pepper Is the BEST" },
];

function Iit() {
  return (
    <div className="iIt__container">
      <button className="revealMe">Reveal me - Click circles</button>
      <div className="iIt__bioCv">
        <div className="iIt__bio">
          <span className="iIt__circleText">BIO</span>
        </div>
        <div className="iIt__cv">
          <span className="iIt__circleText">CV</span>
        </div>
      </div>
    </div>
  );
}

export default Iit;
