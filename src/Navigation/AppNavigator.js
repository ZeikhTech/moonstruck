import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import ScreenSwiper from '../Components/Common/ScreenSwiper';
import ProfileScreen from './../Screens/ProfileScreen';
import SettingsScreen from './../Screens/SettingScreen';
import ProfilePhotoScreen from './../Screens/ProfilePhotoScreen';
import Setting2Screen from '../Screens/Setting2Screen';
import MatchScreen from '../Screens/FindMatchScreen';
import ChatScreen from '../Screens/ChatScreen';
import DeleteAccountScreen from '../Screens/DeleteAccountScreen';

// const Stack = createStackNavigator();

const AuthNavigator = (Stack) => (
  //   <Stack.Navigator>
  <>
    <Stack.Screen
      name="Swiper"
      component={ScreenSwiper}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="ProfilePic"
      component={ProfilePhotoScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="Setting2"
      component={Setting2Screen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="SwipeCard"
      component={MatchScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="remove"
      component={DeleteAccountScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
  </>
  //   </Stack.Navigator>
);

export default AuthNavigator;
