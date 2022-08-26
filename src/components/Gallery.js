import React from "react";
import "./Gallery.css";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
      alt: props.alt,
      legend: props.legend,
    };
  }
  render() {
    return (
      <div>
        <div className="gallery__container">
          <img src={this.state.image} alt={this.state.alt} />
          <div
            style={{ backgroundColor: this.state.legend }}
            className="gallery__legend"
          ></div>
        </div>
      </div>
    );
  }
}
