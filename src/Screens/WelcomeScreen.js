import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Video from '../Components/BackgroundVideo';
import Button from '../Components/Button';
import Colors from '../Constants/Colors';
import Routes from '../Navigation/routes';

const {width, height} = Dimensions.get('window');

function IntroScreen(props) {
  const [fadingText, setFadingText] = useState(
    'NUMEROLOGY AND ASTROLOGY DATING',
  );
  const changingText = React.createRef();

  const repetingInterval = setInterval(() => {
    if (changingText.current) {
      changingText.current.fadeOut(3000).then(() => {
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
    <View style={styles.container}>
      <Video />
      <SafeAreaView style={styles.safeAreaView}>
        <Animatable.Image
          style={styles.logo}
          source={require('../assets/Misc/logo.png')}
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
            onPress={() => props.navigation.navigate(Routes.LOGIN)}
          />
        </Animatable.View>
        <Animatable.View
          style={styles.notRegisterContainer}
          delay={3500}
          animation="fadeIn">
          <Text
            onPress={() => props.navigation.navigate(Routes.REGISTER)}
            style={styles.notRegister}>
            NOT REGISTERED?
          </Text>
        </Animatable.View>
        <Animatable.View
          style={styles.registerButton}
          delay={4000}
          animation="fadeIn">
          <TouchableOpacity
            onPress={() => props.navigation.navigate(Routes.REGISTER)}>
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
    color: Colors.white,
  },
  separator: {
    marginTop: 120,
    alignSelf: 'center',
    height: 3,
    width: 150,
    backgroundColor: Colors.white,
  },
  signInButton: {
    marginTop: 70,
    alignItems: 'center',
  },
  notRegisterContainer: {
    alignItems: 'center',
  },
  notRegister: {
    marginTop: 30,
    color: Colors.placeholder,
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    marginTop: 30,
    alignItems: 'center',
  },
  join: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator2: {
    marginTop: 5,
    alignSelf: 'center',
    height: 1,
    width: 110,
    backgroundColor: Colors.white,
  },
  termsContainer: {
    marginTop: 70,
    alignSelf: 'center',
  },
  terms: {
    fontSize: 12,
    color: Colors.white,
  },
});

export default IntroScreen;
