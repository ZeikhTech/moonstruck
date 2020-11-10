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

import Screen from '../Components/Common/Screen';
import Button from '../Components/Common/Button';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';
import Routes from '../Navigation/routes';

const {width, height} = Dimensions.get('window');

function ProfilePhotoScreen(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleSubmit = () => {};

  return (
    <Screen>
      <KeyboardAvoidingView
        style={{flex: 1}}
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
                <View style={styles.textAreaContainer}>
                  <TextInput
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={10}
                    placeholderTextColor={Colors.light}
                    placeholder="Tell us about yourself and what you are looking for..."
                  />
                </View>
                <View style={styles.separatorLight} />
                <View style={styles.notificationContainer}>
                  <Text style={styles.notificationText}>
                    PUSH NOTIFICATIONS
                  </Text>
                  <View style={styles.switchContainer}>
                    <Switch
                      value={isEnabled}
                      thumbColor={Colors.white}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      trackColor={{
                        false: Colors.white,
                        true: Colors.toggleSwitch,
                      }}
                    />
                  </View>
                </View>
                <View style={styles.separatorLight} />
                <View style={styles.button}>
                  <Button
                    title="let's get started"
                    onPress={() => props.navigation.navigate(Routes.SWIPECARD)}
                  />
                </View>
                <View style={styles.separatorLight2} />
                <View style={styles.accountContainer}>
                  <Button title="logout" white={true} color="red" />
                  <View style={{marginLeft: 8}}>
                    <Button title="delete account" white={true} color="gray" />
                  </View>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
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
  settingContainer: {
    marginTop: 20,
    height: height * 0.7,
    alignItems: 'center',
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },
  textAreaContainer: {
    width: '80%',
    marginTop: 10,
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
  textInput: {
    padding: 10,
    height: 200,
    fontSize: 20,
    fontStyle: 'italic',
    color: Colors.white,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
  separatorLight: {
    height: 0.5,
    width: '75%',
    marginTop: 20,
    backgroundColor: Colors.light,
  },
  notificationContainer: {
    top: 10,
    right: 20,
    flexDirection: 'row',
  },
  notificationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
  switchContainer: {
    left: 40,
  },
  separatorLight2: {
    top: 55,
    height: 0.5,
    width: '75%',
    marginTop: 20,
    backgroundColor: Colors.light,
  },
  button: {
    top: 40,
  },
  accountContainer: {
    top: 80,
    flexDirection: 'row',
  },
});

export default ProfilePhotoScreen;
