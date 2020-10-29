import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './src/Navigation/rootNavigation';
import AuthNavigator from './src/Navigation/AuthNavigation';
import Findmatch from './src/Screens/FindMatchScreen';
import Setting2 from './src/Screens/Setting2Screen';

export default function App() {
  return (
    // <NavigationContainer ref={navigationRef}>
    //   <AuthNavigator />
    // </NavigationContainer>
    <Findmatch />
  );
}
