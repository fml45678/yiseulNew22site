import React from "react";
import "./Cpage.css";
import Legend from "../components/Legend";
import ComponentPageC from "../components/ComponentPageC";
import component from "../data/CirclesForCPage";

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
      <div className="cPage__circlesContainer">
        {component.map((component, key) => (
          <ComponentPageC
            key={key}
            textOne={component.textOne}
            textTwo={component.textTwo}
            legend1={component.legend1}
            legend2={component.legend2}
            legend3={component.legend3}
            legend4={component.legend4}
            legend5={component.legend5}
            display1={component.display1}
            display2={component.display2}
            display3={component.display3}
            link={component.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Cpage;
