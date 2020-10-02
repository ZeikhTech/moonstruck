import React from 'react';
import {View, Text, StyleSheet, Image, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import * as Yup from 'yup';

import Screen from '../Components/Screen';
import {ErrorMessage, Form, FormField, SubmitButton} from '../Components/Forms';
import BackgroundVideo from '../Components/BackgroundVideo';
import Colors from '../Constants/Colors';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('*Email'),
  password: Yup.string().required().min(4).label('*Password'),
});

function LoginScreen(props) {
  const handleSubmit = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <BackgroundVideo />
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
      <View style={styles.form}>
        <Animatable.View delay={2500} animation={'fadeIn'}>
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
              placeholder="Enter your email..."
              textContentType="emailAddress"
            />
            <Text>{'\n'}</Text>
            <Text style={styles.label}>PASSWORD :</Text>
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              placeholder="Enter your password..."
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="Login" marginTop={50} />
          </Form>
        </Animatable.View>
      </View>
    </View>
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
    marginBottom: 20,
  },
  form: {
    marginTop: 60,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

export default LoginScreen;
