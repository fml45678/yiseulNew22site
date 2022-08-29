import React from "react";
import "./ComponentPageC.css";

export default class ComponentPageC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textOne: props.textOne,
      textTwo: props.textTwo,
      legend1: props.legend1,
      legend2: props.legend2,
      legend3: props.legend3,
      legend4: props.legend4,
      legend5: props.legend5,
      display1: props.display1,
      display2: props.display2,
      display3: props.display3,
      display4: props.display4,
      display5: props.display5,
    };
  }

  render() {
    return (
      <div>
        <div className="legendContainer">
          <div className="circle__legend">
            <div className="pageC__circle">
              <div className="pageC__circleText">
                <span className="circleText__lineOne">
                  {this.state.textOne}
                </span>
                <br />
                <span className="circleText__lineTwo">
                  {this.state.textTwo}
                </span>
              </div>
            </div>
            <div className="pageC__legendContainer">
              <div
                style={{ backgroundColor: this.state.legend1 }}
                className="pageC__circleLegend"
              ></div>
              <div
                style={{ backgroundColor: this.state.legend2 }}
                className="pageC__circleLegend"
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
