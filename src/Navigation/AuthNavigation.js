import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
import SplashScreen from '../Screens/SplashScreen';
import ForgotScreen from '../Screens/ForgotScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import VerifyEmailScreen from '../Screens/VerifyEmailScreen';
import VerifyPassScreen from '../Screens/VerifyPassScreen';
import NewPassScreen from '../Screens/NewPassScreen';

// const Stack = createStackNavigator();

export default (Stack, user) => (
  // <Stack.Navigator initialRouteName="SplashScreen">
  <>
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="Forgot"
      component={ForgotScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="VerifyEmail"
      component={VerifyEmailScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="VerifyPass"
      component={VerifyPassScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="NewPass"
      component={NewPassScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
  </>
  // </Stack.Navigator>
);
