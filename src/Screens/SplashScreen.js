import React, {useEffect} from 'react';
import {View, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import Screen from '../Components/Screen';
import Images from '../Constants/Images';
import Routes from '../Navigation/routes';

function SplashScreen(props) {
  useEffect(() => {
    setTimeout(navigateToNextScreen, 3000);
  }, []);

  const navigateToNextScreen = () => {
    const {navigation} = props;
    const resetAction = CommonActions.reset({
      index: 1,
      routes: [{name: Routes.WELCOME}],
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
