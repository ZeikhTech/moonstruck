import React from 'react';
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

import Screen from '../Components/Common/Screen';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';
import Routes from '../Navigation/routes';

import {
  Form,
  FormImagePicker,
  FormVideoPicker,
  SubmitButton,
} from '../Components/Forms';
import VideoInput from '../Components/Common/VideoInput';

const {width, height} = Dimensions.get('window');

const schema = Yup.object().shape({
  // images: Yup.array().min(5),
});

function ProfilePhotoScreen({navigation}) {
  const handleSubmit = (values) => {
    console.log('Images----', values);
    navigation.navigate(Routes.SEETING2);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          resizeMode="stretch"
          source={Images.BluredBackground}>
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
            <Text style={styles.label}>ADD PROFILE / VIDEOS</Text>
            <Text style={styles.subLabel}>NOTE: 10 SEC MAX FOR THE VIDEO</Text>
          </View>
          <Form
            initialValues={{images: [], video: ''}}
            validationSchema={schema}
            onSubmit={handleSubmit}>
            <FormImagePicker name="images" />
            <View style={styles.videoContainer}>
              <FormVideoPicker name="video" />
              {/* <VideoInput /> */}
            </View>
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
  subLabel: {
    marginTop: 5,
    fontSize: 16,
    color: Colors.white,
  },
  videoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
    flex: 0.35,
  },
});

export default ProfilePhotoScreen;
