import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import * as Progress from 'react-native-progress';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Screen from '../Components/Common/Screen';
import Button from '../Components/Common/Button';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';
import Routes from '../Navigation/routes';
import data from '../Services/data';

const {width, height} = Dimensions.get('window');

function ProfileScreen({navigation}) {
  const swiperRef = useRef();

  const [index, setIndex] = useState(0);
  const [swipeAllCards, setSwipeAllCards] = useState(false);
  const [progress, setProgress] = useState(0);
  const [intermediate, setIntermediate] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handlePress = () => {
    setIsVisible(true);
  };

  const onSwipeAllCards = () => {
    setSwipeAllCards(true);
  };

  const onSwiped = () => {
    setIndex((index + 1) % data.length);
  };

  const Card = () => {
    return (
      <View key={data[index].id} index={index} style={styles.cardContainer}>
        <View style={styles.card}>
          <ImageBackground
            resizeMode="cover"
            source={data[index].image}
            style={styles.cardImage}>
            <View style={styles.shadowContainer}>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => swiperRef.current.swipeBack()}>
                  <Image source={Images.BackArrow} style={styles.backIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>
                  {data[index].name}, {data[index].age}, from{' '}
                  {data[index].address}
                </Text>
              </View>
              <Image
                resizeMode="cover"
                source={Images.Shadow}
                style={styles.cardShadow}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.detailContainer}>
          <View style={{height: hp('100%')}}>
            <View style={styles.details}>
              <View style={styles.textContainer}>
                <Text style={styles.detailText}>LIFEPATH: </Text>
                <Text style={styles.detailNumber}>{data[index].lifepath}</Text>
              </View>
              <View style={styles.progressContainer}>
                <Text style={styles.percentage}>100%</Text>
                <Progress.Bar
                  style={styles.progress}
                  progress={1}
                  borderColor={Colors.white}
                  color={Colors.secondary}
                />
              </View>
            </View>
            <View style={styles.details}>
              <View style={styles.textContainer}>
                <Text style={styles.detailText}>DESTINY: </Text>
                <Text style={styles.detailNumber}>{data[index].destiny}</Text>
              </View>
              <View style={styles.progressContainer}>
                <Text style={styles.percentage}>30%</Text>
                <Progress.Bar
                  style={styles.progress}
                  progress={0.5}
                  borderColor={Colors.white}
                  color={Colors.secondary}
                />
              </View>
            </View>
            <View style={styles.details}>
              <View style={styles.textContainer}>
                <Text style={styles.detailText}>PERSONALITY: </Text>
                <Text style={styles.detailNumber}>
                  {data[index].personality}
                </Text>
              </View>
              <View style={styles.progressContainer}>
                <Text style={styles.percentage}>20%</Text>
                <Progress.Bar
                  style={styles.progress}
                  progress={0.3}
                  borderColor={Colors.white}
                  color={Colors.secondary}
                />
              </View>
            </View>
            <View style={styles.details}>
              <View style={styles.textContainer}>
                <Text style={styles.detailText}>HEART'S DESIRE: </Text>
                <Text style={styles.detailNumber}>{data[index].desire}</Text>
              </View>
              <View style={styles.progressContainer}>
                <Text style={styles.percentage}>80%</Text>
                <Progress.Bar
                  style={styles.progress}
                  progress={0.8}
                  borderColor={Colors.white}
                  color={Colors.secondary}
                />
              </View>
            </View>
            <View style={styles.btnCover}>
              <Button
                title="more about me"
                onPress={handlePress}
                hp={hp('8%')}
                wp={wp('70%')}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          resizeMode="cover"
          source={Images.BluredBackground}>
          <View style={styles.headerContainer}>
            <Image
              style={styles.chatIcon}
              resizeMode="contain"
              source={Images.ChatIcon}
            />
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={Images.Logo}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.BIO_SETTING)}>
              <Image
                resizeMode="contain"
                style={styles.settingsIcon}
                source={Images.SettingIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.swiperContainer}>
            <Swiper
              ref={swiperRef}
              cards={data}
              cardIndex={index}
              infinite={true}
              swipeBackCard={true}
              onSwiped={onSwiped}
              onSwipedAll={onSwipeAllCards}
              showSecondCard={false}
              onSwipedRight={(userInfo) => console.log(userInfo)}
              renderCard={Card}
              disableTopSwipe
              disableBottomSwipe
              animateCardOpacity
              animateOverlayLabelsOpacity
              backgroundColor="transparent"
              overlayLabels={{
                left: {
                  title: 'NOPE',
                  style: {
                    label: {
                      backgroundColor: Colors.secondary,
                      borderColor: Colors.secondary,
                      color: Colors.white,
                      borderWidth: 1,
                      fontSize: 24,
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      bottom: 40,
                      marginLeft: -10,
                    },
                  },
                },
                right: {
                  title: 'LIKE',
                  style: {
                    label: {
                      backgroundColor: Colors.primary,
                      borderColor: Colors.primary,
                      color: Colors.white,
                      borderWidth: 1,
                      fontSize: 24,
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      bottom: 40,
                      marginLeft: 10,
                    },
                  },
                },
              }}
            />
          </View>
        </ImageBackground>
        {isVisible && (
          <Modal visible={isVisible} animationType="fade" transparent={true}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Hello, I am Carl, I live in Carlsbad, I love fishing, playing
                  volleyball, hiking, and I love numerology.{'\n'}
                  {'\n'} If you're here just to have fun, please swipe left. I
                  am looking for a serious long-term relationship and I don't
                  want to waste time.{'\n'}
                  {'\n'} If we are good match, please swipe right and let's Chat
                  !
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setIsVisible(false)}>
                    <View style={{zIndex: 1, position: 'absolute'}}>
                      <Text style={styles.textStyle1}>BACK TO PROFILE</Text>
                    </View>
                    <Image
                      style={styles.editButton}
                      resizeMode="contain"
                      source={Images.Button}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginVertical: 10,
  },
  chatIcon: {
    width: width * 0.08,
    height: height * 0.07,
  },
  logo: {
    height: 60,
    width: width * 0.5,
  },
  settingsIcon: {
    width: width * 0.08,
    height: height * 0.07,
  },
  iconContainer: {
    zIndex: 1,
    bottom: 50,
    left: 30,
    position: 'absolute',
  },
  backIcon: {
    height: 35,
    width: 35,
  },
  swiperContainer: {
    flex: 1,
    // position: 'absolute',
  },
  cardImage: {
    width: wp('90%'),
    height: hp('50%'),
    zIndex: 1,
  },
  shadowContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cardShadow: {
    width: '100%',
    height: 88.4,
    opacity: 0.8,
  },
  labelContainer: {
    zIndex: 1,
    position: 'absolute',
    bottom: 10,
  },
  label: {
    fontSize: 20,
    color: Colors.white,
  },
  cardContainer: {
    // flex: 1,
    position: 'absolute',
    top: -60,
    // left: 0,
    // right: 0,
    // bottom: 0,
  },
  card: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowRadius: 25,
    shadowColor: Colors.dark,
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 0},
  },
  detailContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingTop: 5,
    width: wp('90%'),
    height: hp('33%'),
    borderWidth: 2,
    borderRadius: 15,
    borderColor: Colors.primary,
  },
  detailText: {
    fontSize: 14,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.white,
  },
  detailNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  textContainer: {
    flexDirection: 'row',
  },
  details: {
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  progressContainer: {
    position: 'absolute',
    right: 0,
  },
  progress: {
    height: 8,
    width: 120,
  },
  percentage: {
    fontSize: 12,
    color: Colors.white,
  },
  btnCover: {},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: hp('85%'),
    top: 20,
    opacity: 0.9,
    marginHorizontal: 10,
    backgroundColor: Colors.dark,
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  textStyle: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
  },
  modalText: {
    color: Colors.white,
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: -10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButton: {
    width: width * 0.8,
    height: 100,
  },
});

export default ProfileScreen;
