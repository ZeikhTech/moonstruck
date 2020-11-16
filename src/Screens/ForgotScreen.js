import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Screen from '../Components/Common/Screen';
import {Form, FormField, SubmitButton} from '../Components/Forms';

import Colors from '../Constants/Colors';
import Images from '../Constants/Images';

function ForgotScreen(props) {
  const handleSubmit = () => {
    Keyboard.dismiss();
  };

  return (
    <Screen>
      <View style={styles.container}>
        <ImageBackground style={styles.bgImage} source={Images.BackgroundImage}>
          <Animatable.View delay={4000} animation={'fadeIn'}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image style={styles.backIcon} source={Images.BackArrow} />
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View delay={1500} animation={'zoomIn'}>
            <Text style={styles.title}>FORGOT PASSWORD</Text>
          </Animatable.View>
          <Animatable.View
            style={styles.textContainer}
            delay={2500}
            animation={'fadeIn'}>
            <Text style={styles.text}>
              Just enter the email address you have use to registered with us
              and we will send you the reset password link.
            </Text>
          </Animatable.View>
          <Form initialValues={{email: ''}} onSubmit={handleSubmit}>
            <Animatable.View
              style={styles.form}
              delay={3000}
              animation={'fadeIn'}>
              <FormField
                name="email"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                placeholder="Enter your email address..."
              />
            </Animatable.View>
            <Animatable.View
              style={styles.submit}
              delay={3000}
              animation={'fadeIn'}>
              <SubmitButton title="submit" marginTop={20} />
            </Animatable.View>
          </Form>
        </ImageBackground>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  backIcon: {
    marginTop: 20,
    marginLeft: 10,
    height: 40,
    width: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
  },
  textContainer: {
    width: '90%',
  },
  text: {
    marginTop: 10,
    marginLeft: 50,
    color: Colors.white,
  },
  form: {
    padding: 20,
  },
});

export default ForgotScreen;
