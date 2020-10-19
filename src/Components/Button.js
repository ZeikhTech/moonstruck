import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import Colors from '../Constants/Colors';
import Images from '../Constants/Images';

export default (props) => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.view}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <Image style={styles.bgImage} source={Images.Button} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  bgImage: {
    width: 300,
    height: 50,
  },
  text: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
