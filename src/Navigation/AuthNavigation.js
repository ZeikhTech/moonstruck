import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
import SplashScreen from '../Screens/SplashScreen';
import ForgotScreen from '../Screens/ForgotScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';

// const Stack = createStackNavigator();

const AuthNavigator = (Stack) => (
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
  </>
  // </Stack.Navigator>
);

export default AuthNavigator;
