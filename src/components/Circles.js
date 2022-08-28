import React from "react";
import "./Circles.css";

export default class Circles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
      text: props.text,
      top: props.top,
      left: props.left,
    };
  }

  render() {
    return (
      <div>
        <div className="circles__container">
          <div
            style={{
              backgroundColor: this.state.color,
              left: this.state.left,
              top: this.state.top,
            }}
            className="circles__circles"
          >
            <span className="circles__text">{this.state.text}</span>
          </div>
        </div>
      </div>
    );
  }
}
