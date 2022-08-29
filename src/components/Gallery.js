import React from "react";
import "./Gallery.css";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
      alt: props.alt,
      legend: props.legend,
      legend2: props.legend2,
      legend3: props.legend3,
      display2: props.display2,
      display3: props.display3,
      width: props.width,
      height: props.height,
    };
  }
  render() {
    return (
      <div>
        <div className="gallery__container">
          <img
            src={this.state.image}
            alt={this.state.alt}
            style={{ width: this.state.width, height: this.state.height }}
          />
          <div className="pictureLegend__container">
            <div
              style={{ backgroundColor: this.state.legend }}
              className="gallery__legend"
            ></div>
            <div
              style={{
                backgroundColor: this.state.legend2,
                display: this.state.display2,
              }}
              className="gallery__legend"
            ></div>
            <div
              style={{
                backgroundColor: this.state.legend3,
                display: this.state.display3,
              }}
              className="gallery__legend"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
