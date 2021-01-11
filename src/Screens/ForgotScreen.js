import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {useDispatch} from 'react-redux';
import * as Animatable from 'react-native-animatable';

import {Form, FormField, SubmitButton} from '../Components/Forms';

import Colors from '../Constants/Colors';
import Images from '../Constants/Images';
import Routes from '../Navigation/routes.js';

import {forgetPassword} from '../Store/api/auth';

function ForgotScreen(props) {
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    // dispatch(
    //   forgetPassword({
    //     body: values,
    //     onSuccess: (res) => {
    //       // console.log('response========================', res.data);
    //       // if (res.data.error) {
    //       //   setError(res.data.error);
    //       // } else {
    //       //   setError('');
    //       //   props.navigation.navigate(Routes.VERIFY_PASS);
    //       // }
    //     },
    //   }),
    // );
    // props.navigation.navigate(Routes.VERIFY_PASS, {email: values.email});
    props.navigation.navigate(Routes.VERIFY_PASS);
  };

  return (
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
            Just enter the email address you have use to registered with us and
            we will send you the reset password link.
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
            {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
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
    // </Screen>
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
    margin: 40,
    // marginTop: 20,
    // marginLeft: 10,
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
