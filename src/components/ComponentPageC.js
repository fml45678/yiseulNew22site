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
      link: props.link,
    };
  }

  render() {
    return (
      <div>
        <div className="legendContainer">
          <div className="circle__legend">
            <div className="pageC__circle">
              <div className="pageC__circleText">
                <span className="circleText__textOne">
                  {this.state.textOne}
                </span>
                <span className="circleText__textTwo">
                  {this.state.textTwo}
                </span>
              </div>
            </div>
            <div className="pageC__legendContainer">
              <div
                style={{
                  backgroundColor: this.state.legend1,
                  display: this.state.display1,
                }}
                className="pageC__circleLegend"
              ></div>
              <div
                style={{
                  backgroundColor: this.state.legend2,
                  display: this.state.display2,
                }}
                className="pageC__circleLegend"
              ></div>
              <div
                style={{
                  backgroundColor: this.state.legend3,
                  display: this.state.display3,
                }}
                className="pageC__circleLegend"
              ></div>
            </div>
            <div className="pageC__legendBottomContainer">
              <a href={this.state.link} target="_blank" rel="noreferrer">
                {this.state.legend4}
              </a>
              {this.state.legend5}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
