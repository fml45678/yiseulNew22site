import React from "react";
import "./Videos.css";

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
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="videoLegend__container">
            <div
              style={{ backgroundColor: this.state.legend }}
              className="video__legend"
            ></div>

            <div
              style={{ backgroundColor: this.state.legend2 }}
              className="video__legend"
            ></div>

            <div
              style={{ backgroundColor: this.state.legend3 }}
              className="video__legend"
            ></div>
            <div
              style={{ backgroundColor: this.state.legend4 }}
              className="video__legend"
            ></div>
          </div>
          <span className="video__title">Title: {this.state.title}</span>
          <span className="video__title">Year: {this.state.year}</span>
          <span className="video__description">Description</span>
          {/* <p className="video__description">{this.state.description}</p> */}
        </div>
      </div>
    );
  }
}
