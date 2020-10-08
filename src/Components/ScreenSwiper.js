import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

import OnBoardScreen1 from '../Screens/OnBoardScreen1';
import OnBoardScreen2 from '../Screens/OnBoardScreen2';
import OnBoardScreen3 from '../Screens/OnBoardScreen3';
import Routes from '../Navigation/routes';

const ScreenSwiper = (props) => {
  const onBackPress = () => {
    props.navigation.goBack();
  };
  const onStartDatingPress = () => {
    props.navigation.navigate(Routes.PROFILE);
  };

  return (
    <Swiper
      loop={false}
      dot={
        <Image
          style={styles.dots}
          resizeMode="center"
          source={require('../assets/Misc/Slider-Dot-2.png')}
        />
      }
      activeDot={
        <Image
          style={styles.dots}
          resizeMode="center"
          source={require('../assets/Misc/Slider-Dot-1.png')}
        />
      }
      paginationStyle={styles.dotStyle}>
      <OnBoardScreen1
        onBackPress={onBackPress}
        onStartDatingPress={onStartDatingPress}
      />
      <OnBoardScreen2 onBackPress={onBackPress} />
      <OnBoardScreen3 onBackPress={onBackPress} />
    </Swiper>
  );
};

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  dotStyle: {
    position: 'absolute',
    marginBottom: height * 0.15,
  },
  dots: {
    height: 15,
    width: width * 0.07,
  },
});

export default ScreenSwiper;
