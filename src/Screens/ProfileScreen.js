import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Colors from '../Constants/Colors';
import Button from '../Components/Button';

const {width, height} = Dimensions.get('window');

function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        resizeMode="cover"
        source={require('../assets/Misc/ProfileBackground.png')}>
        <View style={styles.header}>
          <Animatable.Image
            delay={700}
            animation="bounceInLeft"
            style={styles.logo}
            resizeMode="contain"
            source={require('../assets/Misc/logo.png')}
          />
          <Animatable.Image
            delay={900}
            animation="rotate"
            resizeMode="contain"
            style={styles.settingsIcon}
            source={require('../assets/Misc/settings-gear.png')}
          />
        </View>
        <Animatable.View
          delay={1500}
          animation="fadeIn"
          style={styles.titleContainer}>
          <Text style={styles.title}>WELCOME.</Text>
          <Text style={styles.name}>DAVE</Text>
        </Animatable.View>
        <Animatable.View style={styles.lifeContainer}>
          <Animatable.Text
            delay={2000}
            animation="fadeIn"
            style={styles.lifeNumber}>
            Your life path number is a
          </Animatable.Text>
          <Animatable.Text
            delay={2200}
            animation="flipInX"
            style={styles.number}>
            2
          </Animatable.Text>
        </Animatable.View>
        <Animatable.View delay={2500} animation="fadeIn" style={styles.box}>
          <Animatable.Text
            delay={2800}
            animation="fadeIn"
            style={styles.boxTitle}>
            THE HEALER
          </Animatable.Text>
          <Animatable.Text
            delay={3000}
            animation="fadeInLeft"
            style={styles.boxBody}>
            FRIENDLY AND GENUINE {'\n'}INTUITIVE AND {'\n'}EMPATHETIC{'\n'}
            DIPLOMATIC AND LOVING {'\n'}SUPPORTIVE AND FLEXIBLE {'\n'}
            EMOTIONALLY ENGAGING {'\n'}TENDENCY TO BE {'\n'}INDECISIVE AND TOO
            NICE
          </Animatable.Text>
        </Animatable.View>
        <Animatable.View delay={3300} animation="zoomIn" style={styles.button}>
          <Button title="continue" />
        </Animatable.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  logo: {
    marginLeft: 35,
    width: width * 0.6,
    height: 60,
  },
  settingsIcon: {
    marginLeft: 60,
    width: width * 0.09,
    height: height * 0.08,
  },
  titleContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white,
  },
  name: {
    marginLeft: 10,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.primary,
  },
  lifeContainer: {
    marginTop: 50,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  lifeNumber: {
    fontSize: 22,
    color: Colors.white,
  },
  number: {
    marginLeft: 20,
    bottom: 45,
    fontSize: 82,
    color: Colors.secondary,
  },
  box: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Colors.white,
    width: width * 0.8,
    height: height * 0.45,
    bottom: 30,
  },
  boxTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    color: Colors.primary,
  },
  boxBody: {
    fontSize: 20,
    marginLeft: 20,
    lineHeight: 32,
    marginTop: 30,
    color: Colors.white,
  },
  button: {
    marginTop: 10,
  },
});

export default ProfileScreen;
