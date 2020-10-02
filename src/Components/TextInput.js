import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import Colors from '../Constants/Colors';

function AppTextInput({width = '100%', ...otherProps}) {
  return (
    <View style={[styles.container, {width}]}>
      <TextInput
        placeholderTextColor={Colors.placeholder}
        style={styles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginVertical: 5,
    borderColor: Colors.primary,
    borderWidth: 3,
    justifyContent: 'center',
    elevation: 9,
  },
  text: {
    marginLeft: 5,
    fontSize: 18,
    height: 40,
  },
});

export default AppTextInput;
