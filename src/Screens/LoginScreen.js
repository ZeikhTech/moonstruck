import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Yup from 'yup';

import BackgroundVideo from '../Components/Common/BackgroundVideo';
import Screen from '../Components/Common/Screen';
import Colors from '../Constants/Colors';
import Routes from '../Navigation/routes';
import Images from '../Constants/Images';

import {ErrorMessage, Form, FormField, SubmitButton} from '../Components/Forms';

const {width, height} = Dimensions.get('screen');

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('*Email'),
  password: Yup.string().required().min(4).label('*Password'),
});

function LoginScreen(props) {
  const handleSubmit = () => {
    Keyboard.dismiss();
  };

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
        <View style={styles.container}>
          <BackgroundVideo />
          <ScrollView style={{height: '100%'}}>
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
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
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
  form: {
    marginTop: '10%',
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
