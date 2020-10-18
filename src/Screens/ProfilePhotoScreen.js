import React, {useRef} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';

import Screen from '../Components/Screen';
import Colors from '../Constants/Colors';
import ImageInput from '../Components/ImageInputList';

const {width, height} = Dimensions.get('screen');

function ProfilePhotoScreen(props) {
  const scrollView = useRef();

  const handleScroll = () => {};

  return (
    <Screen>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          resizeMode="stretch"
          source={require('../assets/Backgrounds/BG.png')}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image
                style={styles.backIcon}
                source={require('../assets/Misc/back-arrow.png')}
              />
            </TouchableOpacity>
            <Image
              style={styles.logo}
              source={require('../assets/Misc/logo.png')}
              resizeMode="contain"
            />
          </View>
          <ScrollView ref={scrollView} style={{}}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>SETTINGS</Text>
              <Image
                style={styles.settingIcon}
                resizeMode="center"
                source={require('../assets/Misc/settings-gear.png')}
              />
            </View>
            <View style={styles.photoContainer}>
              <Text style={styles.label}>ADD PROFILE PHOTOS</Text>
            </View>
            <View style={{marginBottom: 20}}>
              <View style={styles.addImage}>
                <ImageInput />
              </View>
              <View style={styles.addImage2}>
                <ImageInput />
                <Text>
                  {'\n'}
                  {'\n'}
                </Text>
              </View>
            </View>
            <View style={{}}>
              <View style={styles.addImage}>
                <ImageInput />
              </View>
              <View style={styles.addImage2}>
                <ImageInput />
                <Text>
                  {'\n'}
                  {'\n'}
                  {'\n'}
                  {'\n'}
                  {'\n'}
                  {'\n'}
                </Text>
              </View>
            </View>
            <View style={{}}>
              <View style={styles.addImage}>
                <ImageInput />
              </View>
              <View style={styles.addImage2}>
                <ImageInput />
                <Text>
                  {'\n'}
                  {'\n'}
                  {'\n'}
                  {'\n'}
                  {'\n'}
                  {'\n'}
                </Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.downIconContainer}>
            <TouchableOpacity
              onPress={() =>
                scrollView.current.scrollTo({x: 0, y: 550, animation: true})
              }>
              <Image
                style={styles.downIcon}
                resizeMode="contain"
                source={require('../assets/Misc/downArrow.png')}
              />
            </TouchableOpacity>
          </View>
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
  headerContainer: {
    padding: 10,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    marginRight: 40,
    height: 35,
    width: 35,
  },
  logo: {
    width: width * 0.6,
    height: height * 0.09,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingIcon: {
    marginLeft: 30,
    width: 55,
    height: 55,
  },

  titleText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: Colors.text,
  },
  photoContainer: {
    top: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },
  addImage: {
    marginTop: 30,
  },

  addImage2: {
    marginTop: 30,
  },
  polaroid2: {
    alignSelf: 'center',
    width: '90%',
    height: 200,
  },
  downIconContainer: {
    right: 0,
    left: 0,
    bottom: 30,
    alignItems: 'center',
  },
  downIcon: {
    height: 30,
    width: 30,
  },
});

export default ProfilePhotoScreen;
