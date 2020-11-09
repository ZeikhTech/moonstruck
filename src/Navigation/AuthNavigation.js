import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
import SplashScreen from '../Screens/SplashScreen';
import ForgotScreen from '../Screens/ForgotScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import ScreenSwiper from '../Components/Common/ScreenSwiper';
import ProfileScreen from './../Screens/ProfileScreen';
import SettingsScreen from './../Screens/SettingScreen';
import ProfilePhotoScreen from './../Screens/ProfilePhotoScreen';
import Setting2Screen from '../Screens/Setting2Screen';
import MatchScreen from '../Screens/FindMatchScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="SplashScreen">
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
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
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ProfilePic"
      component={ProfilePhotoScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Setting2"
      component={Setting2Screen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="SwipeCard"
      component={MatchScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
