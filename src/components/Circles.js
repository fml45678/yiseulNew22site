import React from "react";
import "./Circles.css";

export default class Circles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#E5DEDE",
      text: "",
      top: props.top,
      left: props.left,
    };
  }
  toggleColor = () => {
    this.setState((prevState) => {
      return {
        color: prevState.color === "#E5DEDE" ? this.props.color : "#E5DEDE",
        text: prevState.text === "" ? this.props.text : "",
      };
    });
  };

  render() {
    return (
      <div>
        <div className="circles__container">
          <div
            onClick={this.toggleColor}
            id="btn"
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
