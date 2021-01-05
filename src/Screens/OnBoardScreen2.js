import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Screen from '../Components/Common/Screen';
import Button from '../Components/Common/Button';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';

const {width, height} = Dimensions.get('screen');

function OnBoardScreen2(props) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={Images.BackgroundImage}>
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

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={Images.Onboarding2}
          />
        </View>
        <View style={styles.textContainer}>
          <Animatable.Text style={styles.label} delay={3500} animation="fadeIn">
            NUMEROLOGY TOOLS
          </Animatable.Text>
          <Animatable.View
            style={styles.sloganContainer}
            delay={4000}
            animation="fadeIn">
            <Text style={styles.slogan}>
              Access numerology tools and personal reports by numerology expert
              Michael Emilio
            </Text>
          </Animatable.View>
        </View>
        <View style={styles.button}>
          <Button title="go to the tools" />
        </View>
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
    resizeMode: 'cover',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  backIcon: {
    marginRight: 20,
    height: 35,
    width: 35,
  },
  logo: {
    width: width * 0.6,
    height: height * 0.09,
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
    bottom: 40,
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
    textAlign: 'center',
    fontSize: 20,
    color: Colors.white,
  },
  button: {
    bottom: 30,
  },
});

export default OnBoardScreen2;
