import React from "react";
import "./Bpage.css";
import Legend from "../components/Legend";

const bPageLegendData = [
  { color: "#10325B", lineOne: "MULTI XX", lineTwo: null },
  { color: "#DB3529", lineOne: "NEEDLE", lineTwo: null },
  { color: "#DDC73E", lineOne: "Digital", lineTwo: null },
  { color: "#2972AE", lineOne: "Part of BIG", lineTwo: null },
  { color: "#7B221C", lineOne: "Commissioned", lineTwo: null },
];

function Bpage() {
  return (
    <div className="bPage__container">
      <div className="bPageLegend__container">
        {bPageLegendData.map((legend, key) => (
          <Legend
            key={key}
            color={legend.color}
            lineOne={legend.lineOne}
            lineTwo={legend.lineTwo}
          />
        ))}
      </div>
    </div>
  );
}

export default Bpage;
