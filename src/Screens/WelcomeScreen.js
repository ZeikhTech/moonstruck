import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Screen from '../Components/Common/Screen';
import Video from '../Components/Common/BackgroundVideo';
import Button from '../Components/Common/Button';
import Colors from '../Constants/Colors';
import Routes from '../Navigation/routes';
import Images from '../Constants/Images';

const {width, height} = Dimensions.get('window');

function IntroScreen({navigation}) {
  const [fadingText, setFadingText] = useState(
    'NUMEROLOGY AND ASTROLOGY DATING',
  );
  const changingText = React.createRef();

  const repetingInterval = setInterval(() => {
    if (changingText.current) {
      changingText.current.fadeOut(4000).then(() => {
        if (fadingText === 'NUMEROLOGY AND ASTROLOGY DATING') {
          setFadingText('THE SCIENCE OF ATTRACTION');
        } else {
          setFadingText('NUMEROLOGY AND ASTROLOGY DATING');
        }
      });
      changingText.current.fadeIn(3000);
    }
  }, 7000);

  useEffect(() => {
    return () => {
      clearInterval(repetingInterval);
    };
  }, []);
  return (
    <Screen>
      {/* <View style={styles.container}> */}
      <Video />
      <Animatable.Image
        style={styles.logo}
        source={Images.Logo}
        animation={'zoomIn'}
        delay={2000}
        resizeMode="contain"
      />
      <Animatable.View
        style={styles.sloganContainer}
        delay={3000}
        animation="fadeIn"
        ref={changingText}>
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
        animation="fadeIn">
        <Button
          title="Sign In"
          textColor={Colors.primary}
          onPress={() => navigation.navigate(Routes.LOGIN)}
        />
      </Animatable.View>
      <Animatable.View
        style={styles.notRegisterContainer}
        delay={3500}
        animation="fadeIn">
        <TouchableOpacity onPress={() => navigation.navigate(Routes.REGISTER)}>
          <Text style={styles.notRegister}>NOT REGISTERED?</Text>
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View
        style={styles.registerButton}
        delay={4000}
        animation="fadeIn">
        <TouchableOpacity onPress={() => navigation.navigate(Routes.REGISTER)}>
          <Text style={styles.join}>JOIN US</Text>
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View
        style={styles.separator2}
        delay={3000}
        animation="fadeIn"
      />
      <Animatable.View
        style={styles.termsContainer}
        delay={4000}
        animation="fadeIn"
        easing="ease-in">
        <TouchableOpacity>
          <Text style={styles.terms}>TERMS & CONDITIONS</Text>
        </TouchableOpacity>
      </Animatable.View>
      {/* </View> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: '90%',
    alignSelf: 'center',
  },
  sloganContainer: {
    marginTop: 'auto',
  },
  slogan: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.white,
  },
  separator: {
    marginTop: 'auto',
    alignSelf: 'center',
    height: 3,
    width: 150,
    backgroundColor: Colors.white,
  },
  signInButton: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  notRegisterContainer: {
    alignItems: 'center',
    top: 30,
  },
  notRegister: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.placeholder,
  },
  registerButton: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  join: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.white,
  },
  separator2: {
    marginTop: 5,
    alignSelf: 'center',
    height: 1,
    width: 110,
    backgroundColor: Colors.white,
  },
  termsContainer: {
    marginTop: 'auto',
    alignSelf: 'center',
    bottom: 15,
  },
  terms: {
    fontSize: 12,
    color: Colors.white,
  },
});

export default IntroScreen;
