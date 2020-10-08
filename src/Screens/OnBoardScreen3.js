import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import BackgroundVideo from '../Components/BackgroundVideo';
import Button from '../Components/Button';
import Colors from '../Constants/Colors';

const {width, height} = Dimensions.get('screen');

function OnBoardScreen3(props) {
  return (
    <View style={styles.container}>
      <BackgroundVideo />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={props.onBackPress}>
          <Image
            style={styles.backIcon}
            source={require('../assets/Misc/back-arrow.png')}
          />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../assets/Misc/logo.png')}
          resizeMode="contain"
        />
      </View>

      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../assets/Misc/Onboarding-3.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <Animatable.Text style={styles.label} delay={3500} animation="fadeIn">
          LEARN ABOUT NUMEROLOGY
        </Animatable.Text>
        <Text>{'\n'}</Text>
        <Animatable.View
          style={styles.sloganContainer}
          delay={4500}
          animation="fadeIn">
          <Text style={styles.slogan}>
            Learn about the science underlying numerology...
          </Text>
        </Animatable.View>
      </View>
      <View style={styles.button}>
        <Button title="About numerology" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    bottom: 10,
    height: 35,
    width: 35,
  },
  logo: {
    marginLeft: 20,
    width: '70%',
    height: 60,
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 23,
        shadowRadius: 12,
      },
      android: {
        elevation: 50,
      },
    }),
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },
  sloganContainer: {
    width: width * 0.85,
  },
  slogan: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.white,
  },
  button: {
    height: height * 0.14,
  },
});

export default OnBoardScreen3;