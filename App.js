import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './src/Navigation/rootNavigation';
import AuthNavigator from './src/Navigation/AuthNavigation';
import OnBoarding3 from './src/Screens/OnBoardScreen3';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthNavigator />
    </NavigationContainer>
    // <OnBoarding3 />
  );
}
