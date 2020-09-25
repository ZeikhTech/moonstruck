import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import IntroScreen from './src/Screens/IntroScreen';

export default function App() {
  return (
    <View>
      <IntroScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
