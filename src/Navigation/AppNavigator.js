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
import MessagesScreen from '../Screens/MessagesScreen';
import EditProfileScreen from '../Screens/EditProfileScreen';

// const Stack = createStackNavigator();

export default (Stack, user) => (
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
      name="remove"
      component={DeleteAccountScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="messageList"
      component={MessagesScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="chat"
      component={ChatScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}
    />
  </>
  //   </Stack.Navigator>
);
