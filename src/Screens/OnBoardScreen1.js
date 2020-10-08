import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Video from 'react-native-video';

const videoSource = require('../assets/Backgrounds/Onboarding_1.m4v');
import Button from '../Components/Button';
import Colors from '../Constants/Colors';
import Routes from '../Navigation/routes';

const {height, width} = Dimensions.get('screen');

function OnBoardingScreen1(props) {
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={videoSource}
        resizeMode="cover"
        paused={false}
        repeat={false}
        audioOnly={true}
      />
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
      <View style={styles.textContainer}>
        <Animatable.Text style={styles.label} delay={3500} animation="fadeIn">
          NUMEROLOGY DATING
        </Animatable.Text>
        <Text>{'\n'}</Text>
        <Animatable.View
          style={styles.sloganContainer}
          delay={4000}
          animation="fadeIn">
          <Text style={styles.slogan}>
            Use numerology and astrology to find others you vibe with...
          </Text>
        </Animatable.View>
      </View>
      <View style={styles.button}>
        <Button title="Start Dating now" onPress={props.onStartDatingPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    position: 'relative',
  },
  video: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
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
  textContainer: {
    flex: 1,
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center',
    fontSize: 18,
    color: Colors.white,
  },
  button: {
    height: height * 0.185,
  },
});

export default OnBoardingScreen1;
