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
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    elevation: 10,
    borderRadius: 10,
    marginVertical: 5,
    borderColor: Colors.primary,
    borderWidth: 3,
  },
  text: {
    marginLeft: 5,
    fontSize: 18,
    height: 45,
  },
});

export default AppTextInput;
