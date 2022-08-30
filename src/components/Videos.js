import React from "react";
import "./Videos.css";
import VideoModal from "./VideoModal";

export default class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      legend: props.legend,
      legend2: props.legend2,
      legend3: props.legend3,
      legend4: props.legend4,
      title: props.title,
      year: props.year,
      display2: props.display2,
      display3: props.display3,
      display4: props.display4,
      description: props.description,
    };
  }

  render() {
    return (
      <div>
        <div className="video__container">
          <iframe
            src={this.state.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="videoLegend__container">
            <div
              style={{
                backgroundColor: this.state.legend,
              }}
              className="video__legend"
            ></div>

            <div
              style={{
                backgroundColor: this.state.legend2,
                display: this.state.display2,
              }}
              className="video__legend"
            ></div>

            <div
              style={{
                backgroundColor: this.state.legend3,
                display: this.state.display3,
              }}
              className="video__legend"
            ></div>
            <div
              style={{
                backgroundColor: this.state.legend4,
                display: this.state.display4,
              }}
              className="video__legend"
            ></div>
          </div>
          <span className="video__title">Title: {this.state.title}</span>
          <span className="video__title">Year: {this.state.year}</span>
          <VideoModal />
          {/* <span className="video__description">Description</span> */}
          {/* <p className="video__description">{this.state.description}</p> */}
        </div>
      </div>
    );
  }
}
