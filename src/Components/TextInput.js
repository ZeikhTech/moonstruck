import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

function AppTextInput({width = '100%', ...otherProps}) {
  return (
    <View style={[styles.container, {width}]}>
      <TextInput
        placeholderTextColor="gray"
        style={styles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    borderColor: '#33A4FF',
    borderWidth: 3,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    height: 40,
  },
});

export default AppTextInput;
