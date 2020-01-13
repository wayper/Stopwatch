import React, { Component, Fragment } from "react";

import ButtonStopwatchGroup from "../../components/button/buttonStopwatchGroup";
import "./stopwatch.css";

let timerID = null;

class Stopwatch extends Component {
  state = {
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    prefixHour: "0",
    prefixMinute: "0",
    prefixSecond: "0",
    prefixMillisecond: "00"
  };

  stepClock() {
    let { hour, minute, second, millisecond, prefixHour, prefixMinute, prefixSecond, prefixMillisecond } = this.state;

    millisecond += 103;
    if (millisecond >= 1000) {
      second += 1;
      millisecond = 0;
    }
    if (second === 60) {
      minute += 1;
      second = 0;
    }
    if (minute === 60) {
      hour += 1;
      minute = 0;
    }
    if (hour === 24) {
      hour = 0;
    }

    /* ADD PREFIX */
    if (millisecond < 10) {
      prefixMillisecond = "00";
    } else if (millisecond >= 10 && millisecond <= 99) {
      prefixMillisecond = "0";
    } else {
      prefixMillisecond = "";
    }
    if (second >= 10) {
      prefixSecond = "";
    } else {
      prefixSecond = "0";
    }
    if (minute >= 10) {
      prefixMinute = "";
    } else {
      prefixMinute = "0";
    }
    if (hour >= 10) {
      prefixHour = "";
    } else {
      prefixHour = "0";
    }

    this.setState({
      millisecond,
      second,
      minute,
      hour,
      prefixHour,
      prefixMinute,
      prefixSecond,
      prefixMillisecond
    });
  }

  //  Stopwatch control methods

  handleClickStart = () => {
    timerID = setInterval(() => this.stepClock(), 103);
  };

  handleClickStop = () => {
    clearInterval(timerID);
  };

  handleClickReset = () => {
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      prefixHour: "0",
      prefixMinute: "0",
      prefixSecond: "0",
      prefixMillisecond: "00"
    });
  };

  componentWillUnmount() {
    clearInterval(timerID);
  }

  render() {
    const { hour, minute, second, millisecond, prefixHour, prefixMinute, prefixSecond, prefixMillisecond } = this.state;

    return (
      <Fragment>
        <div className="stopwatch-wrap">
          <div className="stopwatch-scoreboard">
            <div className="digital-cell">
              {prefixHour}
              {hour}:
            </div>
            <div className="digital-cell">
              {prefixMinute}
              {minute}:
            </div>
            <div className="digital-cell">
              {prefixSecond}
              {second}
            </div>
            <div className="digital-cell-millisecond">
              {prefixMillisecond}
              {millisecond}
            </div>
          </div>
          <ButtonStopwatchGroup
            onStartClick={this.handleClickStart}
            onStopClick={this.handleClickStop}
            onResetClick={this.handleClickReset}
          />
        </div>
      </Fragment>
    );
  }
}

export default Stopwatch;
