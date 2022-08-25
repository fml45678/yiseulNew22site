import React from "react";
import "./Legend.css";

export default class Legend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
      lineOne: props.lineOne,
      lineTwo: props.lineTwo,
    };
  }

  render() {
    return (
      <div>
        <div className="legendContainer">
          <div className="circle__legend">
            <div
              style={{ backgroundColor: this.state.color }}
              className="circleOne"
            ></div>
            <span className="circle__lineOne">{this.state.lineOne}</span>
            <span className="circle__lineTwo">{this.state.lineTwo}</span>
          </div>
        </div>
      </div>
    );
  }
}
