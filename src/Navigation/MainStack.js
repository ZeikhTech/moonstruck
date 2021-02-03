import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './rootNavigation';
import {connect} from 'react-redux';
import AppStack from './AppNavigator';
import AuthStack from './AuthNavigation';

const Stack = createStackNavigator();

const MainStack = (props) => {
  const {user} = props;

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        {AuthStack(Stack, user)}
        {AppStack(Stack, user)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  const {user} = state;
  return {
    user,
  };
};

export default connect(mapStateToProps)(MainStack);
