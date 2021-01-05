import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  Platform,
  ScrollView,
  Alert,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSelector, useDispatch, connect} from 'react-redux';
import Tooltip from 'react-native-walkthrough-tooltip';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import * as Yup from 'yup';

import store from '../Store/store';

import {
  ErrorMessage,
  Form,
  FormField,
  FormRadio,
  FormBirthday,
  SubmitButton,
} from '../Components/Forms';

import Colors from '../Constants/Colors';
import Images from '../Constants/Images';
import Loader from '../Components/Common/Loader';
import BackgroundVideo from '../Components/Common/BackgroundVideo';
import Screen from '../Components/Common/Screen';
import Button from '../Components/Common/Button';
import Routes from '../Navigation/routes';
import {signup} from '../Store/api/auth';

const {width, height} = Dimensions.get('window');

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required().label('*First Name'),
  last_name: Yup.string().required().label('*Last Name'),
  uName: Yup.string().required().label('*Username'),
  email: Yup.string().required().email().label('*Email'),
  password: Yup.string().required().min(6).label('*Password'),
  passconf: Yup.string()
    .oneOf([Yup.ref('password'), null], '*Password must be match')
    .required()
    .min(6)
    .label('*Confirm Password'),
  gender: Yup.string().required().label('*Gender'),
  birth_date: Yup.string().label('*Birth date'),
});

const initialValues = {
  first_name: 'test',
  middle_name: 'test',
  last_name: 'test',
  uName: 'test',
  password: '123456',
  passconf: '123456',
  email: 'test@gmail.com',
  gender: 'Male',
  birth_date: '',
};

import axios from 'axios';

function RegisterScreen(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState();
  const [toolTip, setToolTip] = useState(false);

  const {showLoader} = useSelector((state) => state.ui.signup);
  const dispatch = useDispatch();

  const confirmButton = async (values) => {
    dispatch(
      signup({
        body: values,
        onSuccess: (res) => {
          if (res.data.error) {
            setIsVisible(false);
            setError(res.data.error);
          } else {
            setError('');
            setIsVisible(false);
            props.navigation.navigate(Routes.VERIFY_EMAIL);
          }
        },
      }),
    );
  };

  return (
    <Screen>
      <BackgroundVideo />
      {showLoader ? (
        <Loader />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === 'ios'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
            <View style={styles.container}>
              <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <Animatable.Image
                    style={styles.backIcon}
                    delay={3000}
                    animation={'fadeIn'}
                    resizeMode="contain"
                    source={Images.BackArrow}
                  />
                </TouchableOpacity>
                <Animatable.Image
                  delay={2000}
                  animation={'zoomIn'}
                  style={styles.logo}
                  source={Images.Logo}
                  resizeMode="contain"
                />
              </View>
              <Animatable.View
                style={{flex: 1}}
                delay={2500}
                animation={'fadeIn'}>
                {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
                <Form
                  initialValues={initialValues}
                  onSubmit={confirmButton}
                  validationSchema={validationSchema}>
                  <ErrorMessage error="" />
                  <View style={{flexDirection: 'row', flex: 1}}>
                    <Text style={styles.label}>FIRST NAME :</Text>
                    <View style={styles.tooltip}>
                      <Tooltip
                        isVisible={toolTip}
                        content={
                          <Text style={{color: Colors.white, fontSize: 16}}>
                            Please enter your FULL NAME at birth, including
                            middle name.
                          </Text>
                        }
                        contentStyle={{backgroundColor: Colors.primary}}
                        placement="left"
                        onClose={() => setToolTip(false)}>
                        <TouchableWithoutFeedback
                          onPress={() => setToolTip(true)}>
                          <Icon
                            name="information-circle-outline"
                            size={30}
                            color={Colors.white}
                          />
                        </TouchableWithoutFeedback>
                      </Tooltip>
                    </View>
                  </View>
                  <FormField
                    autoCorrect={false}
                    name="first_name"
                    placeholder="Enter your first name"
                  />
                  <Text style={styles.label}>MIDDLE NAME :</Text>
                  <FormField
                    autoCorrect={false}
                    name="middle_name"
                    placeholder="Enter your middle name"
                  />
                  <Text style={styles.label}>LAST NAME :</Text>
                  <FormField
                    autoCorrect={false}
                    name="last_name"
                    placeholder="Enter your last name"
                  />
                  <Text style={styles.label}>USERNAME :</Text>
                  <FormField
                    autoCorrect={false}
                    name="uName"
                    placeholder="Enter username"
                  />
                  <Text style={styles.label}>PASSWORD :</Text>
                  <FormField
                    name="password"
                    placeholder="Enter your password"
                    textContentType="password"
                    secureTextEntry
                  />
                  <Text style={styles.label}>REPEAT PASSWORD :</Text>
                  <FormField
                    name="passconf"
                    placeholder="Confirm your password"
                    textContentType="password"
                    secureTextEntry
                  />
                  <Text style={styles.label}>EMAIL :</Text>
                  <FormField
                    name="email"
                    placeholder="Enter your email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />

                  <View style={styles.genderContainer}>
                    <Text style={styles.label}>GENDER :</Text>
                    <FormRadio name="gender" />
                  </View>
                  <View style={styles.dateContainer}>
                    <Text style={styles.label}>YOUR BIRTHDAY :</Text>
                    <FormBirthday name="birth_date" />
                  </View>
                  <View style={{marginVertical: 10}}>
                    <Button
                      title="Register"
                      onPress={() => setIsVisible(true)}
                    />
                  </View>

                  {isVisible && (
                    <Modal
                      visible={isVisible}
                      animationType="slide"
                      transparent={true}>
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>
                            Are you sure? Moonstruck only works if you enter the
                            correct information.
                          </Text>
                          <View style={styles.buttonContainer}>
                            <TouchableOpacity
                              style={styles.button}
                              onPress={() => setIsVisible(!isVisible)}>
                              <View style={{zIndex: 1, position: 'absolute'}}>
                                <Text style={styles.editText}>EDIT INFO</Text>
                              </View>
                              <Image
                                style={styles.editButton}
                                resizeMode="contain"
                                source={Images.EditButton}
                              />
                            </TouchableOpacity>
                            <SubmitButton title="YES, I AM SURE" size={true} />
                          </View>
                        </View>
                      </View>
                    </Modal>
                  )}
                </Form>
              </Animatable.View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      )}
    </Screen>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    marginRight: 30,
    bottom: 10,
    height: 35,
    width: 35,
  },
  logo: {
    width: width * 0.6,
    height: height * 0.09,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  tooltip: {
    top: -7,
    right: 0,
    left: 0,
    position: 'absolute',
    alignItems: 'flex-end',
  },
  genderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  dateContainer: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.dark,
    opacity: 0.9,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.primary,
    borderRadius: 25,
    padding: 5,
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
  confirmText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  editText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    textAlign: 'center',
  },
  modalText: {
    color: Colors.white,
    margin: 20,
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  editButton: {
    width: width * 0.45,
    height: 50,
  },
  yesButton: {
    width: width * 0.45,
    height: 50,
  },
});
