import React from "react";
import Legend from "../components/Legend";
import Videos from "../components/Videos";
import "./Apage.css";
import aPageVideos from "../data/VideoDataForAPage.js";

const aPageLegendData = [
  { color: "#16463b", lineOne: "LIVE", lineTwo: "Performance" },
  { color: "#D2A53B", lineOne: "POST", lineTwo: "Production" },
  { color: "#95B2D5", lineOne: "Part of BIG", lineTwo: null },
  { color: "#EEA4C8", lineOne: "Audience", lineTwo: "Engagement" },
  { color: "#2B61D5", lineOne: "Etudes", lineTwo: null },
  { color: "#ED5D32", lineOne: "Commissioned", lineTwo: null },
];

// 23 videos in total

function Apage() {
  return (
    <div className="aPage__container">
      <div className="aPageLegend__container">
        {aPageLegendData.map((legend, key) => (
          <Legend
            key={key}
            color={legend.color}
            lineOne={legend.lineOne}
            lineTwo={legend.lineTwo}
          />
        ))}
      </div>
      <div className="aPageVideo__container">
        {aPageVideos.map((aPageVideos, key) => (
          <Videos
            key={key}
            url={aPageVideos.url}
            legend={aPageVideos.legend}
            legend2={aPageVideos.legend2}
            display2={aPageVideos.display2}
            display3={aPageVideos.display3}
            display4={aPageVideos.display4}
            legend3={aPageVideos.legend3}
            legend4={aPageVideos.legend4}
            title={aPageVideos.title}
            year={aPageVideos.year}
            description={aPageVideos.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Apage;
