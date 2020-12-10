import React, {useEffect} from 'react';
import {View, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import Screen from '../Components/Common/Screen';
import Images from '../Constants/Images';
import Routes from '../Navigation/routes';

import storage from '../Services/storage';

function SplashScreen(props) {
  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    let nextScreen = Routes.WELCOME;
    try {
      const user = await storage.get('user');
      if (user) nextScreen = Routes.BIO_SETTING;
    } catch (error) {}
    setTimeout(() => {
      navigateToNextScreen(nextScreen);
    }, 3000);
  };

  const navigateToNextScreen = (name) => {
    const {navigation} = props;
    const resetAction = CommonActions.reset({
      index: 1,
      routes: [{name}],
    });

    navigation.dispatch(resetAction);
  };
  return (
    <Screen>
      <ImageBackground
        resizeMode="stretch"
        style={styles.bgImage}
        source={Images.BackgroundImage}>
        <View style={styles.container}>
          <Animatable.Image
            delay={500}
            animation="fadeIn"
            source={Images.Logo}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </Screen>
  );
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    flex: 1,
  },
  logoImage: {
    height: height * 0.7,
    width: width * 0.85,
  },
});

export default SplashScreen;
