import React, {useRef} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import * as Yup from 'yup';

import Screen from '../Components/Screen';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';

import {Form, FormImagePicker, SubmitButton} from '../Components/Forms';

const {width, height} = Dimensions.get('window');

const schema = Yup.object().shape({
  images: Yup.array().min(2),
});

function ProfilePhotoScreen(props) {
  const handleSubmit = (values) => {
    console.log('Images----', values);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          resizeMode="stretch"
          source={Images.BackgroundImage}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image style={styles.backIcon} source={Images.BackArrow} />
            </TouchableOpacity>
            <Image
              style={styles.logo}
              source={Images.Logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>SETTINGS</Text>
            <Image
              style={styles.settingIcon}
              resizeMode="center"
              source={Images.SettingIcon}
            />
          </View>
          <View style={styles.photoContainer}>
            <Text style={styles.label}>ADD PROFILE PHOTOS</Text>
          </View>
          <Form
            initialValues={{images: []}}
            validationSchema={schema}
            onSubmit={handleSubmit}>
            <FormImagePicker name="images" />
            <View style={styles.button}>
              <SubmitButton title="upload" />
            </View>
          </Form>
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
    width: 40,
    height: 40,
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
  button: {
    flex: 0.2,
  },
});

export default ProfilePhotoScreen;
