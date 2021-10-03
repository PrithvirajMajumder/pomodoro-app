import {Formik} from 'formik';
import React, {useContext} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {useDispatch} from 'react-redux';
import {actionCreators} from '../../state/actions/index';
import {bindActionCreators} from 'redux';
import Alarm from '../../models/Alarm.Model';
import {AuthContext} from '../../auth/AuthProvider';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  focusTime: yup.number().required().label('Focus time'),
  repBreakTime: yup.number().required().label('Break time'),
  setBreakTime: yup.number().required().label('Rest time'),
  reps: yup.number().required().label('Focus cycles'),
  sets: yup.number().required().label('Pomodoro cycles'),
});

function Home(props) {
  const dispatch = useDispatch();
  const {setAlarm} = bindActionCreators(actionCreators, dispatch);
  const {logout} = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Button title="Go to Alarm session" onPress={() => onStartAlarm()} />
      <Formik
        initialValues={{
          focusTime: 20,
          repBreakTime: 5,
          setBreakTime: 15,
          reps: 4,
          sets: 3,
        }}
        onSubmit={async values => {
          await setAlarm(
            new Alarm({
              focusTime: parseInt(values.focusTime),
              repBreakTime: parseInt(values.repBreakTime),
              setBreakTime: parseInt(values.setBreakTime),
              reps: parseInt(values.reps),
              sets: parseInt(values.sets),
            }),
          );
          props.navigation.navigate('AlarmSession');
        }}
        validationSchema={validationSchema}
        validateOnMount>
        {({
          handleChange,
          handleSubmit,
          errors,
          setFieldTouched,
          touched,
          isValid,
          initialValues,
        }) => (
          <View style={{padding: 20}}>
            <TextInput
              numeric
              maxLength={2}
              placeholderTextColor="#b2b2b2"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              placeholder="Focus time"
              onChangeText={handleChange('focusTime')}
              onBlur={() => setFieldTouched('focusTime')}
              style={[styles.input]}
            />
            <TextInput
              maxLength={2}
              placeholderTextColor="#b2b2b2"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              placeholder="Break time"
              onChangeText={handleChange('repBreakTime')}
              onBlur={() => setFieldTouched('repBreakTime')}
              style={[styles.input]}
            />
            <TextInput
              maxLength={2}
              placeholderTextColor="#b2b2b2"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              placeholder="Rest time"
              onChangeText={handleChange('setBreakTime')}
              onBlur={() => setFieldTouched('setBreakTime')}
              style={[styles.input]}
            />
            <TextInput
              maxLength={1}
              placeholderTextColor="#b2b2b2"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              placeholder="Focus cycle"
              onChangeText={handleChange('reps')}
              onBlur={() => setFieldTouched('reps')}
              style={[styles.input]}
            />
            <TextInput
              maxLength={1}
              placeholderTextColor="#b2b2b2"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              placeholder="Pomodoro cycle"
              onChangeText={handleChange('sets')}
              onBlur={() => setFieldTouched('sets')}
              style={[styles.input]}
            />
            <Button disabled={!isValid} title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <Button
        color="red"
        title="Logout"
        onPress={async () => {
          try {
            await logout();
            props.navigation.navigate('Splash');
          } catch (error) {
            console.log(error);
          }
        }}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ececec',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
});

export default Home;
