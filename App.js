import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/Store/store';
import MainStack from './src/Navigation/MainStack';
import OfflineNotice from './src/Components/Common/OfflineNotice';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <OfflineNotice />
      <MainStack />
    </Provider>
  );
}
