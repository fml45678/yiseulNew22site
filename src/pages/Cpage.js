import React from "react";
import "./Cpage.css";
import Legend from "../components/Legend";

const cPageLegendData = [
  { color: "#EFC2C2", lineOne: "LIVE", lineTwo: "Performance" },
  { color: "#928F47", lineOne: "POST", lineTwo: "Production" },
  { color: "#B0412F", lineOne: "Part of BIG", lineTwo: null },
  { color: "#34AAA1", lineOne: "Premiered", lineTwo: null },
  { color: "#F1B168", lineOne: "Etudes", lineTwo: null },
  { color: "#A8ADC0", lineOne: "Commissioned", lineTwo: null },
];

function Cpage() {
  return (
    <div className="cPage__container">
      <div className="cPageLegend__container">
        {cPageLegendData.map((legend, key) => (
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

export default Cpage;
