import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

import Colors from '../../Constants/Colors';
import Images from '../../Constants/Images';

const {width, height} = Dimensions.get('window');

export default (props) => {
  const {title, onPress, white = false, color} = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.view}>
        <Text
          style={[styles.text, color ? {color: color, fontSize: 15} : null]}>
          {title}
        </Text>
      </View>
      <Image
        resizeMode="contain"
        style={[styles.bgImage, white ? {width: width * 0.45} : null]}
        source={white ? Images.EditButton : Images.Button}
      />
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
    width: width * 0.8,
    height: 50,
  },
  text: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
