import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state/actions/index';

function Home(props) {
  const alarm = useSelector(state => state.alarm);
  const dispatch = useDispatch();

  const {setAlarm, deleteAlarm} = bindActionCreators(actionCreators, dispatch);

  const onStartAlarm = () => {
    props.navigation.navigate('AlarmSession');
  };

  return (
    <SafeAreaView>
      <Button title="Go to Alarm session" onPress={() => onStartAlarm()} />
      <Button
        color="orange"
        title="Set Alarm"
        onPress={() => setAlarm('Bhola')}
      />
      <Button
        color="red"
        title="Del alarm"
        onPress={() => deleteAlarm()}
      />
      <Text>{alarm}</Text>
    </SafeAreaView>
  );
}

export default Home;
