import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';

import Screen from '../Components/Screen';
import Button from '../Components/Button';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';

const videoSource = require('../assets/Backgrounds/Onboarding_1.m4v');

const {height, width} = Dimensions.get('screen');

function OnBoardingScreen1(props) {
  const navigation = useNavigation();
  const [pause, setPause] = useState(false);

  useEffect(() => {
    navigation.addListener('focus', (route) => {
      setPause(false);
    });
    navigation.addListener('blur', (route) => {
      setPause(true);
    });
  }, []);

  return (
    <Screen>
      <View style={styles.container}>
        <Video
          style={styles.video}
          source={videoSource}
          resizeMode="cover"
          paused={pause}
          audioOnly={true}
        />
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={props.onBackPress}>
            <Image style={styles.backIcon} source={Images.BackArrow} />
          </TouchableOpacity>
          <Image
            style={styles.logo}
            source={Images.Logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Animatable.Text style={styles.label} delay={3500} animation="fadeIn">
            NUMEROLOGY DATING
          </Animatable.Text>
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
          <Button title="Start Dating now" onPress={props.onStart} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    height,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  headerContainer: {
    bottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    marginRight: 20,
    bottom: 10,
    height: 35,
    width: 35,
  },
  logo: {
    width: width * 0.6,
    height: height * 0.09,
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
    top: 65,
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },
  sloganContainer: {
    top: 20,
    width: width * 0.85,
  },
  slogan: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.white,
  },
  button: {
    bottom: 30,
  },
});

export default OnBoardingScreen1;
