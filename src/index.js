import React, { Component } from "react";
import DoneSvg from "./assets/done.svg";
import ErrorSvg from "./assets/error.svg";
import "./index.css";

const origin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const color = [
  "#00FF00",
  "#0000FF",
  "#660000",
  "#9900FF",
  "#99FFFF",
  "#CC0000",
  "#CC66FF",
  "#FF0000",
  "#FFFF00",
  "#FF00FF",
  "#C0C0C0",
  "#000000"
];

function getRandom() {
  return origin.substr(Math.floor(Math.random() * 25), 1);
}

function getColor() {
  const len = color.length - 1;
  return color[Math.floor(Math.random() * len)];
}

export default class VCode extends Component {
  state = {
    originStr: "",
    inputStr: "",
    colorArr: []
  };

  handleInputChange = e => {
    const { getResult } = this.props;
    this.setState(
      {
        inputStr: e.target.value
      },
      () => {
        getResult && getResult(this.getCompareResult());
      }
    );
  };

  handleChangeVcode = () => {
    const { getResult } = this.props;
    this.setState(
      {
        originStr: getRandom() + getRandom() + getRandom() + getRandom(),
        colorArr: [getColor(), getColor(), getColor(), getColor()]
      },
      () => {
        getResult && getResult(this.getCompareResult());
      }
    );
  };

  getCompareResult = () => {
    const { originStr, inputStr } = this.state;
    return originStr === inputStr.toUpperCase();
  };

  componentDidMount() {
    this.setState({
      originStr: getRandom() + getRandom() + getRandom() + getRandom(),
      colorArr: [getColor(), getColor(), getColor(), getColor()]
    });
  }

  componentWillUnmount() {
    this.setState({
      originStr: "",
      inputStr: ""
    });
  }

  render() {
    const { originStr, inputStr, colorArr } = this.state;
    let result = originStr === inputStr.toUpperCase();
    const { tips, tipsWord, className } = this.props;

    return (
      <div className={className ? `v-code ${className}` : `v-code`}>
        <div className="v-input">
          <input
            type="text"
            style={{ width: "140px" }}
            value={inputStr}
            onChange={this.handleInputChange}
            placeholder="请输入验证码"
          />
          {inputStr ? (
            result ? (
              <img src={DoneSvg} alt="Done" className="result-icon" />
            ) : (
              <img src={ErrorSvg} alt="Error" className="result-icon" />
            )
          ) : null}
        </div>
        {originStr && (
          <div className="show" onClick={this.handleChangeVcode}>
            {colorArr.map((c, key) => (
              <span key={key} style={{ color: c }}>
                {originStr.substr(key, 1)}
              </span>
            ))}
          </div>
        )}
        {tips && (
          <span className="tips" onClick={this.handleChangeVcode}>
            {tipsWord || "看不清，换一张"}
          </span>
        )}
      </div>
    );
  }
}
