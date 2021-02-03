import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  Alert,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Swiper from 'react-native-deck-swiper';
import * as Progress from 'react-native-progress';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import storage from '../Services/storage';
import {setFeed} from '../Store/entities/myFeed';

//Components
import Button from '../Components/Common/Button';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';
import Routes from '../Navigation/routes';
import Loader from '../Components/Common/Loader';
//Apis
import {loadFeed, numerology} from '../Store/api/myFeed';
import {likedByMe} from '../Store/api/profile';

const {width, height} = Dimensions.get('window');

function ProfileScreen({navigation}) {
  let swiperRef = useRef();

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  //Selectors
  const token = useSelector((state) => state.auth.state.token);
  // const showLoader = useSelector((state) => state.entities.myFeed.loading);
  const userData = useSelector((state) => state.auth.user.data[0]);
  const list = useSelector((state) => state.entities.myFeed.list);
  let per = useSelector((state) => state.entities.percentage.data);
  const calcLoader = useSelector((state) => state.entities.percentage.loading);

  console.log('users state list=========', list);

  console.log('state percentage=======', per);

  useEffect(() => {
    navigation.addListener('focus', () => {
      const search = list[index];
      const formData = new FormData();
      formData.append('first_path', userData.life_path);
      formData.append('second_path', search.life_path);
      formData.append('first_destiny', userData.destiny);
      formData.append('second_destiny', search.destiny);
      formData.append('first_personality', userData.personality);
      formData.append('second_personality', search.personality);
      formData.append('first_heart', userData.heart_desire);
      formData.append('second_heart', search.heart_desire);
      console.log(`percentage form data index: ${index}`, formData);
      dispatch(
        numerology({
          body: formData,
          onSuccess: (res) => {
            console.log('get percentage============>', res.data);
          },
        }),
      );
    });

    getFeed();
    getNumerology();
  }, [index]);

  const getFeed = async () => {
    const feedCache = await storage.get('allUsers');
    if (feedCache) {
      dispatch(setFeed(feedCache));
    }
  };

  const getNumerology = () => {
    const search = list[index];
    try {
      const formData = new FormData();
      formData.append('first_path', userData.life_path);
      formData.append('second_path', search.life_path);
      formData.append('first_destiny', userData.destiny);
      formData.append('second_destiny', search.destiny);
      formData.append('first_personality', userData.personality);
      formData.append('second_personality', search.personality);
      formData.append('first_heart', userData.heart_desire);
      formData.append('second_heart', search.heart_desire);

      console.log(`percentage form data index: ${index}`, formData);

      dispatch(
        numerology({
          body: formData,
          onSuccess: (res) => {
            console.log('get percentage============>', res.data);
          },
        }),
      );
    } catch (err) {
      console.log('per err', err.message);
    }
  };

  const handlePress = () => {
    setIsVisible(true);
  };

  const onSwipeAllCards = () => {
    // setSwipeAllCards(true);
    if (list.length === 0) {
      Alert.alert('msg', 'all cards swiped');
    }
  };

  const onSwiped = () => {
    setIndex((index + 1) % list.length);
  };

  const handleLikeUser = async () => {
    try {
      // const userData = await storage.get('user');
      // const token = await storage.get('xAuthToken');

      const userId = userData.id;
      const likedId = list[index].id;

      const data = new FormData();
      data.append('token', token);
      data.append('user_id', userId);
      data.append('liked_id', likedId);

      dispatch(likedByMe({body: data}));
    } catch (err) {
      console.log('errr ha', err);
    }
  };

  const Card = () => {
    return (
      <View key={list[index].id} style={styles.cardContainer}>
        <View style={styles.card}>
          <ImageBackground
            resizeMode="cover"
            source={{
              uri: `data:image/jpeg;base64,${JSON.stringify(list[index].dp)}`,
            }}
            style={styles.cardImage}>
            <View style={styles.shadowContainer}>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => swiperRef.current.swipeBack()}>
                  <Image source={Images.BackArrow} style={styles.backIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>
                  {list[index].full_name}, {list[index].age}
                  {/* {data[index].address} */}
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
        {/* {didMount ? (
          <Loader />
        ) : ( */}
        <View style={styles.detailContainer}>
          <View style={{height: hp('100%')}}>
            <View style={styles.details}>
              <View style={styles.textContainer}>
                <Text style={styles.detailText}>LIFEPATH: </Text>
                <Text style={styles.detailNumber}>{list[index].life_path}</Text>
              </View>

              <View style={styles.progressContainer}>
                <Text style={styles.percentage}>{`${per[0].percent}%`}</Text>
                <Progress.Bar
                  style={styles.progress}
                  progress={per[0].percent / 100}
                  borderColor={Colors.white}
                  color={Colors.secondary}
                />
              </View>
            </View>
            <View style={styles.details}>
              <View style={styles.textContainer}>
                <Text style={styles.detailText}>DESTINY: </Text>
                <Text style={styles.detailNumber}>
                  {list[index].master_number}
                </Text>
              </View>

              <View style={styles.progressContainer}>
                <Text style={styles.percentage}>{`${per[1].percent}%`}</Text>
                <Progress.Bar
                  style={styles.progress}
                  progress={per[1].percent / 100}
                  borderColor={Colors.white}
                  color={Colors.secondary}
                />
              </View>
            </View>
            <View style={styles.details}>
              <View style={styles.textContainer}>
                <Text style={styles.detailText}>PERSONALITY: </Text>
                <Text style={styles.detailNumber}>
                  {list[index].personality}
                </Text>
              </View>

              <View style={styles.progressContainer}>
                <Text style={styles.percentage}>{`${per[2].percent}%`}</Text>
                <Progress.Bar
                  style={styles.progress}
                  progress={per[2].percent / 100}
                  borderColor={Colors.white}
                  color={Colors.secondary}
                />
              </View>
            </View>
            <View style={styles.details}>
              <View style={styles.textContainer}>
                <Text style={styles.detailText}>HEART'S DESIRE: </Text>
                <Text style={styles.detailNumber}>
                  {list[index].heart_desire}
                </Text>
              </View>

              <View style={styles.progressContainer}>
                <Text style={styles.percentage}>{`${per[3].percent}%`}</Text>
                <Progress.Bar
                  style={styles.progress}
                  progress={per[3].percent / 100}
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
        {/* )} */}
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
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.MESSAGE_LIST)}>
              <Image
                style={styles.chatIcon}
                resizeMode="contain"
                source={Images.ChatIcon}
              />
            </TouchableOpacity>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={Images.Logo}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.EDIT_PROFILE)}>
              <Image
                resizeMode="contain"
                style={styles.settingsIcon}
                source={Images.SettingIcon}
              />
            </TouchableOpacity>
          </View>
          {calcLoader ? (
            <Loader />
          ) : list.length === 0 ? (
            <>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  You have liked all of the matches or currently unavailable
                </Text>
              </View>
            </>
          ) : (
            <View style={styles.swiperContainer}>
              <Swiper
                ref={swiperRef}
                cards={list}
                cardIndex={index}
                infinite={true}
                swipeBackCard={true}
                onSwiped={onSwiped}
                onSwipedAll={onSwipeAllCards}
                showSecondCard={false}
                onSwipedRight={handleLikeUser}
                keyExtractor={(item, index) => item.id + index}
                renderCard={(item, index) => {
                  return (
                    <View key={item.id} style={styles.cardContainer}>
                      <View style={styles.card}>
                        <ImageBackground
                          resizeMode="cover"
                          source={{
                            uri: `data:image/jpeg;base64,${JSON.stringify(
                              item.dp,
                            )}`,
                          }}
                          style={styles.cardImage}>
                          <View style={styles.shadowContainer}>
                            <View style={styles.iconContainer}>
                              <TouchableOpacity
                                onPress={() => swiperRef.current.swipeBack()}>
                                <Image
                                  source={Images.BackArrow}
                                  style={styles.backIcon}
                                />
                              </TouchableOpacity>
                            </View>
                            <View style={styles.labelContainer}>
                              <Text style={styles.label}>
                                {item.full_name}, {item.age}
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
                              <Text style={styles.detailNumber}>
                                {item.life_path}
                              </Text>
                            </View>

                            <View style={styles.progressContainer}>
                              <Text
                                style={
                                  styles.percentage
                                }>{`${per[0].percent}%`}</Text>
                              <Progress.Bar
                                style={styles.progress}
                                progress={per[0].percent / 100}
                                borderColor={Colors.white}
                                color={Colors.secondary}
                              />
                            </View>
                          </View>
                          <View style={styles.details}>
                            <View style={styles.textContainer}>
                              <Text style={styles.detailText}>DESTINY: </Text>
                              <Text style={styles.detailNumber}>
                                {item.master_number}
                              </Text>
                            </View>
                            <View style={styles.progressContainer}>
                              <Text
                                style={
                                  styles.percentage
                                }>{`${per[1].percent}%`}</Text>
                              <Progress.Bar
                                style={styles.progress}
                                progress={per[1].percent / 100}
                                borderColor={Colors.white}
                                color={Colors.secondary}
                              />
                            </View>
                          </View>
                          <View style={styles.details}>
                            <View style={styles.textContainer}>
                              <Text style={styles.detailText}>
                                PERSONALITY:{' '}
                              </Text>
                              <Text style={styles.detailNumber}>
                                {item.personality}
                              </Text>
                            </View>
                            <View style={styles.progressContainer}>
                              <Text
                                style={
                                  styles.percentage
                                }>{`${per[2].percent}%`}</Text>
                              <Progress.Bar
                                style={styles.progress}
                                progress={per[2].percent / 100}
                                borderColor={Colors.white}
                                color={Colors.secondary}
                              />
                            </View>
                          </View>
                          <View style={styles.details}>
                            <View style={styles.textContainer}>
                              <Text style={styles.detailText}>
                                HEART'S DESIRE:{' '}
                              </Text>
                              <Text style={styles.detailNumber}>
                                {item.heart_desire}
                              </Text>
                            </View>
                            <View style={styles.progressContainer}>
                              <Text
                                style={
                                  styles.percentage
                                }>{`${per[3].percent}%`}</Text>
                              <Progress.Bar
                                style={styles.progress}
                                progress={per[3].percent / 100}
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
                }}
                disableTopSwipe
                disableBottomSwipe
                animateCardOpacity
                animateOverlayLabelsOpacity
                swipeAnimationDuration={600}
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
              {isVisible && (
                <Modal
                  visible={isVisible}
                  animationType="fade"
                  transparent={true}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>
                        {list[index].blurb ? (
                          list[index].blurb
                        ) : (
                          <>
                            <Text>There is no blurb for this user.</Text>
                          </>
                        )}
                        {/* Hello, I am Carl, I live in Carlsbad, I love fishing,
                        playing volleyball, hiking, and I love numerology.{'\n'}
                        {'\n'} If you're here just to have fun, please swipe
                        left. I am looking for a serious long-term relationship
                        and I don't want to waste time.{'\n'}
                        {'\n'} If we are good match, please swipe right and
                        let's Chat ! */}
                      </Text>
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={() => setIsVisible(false)}>
                          <View style={{zIndex: 1, position: 'absolute'}}>
                            <Text style={styles.textStyle1}>
                              BACK TO PROFILE
                            </Text>
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
          )}
        </ImageBackground>
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
