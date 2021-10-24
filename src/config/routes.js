import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  SafeAreaView,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import TheAlarmSession from '../screens/alarm-session/TheAlarmSession';
import Home from '../screens/app/Home';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import SplashScreen from '../screens/SplashScreen';
import store from '../state/store/store';
import {AuthProvider} from '../auth/AuthProvider';

console.disableYellowBox = true;

const SpashStack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'SplashScreen',
  },
);

const AuthStack = createStackNavigator(
  {
    SignUp: {
      screen: SignUp,
    },
    SignIn: {
      screen: SignIn,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'SignIn',
  },
);

const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const AlarmSessionStack = createStackNavigator(
  {
    TheAlarmSession: {
      screen: TheAlarmSession,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'TheAlarmSession',
  },
);

let Navigation = createAppContainer(
  createSwitchNavigator(
    {
      Splash: SpashStack,
      Auth: AuthStack,
      App: AppStack,
      AlarmSession: AlarmSessionStack,
    },
    {
      initialRouteName: 'Splash',
    },
  ),
);

export default class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </AuthProvider>
    );
  }
}
