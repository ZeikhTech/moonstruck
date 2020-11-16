import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Button from '../Components/Common/Button';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';

const {width, height} = Dimensions.get('screen');

function OnBoardScreen3(props) {
  const [isVisible, setIsVisible] = useState(false);

  const handlePress = () => {
    setIsVisible(true);
  };
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={Images.BackgroundImage}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={props.onBackPress}>
            <Image style={styles.backIcon} source={Images.BackArrow} />
          </TouchableOpacity>
          <Image
            style={styles.logo}
            source={Images.Logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={Images.Onboarding3}
          />
        </View>
        <View style={styles.textContainer}>
          <Animatable.Text style={styles.label} delay={1500} animation="fadeIn">
            LEARN ABOUT NUMEROLOGY
          </Animatable.Text>
          <Animatable.View
            style={styles.sloganContainer}
            delay={2000}
            animation="fadeIn">
            <Text style={styles.slogan}>
              Learn about the science underlying numerology...
            </Text>
          </Animatable.View>
        </View>
        <View style={styles.screenButton}>
          <Button title="About numerology" onPress={handlePress} />
        </View>
      </ImageBackground>
      {isVisible && (
        <Modal visible={isVisible} animationType="fade" transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.modalText}>
                  Numerology is any belief in the divine or mystical
                  relationship between a number and one or more coinciding
                  events.[2] It is also the study of the numerical value, and
                  ideas. It is often associated with the paranormal, alongside
                  astrology and similar divinatory arts.[3]
                </Text>
                <View style={{alignItems: 'center', marginBottom: 20}}>
                  <Image
                    source={Images.Onboarding3}
                    resizeMode="contain"
                    style={styles.modalImage}
                  />
                </View>
                <Text style={styles.modalText}>
                  The term numerologist can be used for those who place faith in
                  numerical patterns and draw pseudo-scientific inferences from
                  them, even if those people
                </Text>
              </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsVisible(false)}>
                <View style={{zIndex: 1, position: 'absolute'}}>
                  <Text style={styles.btnText}>BACK</Text>
                </View>
                <Image
                  style={styles.editButton}
                  resizeMode="contain"
                  source={Images.BackButton}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    marginRight: 20,
    height: 35,
    width: 35,
  },
  logo: {
    width: width * 0.6,
    height: height * 0.09,
  },
  imageContainer: {
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 23,
        shadowRadius: 12,
      },
      android: {
        elevation: 50,
      },
    }),
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
  },
  modalImage: {
    width: width * 0.5,
    height: width * 0.5,
  },
  textContainer: {
    flex: 1,
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },
  sloganContainer: {
    top: 20,
    width: width * 0.85,
  },
  slogan: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.white,
  },
  screenButton: {
    bottom: 30,
  },
  centeredView: {
    flex: 1,
    opacity: 0.987,
    backgroundColor: Colors.dark,
  },
  modalView: {
    height: 645,
    padding: 30,
    alignItems: 'center',
  },
  modalText: {
    color: Colors.white,
    marginBottom: 20,
    fontSize: 22,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
  },
  btnText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },
  modalButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButton: {
    width: 330,
    height: 60,
  },
});

export default OnBoardScreen3;
