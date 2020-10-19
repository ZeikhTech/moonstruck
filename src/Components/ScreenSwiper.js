import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

import OnBoardScreen1 from '../Screens/OnBoardScreen1';
import OnBoardScreen2 from '../Screens/OnBoardScreen2';
import OnBoardScreen3 from '../Screens/OnBoardScreen3';
import Routes from '../Navigation/routes';
import Images from '../Constants/Images';

const ScreenSwiper = ({navigation}) => {
  const onBackPress = () => {
    return navigation.goBack();
  };
  const handleAction = (action) => {
    return navigation.navigate(Routes.PROFILE);
  };

  return (
    <Swiper
      loop={false}
      dot={
        <Image style={styles.dots} resizeMode="center" source={Images.Dot} />
      }
      activeDot={
        <Image
          style={styles.dots}
          resizeMode="center"
          source={Images.ActiveDot}
        />
      }
      paginationStyle={styles.dotStyle}>
      <OnBoardScreen1 onBackPress={onBackPress} onStart={handleAction} />
      <OnBoardScreen2 onBackPress={onBackPress} />
      <OnBoardScreen3 onBackPress={onBackPress} />
    </Swiper>
  );
};

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  dotStyle: {
    marginBottom: 80,
  },
  dots: {
    height: height * 0.02,
    width: width * 0.07,
  },
});

export default ScreenSwiper;
