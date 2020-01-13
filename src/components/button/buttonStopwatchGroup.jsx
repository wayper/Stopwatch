import React, { Component } from "react";

import "./button.css";
import Button from "./buttonCommonProps";

class ButtonStopwatchGroup extends Component {
  state = {
    activeBtnStart: true, // BUTTON START
    activeBtnStop: false, // BUTTON STOP
    activeBtnReset: false // BUTTON RESET
  };

  // Methods for determining the activity of buttons
  // and calling stopwatch control methods

  handleClickStart = () => {
    this.props.onStartClick();
    this.setState({
      activeBtnStart: false,
      activeBtnStop: true,
      activeBtnReset: false
    });
  };

  handleClickStop = () => {
    this.props.onStopClick();
    this.setState({
      activeBtnStart: true,
      activeBtnStop: false,
      activeBtnReset: true
    });
  };

  handleClickReset = () => {
    this.props.onResetClick();
    this.setState({
      activeBtnStart: true,
      activeBtnStop: false,
      activeBtnReset: false
    });
  };

  render() {
    const { activeBtnStart, activeBtnStop, activeBtnReset } = this.state;
    return (
      <div className="control-panel">
        <Button disabled={!activeBtnStart} active={activeBtnStart} name="Start" onClick={this.handleClickStart} />
        <Button disabled={!activeBtnStop} active={activeBtnStop} name="Stop" onClick={this.handleClickStop} />
        <Button disabled={!activeBtnReset} active={activeBtnReset} name="Reset" onClick={this.handleClickReset} />
      </div>
    );
  }
}

export default ButtonStopwatchGroup;
