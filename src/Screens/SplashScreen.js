import React, {useEffect} from 'react';
import {View, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {useDispatch} from 'react-redux';

import Screen from '../Components/Common/Screen';
import Images from '../Constants/Images';
import Routes from '../Navigation/routes';
import {setToken} from '../Store/auth/authState';
import {setUser} from '../Store/auth/user';
import storage from '../Services/storage';

function SplashScreen(props) {
  useEffect(() => {
    initializeApp();
  }, []);

  const dispatch = useDispatch();

  const initializeApp = async () => {
    let nextScreen = Routes.WELCOME;
    try {
      const xAuthToken = await storage.get('xAuthToken');
      const user = await storage.get('user');
      // console.log(user[0].email);
      if (user && xAuthToken) {
        // dispatch(setToken(xAuthToken));
        // dispatch(setUser(user));

        nextScreen = Routes.FINDMATCH;

        if (!user[0].verified) nextScreen = Routes.VERIFY_EMAIL;
      }
    } catch (err) {
      throw new Error(err);
    }
    setTimeout(() => {
      navigateToNextScreen(nextScreen);
    }, 2000);
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
