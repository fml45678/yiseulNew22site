import React from "react";
import "./Bpage.css";
import Legend from "../components/Legend";
import Gallery from "../components/Gallery";
import gallery from "../data/PictureDataForBPage";

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
      <span className="pageTitle">PROJECT B</span>

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
      <div className="bPageGallery__container">
        {gallery.map((gallery, key) => (
          <Gallery
            key={key}
            image={gallery.image}
            alt={gallery.alt}
            legend={gallery.legend}
            legend2={gallery.legend2}
            legend3={gallery.legend3}
            display2={gallery.display2}
            display3={gallery.display3}
            width={gallery.width}
            height={gallery.height}
          />
        ))}
      </div>
    </div>
  );
}

export default Bpage;
