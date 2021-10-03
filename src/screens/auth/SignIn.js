import {Formik} from 'formik';
import React, {useContext} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import * as yup from 'yup';
import {AuthContext} from '../../auth/AuthProvider';

function SignIn(props) {
  const {login} = useContext(AuthContext);

  const validationSchema = yup.object().shape({
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().min(6).max(18).label('Password'),
  });

  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async ({email, password}) => {
          try {
            await login(email, password);
            props.navigation.navigate('App');
          } catch (error) {
            console.error(error);
          }
        }}
        validationSchema={validationSchema}>
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
              placeholderTextColor="#b2b2b2"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              style={{color: 'black'}}
            />
            <TextInput
              secureTextEntry
              placeholderTextColor="#b2b2b2"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              style={{color: 'black'}}
            />
            <Button disabled={!isValid} title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default SignIn;
