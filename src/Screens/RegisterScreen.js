import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Yup from 'yup';

import {
  ErrorMessage,
  Form,
  FormField,
  FormRadio,
  FormBirthday,
  SubmitButton,
} from '../Components/Forms';
import BackgroundVideo from '../Components/BackgroundVideo';
import Routes from '../Navigation/routes';
import Colors from '../Constants/Colors';

const validationSchema = Yup.object().shape({
  fname: Yup.string().required().label('*First Name'),
  lname: Yup.string().required().label('*Last Name'),
  email: Yup.string().required().email().label('*Email'),
  password: Yup.string().required().min(4).label('*Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], '*Password must be match')
    .required()
    .min(4)
    .label('*Confirm Password'),
  gender: Yup.string().required().label('*Gender'),
  birthday: Yup.string().required().label('*Birth date'),
});

const initialValues = {
  fname: '',
  lname: '',
  password: '',
  confirmPassword: '',
  email: '',
  gender: '',
  birthday: '',
};

function RegisterScreen(props) {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleSubmit = (values) => {
    console.log('values', values);
    setModalVisible(true);
  };

  const setModalVisible = (visible) => {
    setIsVisible(visible);
  };

  const confirmButton = () => {
    setModalVisible(false);
    props.navigation.navigate(Routes.SWIPER);
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
      <View style={styles.container}>
        <BackgroundVideo />
        <ScrollView style={{height: '100%'}}>
          <View style={styles.headerContainer}>
            <Animatable.View delay={3000} animation={'fadeIn'}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image
                  style={styles.backIcon}
                  source={require('../assets/Misc/back-arrow.png')}
                />
              </TouchableOpacity>
            </Animatable.View>
            <Animatable.Image
              delay={2000}
              animation={'zoomIn'}
              style={styles.logo}
              source={require('../assets/Misc/logo.png')}
              resizeMode="contain"
            />
          </View>
          <Animatable.View delay={2500} animation={'fadeIn'}>
            <Form
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}>
              <ErrorMessage error="dasdasdsa" />
              <Text style={styles.label}>FIRST NAME :</Text>
              <FormField
                autoCorrect={false}
                name="fname"
                placeholder="Enter your first Name..."
              />
              <Text style={styles.label}>LAST NAME :</Text>
              <FormField
                autoCorrect={false}
                name="lname"
                placeholder="Enter your last Name..."
              />
              <Text style={styles.label}>PASSWORD :</Text>
              <FormField
                name="password"
                placeholder="Enter your password..."
                textContentType="password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
              />
              <Text style={styles.label}>REPEAT PASSWORD :</Text>
              <FormField
                name="confirmPassword"
                placeholder="Confirm your password..."
                textContentType="password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
              />
              <Text style={styles.label}>EMAIL :</Text>
              <FormField
                name="email"
                placeholder="Enter your email..."
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
                <FormBirthday name="birthday" />
              </View>
              <SubmitButton title="Register" marginTop={25} />
            </Form>
          </Animatable.View>
        </ScrollView>
        {isVisible && (
          <Modal visible={isVisible} animationType="slide" transparent={true}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Are you sure? Moonstruck only works if you enter the correct
                  information.
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setModalVisible(!isVisible)}>
                    <View style={{zIndex: 1, position: 'absolute'}}>
                      <Text style={styles.textStyle1}>
                        No, let me edit the info
                      </Text>
                    </View>
                    <Image
                      style={styles.editButton}
                      resizeMode="contain"
                      source={require('../assets/Misc/edit-button.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={confirmButton}>
                    <View style={{zIndex: 1, position: 'absolute'}}>
                      <Text style={styles.textStyle}>Yes, I am sure</Text>
                    </View>
                    <Image
                      style={styles.yesButton}
                      resizeMode="contain"
                      source={require('../assets/Misc/button.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    position: 'relative',
  },
  headerContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    height: 40,
    width: 40,
    bottom: 10,
  },
  logo: {
    marginLeft: 30,
    width: '70%',
    height: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  genderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  dateContainer: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
  textStyle: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle1: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.black,
    textAlign: 'center',
  },
  modalText: {
    color: Colors.white,
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  editButton: {
    width: 140,
    height: 50,
  },
  yesButton: {
    width: 140,
    height: 50,
  },
});

export default RegisterScreen;