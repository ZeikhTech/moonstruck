import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './src/Navigation/rootNavigation';
import AuthNavigator from './src/Navigation/AuthNavigation';
import PhotoScreen from './src/Screens/Setting2Screen';
console.disableYellowBox = true;

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthNavigator />
    </NavigationContainer>
    // <PhotoScreen />
  );
}
