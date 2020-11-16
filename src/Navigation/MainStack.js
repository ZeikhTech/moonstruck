import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './rootNavigation';

import AppStack from './AppNavigator';
import AuthStack from './AuthNavigation';

const Stack = createStackNavigator();

const MainStack = (props) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        {AuthStack(Stack)}
        {AppStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
