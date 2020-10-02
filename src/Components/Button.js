import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

// import colors from "../../Config/colors";

function AppButton({title, onPress, color, textColor, size, weight}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
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
    // marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9,
    width: '70%',
    height: 45,
    // marginVertical: 45,
  },
  text: {
    color: '#33A4FF',
    fontSize: 24,
    textTransform: 'uppercase',
    // fontWeight: "bold"
  },
});

export default AppButton;
