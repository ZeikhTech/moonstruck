import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './src/Navigation/rootNavigation';
import AuthNavigator from './src/Navigation/AuthNavigation';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
