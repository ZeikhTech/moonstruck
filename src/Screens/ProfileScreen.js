import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Colors from '../Constants/Colors';
import Button from '../Components/Button';
import Screen from '../Components/Screen';
import Images from '../Constants/Images';
import Routes from '../Navigation/routes';

const {width, height} = Dimensions.get('window');

function ProfileScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          resizeMode="cover"
          source={Images.BluredBackground}>
          <View style={styles.header}>
            <Animatable.Image
              delay={700}
              animation="bounceInLeft"
              style={styles.logo}
              resizeMode="contain"
              source={Images.Logo}
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate(Routes.SETTING)}>
              <Animatable.Image
                delay={900}
                animation="rotate"
                resizeMode="contain"
                style={styles.settingsIcon}
                source={Images.SettingIcon}
              />
            </TouchableOpacity>
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
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Animatable.Text
                delay={3000}
                animation="fadeInLeft"
                style={styles.boxBody}>
                FRIENDLY AND GENUINE {'\n'}INTUITIVE AND {'\n'}EMPATHETIC{'\n'}
                DIPLOMATIC AND LOVING {'\n'}SUPPORTIVE AND FLEXIBLE {'\n'}
                EMOTIONALLY ENGAGING {'\n'}TENDENCY TO BE {'\n'}INDECISIVE AND
                TOO NICE
              </Animatable.Text>
            </View>
          </Animatable.View>
          <Animatable.View
            delay={3300}
            animation="zoomIn"
            style={styles.button}>
            <Button title="continue" />
          </Animatable.View>
        </ImageBackground>
      </View>
    </Screen>
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
    alignItems: 'center',
  },
  logo: {
    marginLeft: 35,
    height: 60,
    width: width * 0.6,
  },
  settingsIcon: {
    marginTop: 5,
    marginLeft: 60,
    width: width * 0.1,
    height: height * 0.08,
  },
  titleContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
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
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  lifeNumber: {
    fontSize: 22,
    color: Colors.white,
  },
  number: {
    marginLeft: 10,
    bottom: 45,
    fontSize: 82,
    color: Colors.secondary,
  },
  box: {
    bottom: 40,
    width: '85%',
    height: '50%',
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: Colors.white,
  },
  boxTitle: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.primary,
  },
  boxBody: {
    fontSize: 20,
    lineHeight: 28,
    color: Colors.white,
  },
  button: {
    bottom: 20,
  },
});

export default ProfileScreen;
