import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Video from '../Components/BackgroundVideo';
import Button from '../Components/Button';

const {width, height} = Dimensions.get('window');

function IntroScreen(props) {
  const [fadingText, setFadingText] = useState(
    'NUMEROLOGY AND ASTROLOGY DATING',
  );
  const changingText = React.createRef();

  const repetingInterval = setInterval(() => {
    if (changingText.current) {
      changingText.current.fadeOut(2000).then(() => {
        if (fadingText === 'NUMEROLOGY AND ASTROLOGY DATING') {
          setFadingText('THE SCIENCE OF ATTRACTION');
        } else {
          setFadingText('NUMEROLOGY AND ASTROLOGY DATING');
        }
      });
      changingText.current.fadeIn(1000);
    }
  }, 3000);

  useEffect(() => {
    return () => {
      clearInterval(repetingInterval);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Video />
      <SafeAreaView style={styles.safeAreaView}>
        <Animatable.Image
          style={styles.logo}
          source={require('../assets/logo.png')}
          animation={'zoomIn'}
          delay={2000}
          resizeMode="contain"
        />
        <Animatable.View
          style={styles.sloganContainer}
          delay={3000}
          animation="fadeIn"
          ref={changingText}
          easing="ease-in">
          <Text style={styles.slogan}>{fadingText}</Text>
        </Animatable.View>
        <Animatable.View
          style={styles.separator}
          delay={2000}
          animation="fadeIn"
        />
        <Animatable.View
          style={styles.signInButton}
          delay={3000}
          animation="fadeIn"
          easing="ease-in">
          <Button
            title="Sign In"
            color="white"
            textColor="#33A4FF"
            size={24}
            weight="bold"
          />
        </Animatable.View>
        <Animatable.View
          style={styles.notRegisterContainer}
          delay={3500}
          animation="fadeIn"
          easing="ease-in">
          <Text style={styles.notRegister}>NOT REGISTERD?</Text>
        </Animatable.View>
        <Animatable.View
          style={styles.registerButton}
          delay={4000}
          animation="fadeIn"
          easing="ease-in">
          <Button title="Join us" textColor="white" size={34} weight="bold" />
        </Animatable.View>
        <Animatable.View
          style={styles.separator2}
          delay={3000}
          animation="fadeIn"
        />
        <Animatable.View
          style={styles.terms}
          delay={4000}
          animation="fadeIn"
          easing="ease-in">
          <Button title="terms & condition" textColor="#d0d0e1" size={14} />
        </Animatable.View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    position: 'relative',
  },
  safeAreaView: {
    flex: 1,
  },
  logo: {
    marginTop: 30,
    height: 100,
    width: '90%',
    alignSelf: 'center',
  },
  sloganContainer: {
    marginTop: 50,
  },
  slogan: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    marginTop: 120,
    alignSelf: 'center',
    height: 3,
    width: 150,
    backgroundColor: 'white',
  },
  signInButton: {
    marginTop: 70,
    color: 'white',
    alignItems: 'center',
  },
  notRegisterContainer: {
    alignItems: 'center',
  },
  notRegister: {
    marginTop: 30,
    color: '#d0d0e1',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    marginTop: 30,
    alignItems: 'center',
  },
  separator2: {
    alignSelf: 'center',
    height: 1,
    width: 130,
    backgroundColor: 'white',
  },
  terms: {
    marginTop: 70,
    alignSelf: 'center',
  },
});

export default IntroScreen;
