import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {
  Form,
  FormField,
  FormAgeSlider,
  FormBirthday,
  FormCheckbox,
  FormGender,
  FormShowImage,
  FormRangeSlider,
  FormSwitch,
  FormVideoPicker,
  FormZip,
  SubmitButton,
} from '../Components/Forms';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

import Colors from '../Constants/Colors';
import Loader from '../Components/Common/Loader';
import Images from '../Constants/Images';
import Routes from '../Navigation/routes';
import Button from '../Components/Common/Button';

import {setAsset} from '../Store/entities/profile';
import {updateMe} from '../Store/api/auth';
import {updateAssets, updateProfile} from '../Store/api/profile';
import {loadFeed} from '../Store/api/myFeed';
import {setBio, logout} from '../Store/api/auth';
import storage from '../Services/storage';

const {width, height} = Dimensions.get('screen');

const schema = Yup.object().shape({
  // images: Yup.array().min(5).required().label('Images'),
  // video: Yup.string().required().label('Video'),
});

function EditProfileScreen({navigation}) {
  const token = useSelector((state) => state.auth.state.token);
  const userId = useSelector((state) => state.auth.user.data[0].id);
  const loading = useSelector((state) => state.auth.user.loading);
  const user = useSelector((state) => state.auth.user.data[0]);
  const userAssets = useSelector((state) => state.entities.profile.assets);

  // console.log('asset', userAssets);

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(
        updateMe({
          onSuccess: (res) => {
            console.log('show user api======', res.data.user);
          },
        }),
      );
    });
  }, []);

  console.log('user state====>', user);

  const handleSubmit = async (values) => {
    // console.log(values);

    const formData = new FormData();
    formData.append('token', token);
    formData.append('id', userId);
    formData.append('full_name', values.full_name);
    formData.append('is_man', values.is_man * 1);
    formData.append('is_woman', values.is_woman * 1);
    formData.append('man', values.man * 1);
    formData.append('woman', values.woman * 1);
    formData.append('birth_date', values.birth_date);
    formData.append('blurb', values.blurb);
    formData.append('distance_range', values.distance_range);
    formData.append('lower_age', values.age[0]);
    formData.append('max_age', values.age[1]);
    formData.append('search_worldwide', values.search_worldwide * 1);
    formData.append('push_notification', values.push_notification * 1);

    dispatch(
      updateProfile({
        body: formData,
        onSuccess: (res) => {
          console.log('update settings response=======>', res.data);
          if (res.data.user) {
            dispatch(
              loadFeed({
                onSuccess: (res) => {
                  console.log('update feed response=======>', res.data);
                },
              }),
            );
          }
        },
      }),
    );

    const assets = {
      images: values.images,
      video: values.video,
    };

    await storage.store('userAsset', assets);
    dispatch(setAsset(assets));

    const videoFile = {
      name: 'video.mp4',
      type: 'video/mp4',
      uri: values.video,
    };

    const userAssets = new FormData();
    userAssets.append('token', token);
    userAssets.append('id', userId);
    userAssets.append('video', videoFile);
    values.images.map((image, index) => {
      userAssets.append(`images[${index}]`, image);
    });

    dispatch(
      updateAssets({
        body: userAssets,
        onSuccess: (res) => {
          console.log('user assets response========>', res.data);
        },
      }),
    );
  };

  const handleLogout = async () => {
    dispatch(
      logout({
        onSuccess: (res) => {
          console.log(res.data);
        },
      }),
    );
  };

  const man = !!+user.man;
  const woman = !!+user.woman;
  const is_man = !!+user.is_man;
  const is_woman = !!+user.is_woman;
  const age1 = Number(user.lower_age);
  const age2 = Number(user.max_age);
  const distance_range = Number(user.distance_range);
  const search_worldwide = !!+user.search_worldwide;
  const push_notification = !!+user.push_notification;
  const image0 = userAssets.images[0];
  const image1 = userAssets.images[1];
  const image2 = userAssets.images[2];
  const image3 = userAssets.images[3];
  const image4 = userAssets.images[4];
  const video = userAssets.video;

  const initialValues = {
    full_name: user.full_name,
    video: video || null,
    birth_date: user.birth_date,
    images: [image0, image1, image2, image3, image4] || [],
    man: man,
    woman: woman,
    blurb: user.blurb,
    is_man: is_man,
    is_woman: is_woman,
    push_notification: push_notification,
    distance_range: distance_range,
    age: [age1, age2],
    search_worldwide: search_worldwide,
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        resizeMode="stretch"
        source={Images.BluredBackground}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior="padding"
          enabled={Platform.OS === 'ios'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
          <ScrollView style={{}}>
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
            {loading ? (
              <Loader />
            ) : (
              <>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>UPDATE SETTINGS</Text>
                  <Image
                    style={styles.settingIcon}
                    resizeMode="center"
                    source={Images.SettingIcon}
                  />
                </View>

                <Form
                  enableReinitialize
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={schema}>
                  <View style={styles.fullName}>
                    <Text style={{color: 'white'}}>Name : </Text>
                    <FormField
                      autoCorrect={false}
                      name="full_name"
                      placeholder="Enter your first name"
                    />
                  </View>
                  <View style={styles.birthContainer}>
                    <Text style={{color: 'white'}}>Birth date : </Text>
                    <View style={styles.birth}>
                      <Text style={{color: 'black'}}>{user.birth_date}</Text>
                    </View>
                    <FormBirthday name="birth_date" />
                  </View>
                  <View style={styles.separatorLight} />
                  <View style={{alignSelf: 'center'}}>
                    <FormShowImage name="images" />
                  </View>

                  <View style={styles.separatorLight2} />
                  <View style={{}}>
                    <View style={{marginHorizontal: 20}}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 18,
                          fontWeight: 'bold',
                        }}>
                        I'M LOOKING FOR A :
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <FormCheckbox name="man" />
                        <Text style={{color: 'white'}}>MAN</Text>
                      </View>
                      <View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <FormCheckbox name="woman" />
                          <Text style={{color: 'white'}}>WOMAN</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.settingContainer}>
                    <View style={styles.rangeContainer}>
                      <FormAgeSlider name="age" />
                      <FormRangeSlider name="distance_range" />
                      <View style={styles.worldwideContainer}>
                        <FormCheckbox name="search_worldwide" />
                        <Text style={styles.worldwide}>SEARCH WORLDWIDE</Text>
                      </View>
                    </View>

                    <View style={styles.separatorLight} />
                    <View style={{alignItems: 'center'}}>
                      <FormField
                        name="blurb"
                        autoCorrect={false}
                        blurb={true}
                      />
                    </View>

                    <View style={styles.separatorLight} />
                    <View style={{marginHorizontal: 20}}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 18,
                          fontWeight: 'bold',
                        }}>
                        Your Gender :
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        marginVertical: 15,
                        justifyContent: 'space-evenly',
                      }}>
                      <FormGender name="is_man" />
                      <FormGender name="is_woman" />
                    </View>
                    <View style={styles.separatorLight} />
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.notificationContainer}>
                        <View>
                          <Text style={styles.notificationText}>
                            PUSH NOTIFICATIONS
                          </Text>
                        </View>
                        <View style={styles.switchContainer}>
                          <FormSwitch name="push_notification" />
                        </View>
                      </View>
                      <View style={styles.separatorLight} />
                      <View style={{alignItems: 'center'}}>
                        <FormVideoPicker name="video" />
                      </View>

                      <View style={styles.separatorLight} />
                      <View style={styles.button}>
                        <SubmitButton title="UPDATE" />
                      </View>

                      <View style={styles.accountContainer}>
                        <Button
                          title="logout"
                          white={true}
                          color="red"
                          onPress={handleLogout}
                        />
                        <View style={{marginLeft: 8}}>
                          <Button
                            title="delete account"
                            white={true}
                            color="gray"
                            onPress={() =>
                              navigation.navigate(Routes.DELETE_ACCOUNT)
                            }
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </Form>
              </>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
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
    padding: 5,
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
  settingContainer: {
    marginVertical: 10,
    flex: 1,
  },
  worldwideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  worldwide: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
  fullName: {
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  birthContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 25,
  },
  birth: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 35,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  nameText: {
    color: Colors.white,
    fontSize: 18,
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },
  rangeContainer: {
    marginVertical: 15,
  },
  separatorLight: {
    marginVertical: 20,
    alignSelf: 'center',
    height: 0.5,
    width: '90%',
    backgroundColor: Colors.light,
  },
  notificationContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  notificationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
  switchContainer: {},
  separatorLight2: {
    marginVertical: 20,
    alignSelf: 'center',
    height: 0.5,
    width: '90%',
    backgroundColor: Colors.light,
  },
  button: {
    marginVertical: 15,
  },
  accountContainer: {
    flexDirection: 'row',
  },
});

export default EditProfileScreen;
