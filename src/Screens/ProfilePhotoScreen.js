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
import {useDispatch} from 'react-redux';

import RNFetchBlob from 'rn-fetch-blob';

import Screen from '../Components/Common/Screen';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';
import Routes from '../Navigation/routes';
import VideoInput from '../Components/Common/VideoInput';

import {
  Form,
  FormImagePicker,
  FormVideoPicker,
  SubmitButton,
} from '../Components/Forms';
import {setProfilePicture} from '../Store/api/profile';

import axios from 'axios';

const {width, height} = Dimensions.get('window');

const schema = Yup.object().shape({
  // images: Yup.array().min(5),
});

function ProfilePhotoScreen(props) {
  // const dispatch = useDispatch();
  // const userId = props.route.params.userId;

  const handleSubmit = async (values) => {
    console.log(values);

    const data = new FormData();
    data.append('id', 66);
    data.append('video', values.video);
    values.images.map((image, index) => {
      data.append(`images[${index}]`, image);
    });

    // console.log(data);

    // dispatch(
    //   setProfilePicture({
    //     body: data,
    //     onSuccess: (res) => {
    //       console.log('response============', res.data);
    //       // props.navigation.navigate(Routes.BIO_SETTING);
    //     },
    //   }),
    // );
    props.navigation.navigate(Routes.BIO_SETTING);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        resizeMode="stretch"
        source={Images.BluredBackground}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
          initialValues={{images: [], video: null}}
          validationSchema={schema}
          onSubmit={handleSubmit}>
          <FormImagePicker name="images" />
          <View style={styles.videoContainer}>
            <FormVideoPicker name="video" />
            {/* <VideoInput /> */}
          </View>
          <View style={styles.button}>
            <SubmitButton title="upload" wp={250} hp={100} />
          </View>
        </Form>
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
  },
  headerContainer: {
    // padding: 10,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 10,
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
    height: 30,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
  },
  subLabel: {
    fontSize: 14,
    color: Colors.white,
  },
  videoContainer: {
    alignItems: 'center',
  },
  button: {
    // backgroundColor: 'red',
    bottom: 25,
  },
});

export default ProfilePhotoScreen;
