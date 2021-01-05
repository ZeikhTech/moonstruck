import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  Switch,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Form, FormField, FormSwitch, SubmitButton} from '../Components/Forms';
import Screen from '../Components/Common/Screen';
import Button from '../Components/Common/Button';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';
import Routes from '../Navigation/routes';

import {setBio} from '../Store/api/profile';
import {logout} from '../Store/api/auth';

import storage from '../Services/storage';

const {width, height} = Dimensions.get('window');

function ProfilePhotoScreen(props) {
  const profile = useSelector((state) => state.auth.user.data);
  // console.log('profile===============', profile);
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    console.log(values);
    dispatch(
      setBio({
        body: values,
        onSuccess: (res) => {
          // console.log(res.data.user);
          props.navigation.navigate(Routes.FINDMATCH);
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

  return (
    <KeyboardAvoidingView
      style={{}}
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          resizeMode="stretch"
          source={Images.BluredBackground}>
          <ScrollView style={{height: '100%'}}>
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
            <View style={styles.settingContainer}>
              <Text style={styles.label}>A LITTLE BLURB ?</Text>

              <Form
                initialValues={{
                  blurb: '',
                  push_notification: false,
                }}
                onSubmit={handleSubmit}>
                <FormField name="blurb" autoCorrect={false} blurb={true} />

                <View style={styles.separatorLight} />
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
                <View style={styles.button}>
                  <SubmitButton title="let's get started" />
                </View>
              </Form>
              <View style={styles.separatorLight2} />
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
                      props.navigation.navigate(Routes.DELETE_ACCOUNT)
                    }
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  bgImage: {
    // flex: 1,
  },
  headerContainer: {
    padding: 5,
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
    height: 40,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: Colors.text,
  },
  settingContainer: {
    marginVertical: 10,
    // marginTop: 20,
    height: height,
    alignItems: 'center',
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },

  separatorLight: {
    height: 0.5,
    width: '80%',
    // marginTop: 15,
    backgroundColor: Colors.light,
    // marginVertical: 10,
  },
  notificationContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
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
    top: 40,
    height: 0.5,
    width: '80%',
    // marginTop: 20,
    backgroundColor: Colors.light,
  },
  button: {
    top: 20,
  },
  accountContainer: {
    // position: 'absolute',
    top: 50,
    flexDirection: 'row',
  },
});

export default ProfilePhotoScreen;
