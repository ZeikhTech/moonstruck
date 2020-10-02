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
  Dimensions,
} from 'react-native';
import * as Yup from 'yup';

// import Screen from "../components/Screen";
import {ErrorMessage, Form, FormField, SubmitButton} from '../Components/Forms';
import BackgroundVideo from '../Components/BackgroundVideo';
import RadioButton from '../Components/Forms/RadioButton';
import AppCalendar from '../Components/Calendar';

const validationSchema = Yup.object().shape({
  fname: Yup.string().required().label('First Name'),
  lname: Yup.string().required().label('Last Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
  confirmPassword: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
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
          <Image
            style={styles.logo}
            source={require('../assets/logo.png')}
            resizeMode="contain"
          />
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
              placeholder="Enter your First Name"
            />
            <Text style={styles.label}>LAST NAME :</Text>
            <FormField
              autoCorrect={false}
              name="lname"
              placeholder="Enter your Last Name"
            />
            <Text style={styles.label}>PASSWORD :</Text>
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <Text style={styles.label}>REPEAT PASSWORD :</Text>
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              name="confirmPassword"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <Text style={styles.label}>EMAIL :</Text>
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              name="email"
              placeholder="Enter your Email"
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
            <SubmitButton title="Register" />
          </Form>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: '80%',
    height: 60,
    alignSelf: 'center',
    marginBottom: 5,
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
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default RegisterScreen;
