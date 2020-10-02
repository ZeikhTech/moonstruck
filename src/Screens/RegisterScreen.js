import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import * as Yup from 'yup';

// import Screen from "../components/Screen";
import {ErrorMessage, Form, FormField, SubmitButton} from '../Components/Forms';
import BackgroundVideo from '../Components/BackgroundVideo';
import RadioButton from '../Components/Forms/RadioButton';
import AppCalendar from '../Components/Calendar';

const validationSchema = Yup.object().shape({
  fname: Yup.string().required().label('*First Name'),
  lname: Yup.string().required().label('*Last Name'),
  email: Yup.string().required().email().label('*Email'),
  password: Yup.string().required().min(4).label('*Password'),
  confirmPassword: Yup.string().required().min(4).label('*Confirm Password'),
});

function RegisterScreen(props) {
  const handleSubmit = () => {
    Keyboard.dismiss();
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
              <Icon
                style={styles.backIcon}
                onPress={() => props.navigation.goBack()}
                name="arrow-left"
                size={34}
                color="white"
              />
            </Animatable.View>
            <Animatable.Image
              delay={2000}
              animation={'zoomIn'}
              style={styles.logo}
              source={require('../assets/logo.png')}
              resizeMode="contain"
            />
          </View>
          <Animatable.View delay={2500} animation={'fadeIn'}>
            <Form
              initialValues={{
                fname: '',
                lname: '',
                password: '',
                confirmPassword: '',
                email: '',
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}>
              <ErrorMessage error="" />
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
                autoCapitalize="none"
                autoCorrect={false}
                name="password"
                placeholder="Enter your password..."
                secureTextEntry
                textContentType="password"
              />
              <Text style={styles.label}>REPEAT PASSWORD :</Text>
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                name="confirmPassword"
                placeholder="Confirm your password..."
                secureTextEntry
                textContentType="password"
              />
              <Text style={styles.label}>EMAIL :</Text>
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                placeholder="Enter your email..."
                textContentType="emailAddress"
              />
              <View style={styles.genderContainer}>
                <Text style={styles.label}>GENDER :</Text>
                <RadioButton />
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.label}>YOUR BIRTHDAY :</Text>
                <AppCalendar />
              </View>
              <SubmitButton title="Register" marginTop={25} />
            </Form>
          </Animatable.View>
        </ScrollView>
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
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  dateContainer: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default RegisterScreen;
