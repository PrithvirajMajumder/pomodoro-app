import {Formik} from 'formik';
import React, {useContext} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as yup from 'yup';
import {AuthContext} from '../../auth/AuthProvider';
import AppButton from '../../components/custom-components/AppButton';
import AppTextInput from '../../components/custom-components/AppTextInput';
import {colors} from '../../styles/Colors';

function SignIn(props) {
  const {login} = useContext(AuthContext);
  const deviceHeight = Dimensions.get('window').height;

  const validationSchema = yup.object().shape({
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().min(6).max(18).label('Password'),
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              backgroundColor: colors.light.dark,
              height: deviceHeight,
            }}>
            <StatusBar
              backgroundColor={colors.light.dark}
              barStyle="dark-content"
            />
            <View
              style={{height: '55%', position: 'relative', marginBottom: -100}}>
              <Text style={styles.headingText}>
                {'Start,\nTrack and\nImprove\nYour\nWork!'}
              </Text>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  top: -50,
                  right: -95,
                }}
                source={require('../../assets/svgs/login.png')}
              />
            </View>
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
                <View>
                  <AppTextInput
                    label="Email"
                    errors={errors.email ? true : null}
                    icon="email"
                    placeholder="Eg. yourname@email.com"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                  />
                  <AppTextInput
                    secureTextEntry
                    label="Password"
                    icon="lock"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    placeholder="Make it tough to guess"
                  />
                  <AppButton
                    icon="login"
                    title="Login"
                    reverse
                    centerFocus
                    color="primary"
                    onPress={handleSubmit}
                  />
                </View>
              )}
            </Formik>
            <TouchableOpacity
              onPress={() => {
                console.log('hello');
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  color: colors.dark.low,
                  textAlign: 'center',
                }}>
                Don’t have an account? Register.
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 32,
    marginTop: 42,
    fontWeight: '600',
    color: colors.primary.dark,
  },
});

export default SignIn;
