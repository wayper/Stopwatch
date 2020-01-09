import React, { Component } from 'react';

import './button.css';
import Button from './buttonCommonProps';

class ButtonStopwatchGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBtnStart: true, // BUTTON START
            activeBtnStop: false, // BUTTON STOP
            activeBtnReset: false, // BUTTON RESET
        }
    }
    
    // Methods for determining the activity of buttons
    // and calling stopwatch control methods

    hendleClickStart = () => {
        this.props.onStartClick();
        this.setState({
            activeBtnStart: false,
            activeBtnStop: true,
            activeBtnReset: false,
        });    }

    hendleClickStop = () => {
        this.props.onStopClick();
        this.setState({
            activeBtnStart: true,
            activeBtnStop: false,
            activeBtnReset: true,
        });    }

    hendleClickReset = () => {
        this.props.onResetClick();
        this.setState({
            activeBtnStart: true,
            activeBtnStop: false,
            activeBtnReset: false,
        });    }

    render() {
        const {activeBtnStart, activeBtnStop, activeBtnReset} = this.state;
        return (
            <div className="control-panel">
                <Button disabled={!activeBtnStart} active={activeBtnStart} name="Start" onClick={this.hendleClickStart} />
                <Button disabled={!activeBtnStop} active={activeBtnStop} name="Stop" onClick={this.hendleClickStop}/>
                <Button disabled={!activeBtnReset} active={activeBtnReset} name="Reset" onClick={this.hendleClickReset}/>
            </div>
        )
    }
}

export default ButtonStopwatchGroup;