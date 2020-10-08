import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Yup from 'yup';

import {ErrorMessage, Form, FormField, SubmitButton} from '../Components/Forms';
import BackgroundVideo from '../Components/BackgroundVideo';
import Colors from '../Constants/Colors';
import Routes from '../Navigation/routes';

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
            <TouchableOpacity
              onPress={() => props.navigation.navigate(Routes.FORGOT)}>
              <Text style={styles.forgot}>Forgoten your password?</Text>
            </TouchableOpacity>
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
    height: 40,
    width: 40,
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
  forgot: {
    marginTop: 5,
    marginRight: 10,
    fontSize: 18,
    color: Colors.white,
    textAlign: 'right',
  },
});

export default LoginScreen;
