import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {connect} from 'react-redux';
import {deleteAlarm} from '../../state/actions/ActiveAlarmActions';
import BackgroundTimer from 'react-native-background-timer';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

class TheAlarmSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: null,
      timeLeft: '',
      timerName: `How's the josh?`,
      sound: null,
    };
  }

  componentDidMount() {
    const sound = new Sound('alarm.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          sound.getDuration() +
          'number of channels: ' +
          sound.getNumberOfChannels(),
      );
    });
    this.setState({
      sound: sound,
    });
  }

  onHandleSound = (haveToPlay = true) => {
    if (haveToPlay) {
      this.state.sound.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });

      return;
    }

    this.state.sound.stop();
  };

  _onStartPomodoro = async (focusTime, breakTime, restTime, cycles, sets) => {
    const focusIntoSeconds = focusTime * 60;
    const breakIntoSeconds = breakTime * 60;
    const restIntoSeconds = restTime * 60;

    for (let i = 0; i < sets; i++) {
      for (let j = 0; j < cycles; j++) {
        await this._startTimerSession(
          focusIntoSeconds,
          'Focus: ',
          this._onUpdateTimeLeft,
        );

        await this._startAlarmSession();

        await this._startTimerSession(
          breakIntoSeconds,
          'Break: ',
          this._onUpdateTimeLeft,
        );

        await this._startAlarmSession();
      }
      await this._startTimerSession(
        restIntoSeconds,
        'Rest now for :',
        this._onUpdateTimeLeft,
      );
    }

    this.setState({
      timerName: 'Well done for today!',
      timeLeft: '',
    });
  };

  _startTimerSession = async (seconds, sessionName, action) => {
    this.setState({
      seconds,
      timeLeft: this._toTimeFromSeconds(seconds),
      timerName: sessionName,
    });
    await this._timerDelay(action);
  };

  _startAlarmSession = async () => {
    this.setState({
      timerName: 'Alarming!',
      timeLeft: '',
    });
    this.onHandleSound();
    await this._alarmDelay();
    this.onHandleSound(false);
  };

  _alarmDelay = () => {
    return new Promise(resolve => BackgroundTimer.setTimeout(resolve, 2000));
  };

  _timerDelay = action => {
    return new Promise(resolve => {
      const intervalId = BackgroundTimer.setInterval(() => {
        action();

        if (this.state.seconds <= 0) {
          BackgroundTimer.clearInterval(intervalId);
          resolve('complete');
        }
      }, 1000);
    });
  };

  _onUpdateTimeLeft = () => {
    this.setState({
      seconds: this.state.seconds - 1,
      timeLeft: this._toTimeFromSeconds(this.state.seconds - 1),
    });
  };

  _toTimeFromSeconds = seconds => {
    return `${Math.floor(seconds / 60)} : ${seconds % 60}${
      seconds % 60 === 0 ? 0 : ''
    }`;
  };

  render() {
    return (
      <SafeAreaView
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, marginVertical: 20, fontWeight: '600'}}>
          {this.state.timerName} {this.state.timeLeft}
        </Text>
        <View style={{marginVertical: 20}}>
          <Button
            title="Start"
            onPress={() => {
              const {focusTime, repBreakTime, setBreakTime, reps, sets} =
                this.props.alarm;
              this._onStartPomodoro(0.1, 0.05, 0.1, 2, 3);
            }}
          />
        </View>
        <Button
          color="red"
          title="Stop!"
          onPress={() => {
            this.props.navigation.navigate('App');
          }}
        />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    alarm: state.alarm,
  };
}

const mapDispatchToProps = dispatch => ({
  deleteAlarm: () => dispatch(deleteAlarm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TheAlarmSession);
