import React from 'react';
import {View, Text, StyleSheet, Image, Keyboard} from 'react-native';
import * as Yup from 'yup';

import Screen from '../Components/Screen';
import {ErrorMessage, Form, FormField, SubmitButton} from '../Components/Forms';
import BackgroundVideo from '../Components/BackgroundVideo';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
  const handleSubmit = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <BackgroundVideo />

      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
        resizeMode="contain"
      />

      <Form
        initialValues={{email: '', password: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <ErrorMessage error="Invalid email and/or password." />
        <Text style={styles.label}>EMAIL :</Text>
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
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
        <SubmitButton title="Login" />
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: '90%',
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LoginScreen;
