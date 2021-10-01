import React, { Component } from 'react';
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-navigation";

class TheAlarmConfig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: null,
            timeLeft: '',
            timerName: `How's the josh?`,
        }
    }

    _onStartPomodoro = async (focusTime, breakTime) => {
        const focusIntoSecond = focusTime * 60;
        const breakIntoSecond = breakTime * 60;
        const cycles = 2;

        for (let index = 0; index < cycles; index++) {
            this.setState({
                seconds: focusIntoSecond,
                timeLeft: this._toTimeFromSeconds(focusIntoSecond),
                timerName: 'Focus :',
            });
            await this._delay(this._onUpdateTimeLeft);
            this.setState({
                seconds: breakIntoSecond,
                timeLeft: this._toTimeFromSeconds(breakIntoSecond),
                timerName: 'Break :',
            });
            await this._delay(this._onUpdateTimeLeft);
        }

        this.setState({
            timerName: 'Well done for today!',
            timeLeft: '',
        });
    }

    _delay(action) {
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                action();

                if (this.state.seconds <= 0) {
                    clearInterval(interval);
                    resolve('complete');
                }
            }, 1000);
        });
    }

    _onUpdateTimeLeft = () => {

        this.setState({
            seconds: this.state.seconds - 1,
            timeLeft: this._toTimeFromSeconds(this.state.seconds - 1),
        });
    }

    _toTimeFromSeconds(seconds) {
        return `${Math.floor(seconds / 60)} : ${seconds % 60}${seconds % 60 === 0 ? 0 : ''}`;
    }

    render() {
        return <SafeAreaView style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <Text>
                {this.state.timerName} {this.state.timeLeft}
            </Text>
            <Button title="Start!" onPress={() => { this._onStartPomodoro(0.1, 0.05) }} />
        </SafeAreaView>;
    }
}

export default TheAlarmConfig;