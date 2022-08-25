import React from "react";
import Legend from "../components/Legend";
import SubHeader from "../components/SubHeader";
import "./Apage.css";

const legendData = [
  { color: "#16463b", lineOne: "LIVE", lineTwo: "Performance" },
  { color: "#D2A53B", lineOne: "POST", lineTwo: "Production" },
  { color: "#95B2D5", lineOne: "Part of BIG", lineTwo: null },
  { color: "#EEA4C8", lineOne: "Audience", lineTwo: "Engagement" },
  { color: "#2B61D5", lineOne: "Etudes", lineTwo: null },
  { color: "#ED5D32", lineOne: "Commissioned", lineTwo: null },
];

function Apage() {
  return (
    <div className="aPage__container">
      {/* I wonder if there is a better way to render this subHeader on all of the pages that are not the homepage?
      I think there probaly is something I can do on app.js, similar to how I implemented the header and footer */}
      <SubHeader />

      <div className="legend">
        {legendData.map((legend) => (
          <Legend
            color={legend.color}
            lineOne={legend.lineOne}
            lineTwo={legend.lineTwo}
          />
        ))}
      </div>
    </div>
  );
}

export default Apage;
