import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Colors from '../Constants/Colors';
import Screen from '../Components/Screen';
import {Form, FormField, SubmitButton} from '../Components/Forms';

function ForgotScreen(props) {
  const handleSubmit = () => {};

  return (
    <Screen>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          source={require('../assets/Backgrounds/BG.png')}>
          <Animatable.View delay={4000} animation={'fadeIn'}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image
                style={styles.backIcon}
                source={require('../assets/Misc/back-arrow.png')}
              />
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
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                placeholder="Enter your email address..."
                textContentType="emailAddress"
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
    marginLeft: 65,
    color: Colors.white,
  },
  form: {
    padding: 20,
  },
  submit: {},
});

export default ForgotScreen;
