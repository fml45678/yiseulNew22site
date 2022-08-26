import React from "react";
import Legend from "../components/Legend";
import Videos from "../components/Videos";
import "./Apage.css";

const aPageLegendData = [
  { color: "#16463b", lineOne: "LIVE", lineTwo: "Performance" },
  { color: "#D2A53B", lineOne: "POST", lineTwo: "Production" },
  { color: "#95B2D5", lineOne: "Part of BIG", lineTwo: null },
  { color: "#EEA4C8", lineOne: "Audience", lineTwo: "Engagement" },
  { color: "#2B61D5", lineOne: "Etudes", lineTwo: null },
  { color: "#ED5D32", lineOne: "Commissioned", lineTwo: null },
];

// 23 videos in total
const aPageVideos = [
  {
    url: "https://www.youtube.com/embed/ADZYn3cOp-o",
    title: "Self Expression",
    year: "2021",
    description: "hello",
    legend: "#16463B",
    legend2: "#EEA4C8",
    legend3: null,
    legend4: null,
  },
  {
    url: "https://www.youtube.com/embed/DfUSB5VqK44",
    title: "These Patterns",
    year: "2022",
    description: "hello",
    legend: "#D2A53B",
    legend2: "#ED5D32",
    legend3: null,
    legend4: null,
  },
  {
    url: "https://www.youtube.com/embed/2Whun0iX3kE?",
    title: "Toothbrush",
    year: "2021",
    description: "hello",
    legend: "pink",
    legend2: null,
    legend3: null,
    legend4: null,
  },
];

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
