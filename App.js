import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/Store/store';
import MainStack from './src/Navigation/MainStack';
import ChatScreen from './src/Screens/ChatScreen';
import VerifyPassScreen from './src/Screens/NewPassScreen';
import SettingsScreen from './src/Screens/SettingScreen';
import ProfilePhotoScreen from './src/Screens/ProfilePhotoScreen';
import VerifyEmailScreen from './src/Screens/VerifyEmailScreen';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
    // <ProfilePhotoScreen />
  );
}
