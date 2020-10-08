import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
import ForgotScreen from '../Screens/ForgotScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import ScreenSwiper from '../Components/ScreenSwiper';
import ProfileScreen from './../Screens/ProfileScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Forgot"
      component={ForgotScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Swiper"
      component={ScreenSwiper}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
