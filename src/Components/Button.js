import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

// import colors from "../../Config/colors";

function AppButton({
  title,
  onPress,
  color,
  textColor,
  size,
  weight,
  elevation,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color, elevation: elevation}]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          {color: textColor, fontSize: size, fontWeight: weight},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9,
    width: '70%',
    height: 45,
    // elevation: 5,
  },
  text: {
    color: '#33A4FF',
    fontSize: 24,
    textTransform: 'uppercase',
  },
});

export default AppButton;
