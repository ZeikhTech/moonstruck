import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {Slider, CheckBox} from 'react-native-elements';

import Screen from '../Components/Screen';
import Colors from '../Constants/Colors';
import Button from '../Components/Button';
import Routes from '../Navigation/routes';
import Images from '../Constants/Images';

const {width, height} = Dimensions.get('screen');

function SettingsScreen(props) {
  const [value, setValue] = useState(500);
  const [isMan, setIsMan] = useState(false);
  const [isWoman, setIsWoman] = useState(false);
  const [manChecked, setmanChecked] = useState(false);
  const [womanChecked, setwomanChecked] = useState(false);

  const manIconSource = isMan ? Images.manON : Images.manOFF;
  const womanIconSource = isWoman ? Images.womanON : Images.womanOFF;

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
            source={Images.BackgroundImage}>
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
              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>
                  (PLEASE CHECK {'\n'}THE APPROPRIATE OPTIONS)
                </Text>
              </View>
              <View style={styles.human}>
                <View style={styles.manContainer}>
                  <Text style={styles.manText}>I AM A </Text>
                  <Text style={styles.manColor}>MAN</Text>
                </View>
                <View style={styles.womanContainer}>
                  <Text style={styles.womanText}>I AM A </Text>
                  <Text style={styles.womanColor}>WOMAN</Text>
                </View>
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => setIsMan(!isMan)}>
                  <Image
                    style={styles.manOff}
                    resizeMode="contain"
                    source={manIconSource}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsWoman(!isWoman)}>
                  <Image
                    style={styles.womanOff}
                    resizeMode="contain"
                    source={womanIconSource}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.zipcodeContainer}>
                <Text style={styles.zipcode}>
                  DESIRED{'\n'}ZIP CODE PLEASE:
                </Text>
                <TextInput style={styles.zipcodeInput} keyboardType="numeric" />
              </View>
              <View style={styles.rangeContainer}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.rangeLabel}>RANGE PLEASE:</Text>
                  <Text style={styles.rangeValue}>{`${value} MILES`}</Text>
                </View>
                <View
                  style={{
                    width: '90%',
                    marginTop: 15,
                    alignSelf: 'center',
                  }}>
                  <Slider
                    value={value}
                    onValueChange={setValue}
                    step={5}
                    maximumValue={1000}
                    minimumValue={0}
                    thumbStyle={{height: 35, width: 35, borderRadius: 25}}
                    thumbTintColor={Colors.range}
                    maximumTrackTintColor={Colors.white}
                    minimumTrackTintColor={Colors.white}
                  />
                </View>
              </View>
              <View style={styles.lookingContainer}>
                <View style={styles.manLook}>
                  <Text style={styles.manText}>LOOKING FOR A </Text>
                  <Text style={styles.manColor}>MAN</Text>
                  <View style={{left: 45}}>
                    <CheckBox
                      size={45}
                      checked={manChecked}
                      uncheckedColor={Colors.white}
                      checkedColor={Colors.man}
                      onPress={() => setmanChecked(!manChecked)}
                    />
                  </View>
                </View>
                <View style={styles.womanLook}>
                  <Text style={styles.womanText}>LOOKING FOR A </Text>
                  <Text style={styles.womanColor}>WOMAN</Text>
                  <View style={{left: 10, bottom: 20}}>
                    <CheckBox
                      size={45}
                      uncheckedColor={Colors.white}
                      checked={womanChecked}
                      checkedColor={Colors.secondary}
                      onPress={() => setwomanChecked(!womanChecked)}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.button}>
                <Button
                  title="Next"
                  onPress={() => props.navigation.navigate(Routes.PROFILE_PIC)}
                />
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
    height: 85,
    padding: 15,
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
    width: 35,
    height: 35,
  },

  titleText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: Colors.text,
  },
  subtitleContainer: {
    alignItems: 'center',
  },
  subtitleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.light,
  },
  human: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  manContainer: {
    flexDirection: 'row',
  },
  womanContainer: {
    flexDirection: 'row',
  },
  manText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },
  manColor: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.man,
  },
  womanText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },
  womanColor: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  manOff: {
    width: 100,
    height: 100,
  },
  womanOff: {
    width: 120,
    height: 120,
  },
  zipcodeContainer: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  zipcode: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  zipcodeInput: {
    padding: 10,
    fontSize: 18,
    width: '45%',
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    color: Colors.white,
    borderColor: Colors.white,
  },
  rangeContainer: {
    marginVertical: 10,
  },
  rangeLabel: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 'bold',
    color: Colors.white,
  },
  rangeValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 30,
    color: Colors.secondary,
  },
  lookingContainer: {
    height: 130,
    width: '90%',
    marginLeft: 20,
    bottom: 10,
  },
  manLook: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  womanLook: {
    flexDirection: 'row',
  },
  button: {
    bottom: 10,
  },
});

export default SettingsScreen;
