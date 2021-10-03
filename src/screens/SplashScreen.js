import React, {useContext, useEffect, useState} from 'react';
import {Text, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../auth/AuthProvider';

function SplashScreen(props) {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onChangeRouteAfterDelay = stackName => {
    if (initializing) {
      return;
    }

    setTimeout(() => {
      props.navigation.navigate(stackName);
    }, 2000);
  };

  onChangeRouteAfterDelay(user ? 'App' : 'Auth');

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SplashScreen</Text>
    </SafeAreaView>
  );
}

export default SplashScreen;
