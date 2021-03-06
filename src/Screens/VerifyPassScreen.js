import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {Form, FormField, SubmitButton} from '../Components/Forms';

import Images from '../Constants/Images';
import Button from '../Components/Common/Button';
import Routes from '../Navigation/routes';
import {verifyPassCode} from '../Store/api/auth';

import store from '../Store/store';

const validationSchema = Yup.object().shape({
  code: Yup.number().required().min(6).label('*Verification Code'),
});

function VerifyPassScreen(props) {
  const [error, setError] = useState();
  const {email} = props.route.params;
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const data = new FormData();
    data.append('email', email);
    data.append('code', values.code);

    dispatch(
      verifyPassCode({
        body: data,
        onSuccess: (res) => {
          if (res.data.error) {
            setError(res.data.error);
            return;
          } else if (res.data === true) {
            setError('');
            props.navigation.navigate(Routes.NEW_PASS, {email: email});
          }
        },
      }),
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={Images.BackgroundImage}
        resizeMode="cover">
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={Images.Logo}
          />
        </View>
        <View style={styles.verifyContainer}>
          <Form
            initialValues={{code: ''}}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <View style={{marginHorizontal: 65}}>
              <FormField
                name="code"
                placeholder="Enter Verification code"
                keyboardType="numeric"
              />
              {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
            </View>
            <SubmitButton title="Verify" size={true} />
          </Form>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            We have sent you a verification code on email, please check your
            mail. If you have not received the email, please check your spam or
            junk email.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: '90%',
    height: 100,
  },
  verifyContainer: {
    padding: 10,
  },
  textContainer: {
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  btnContainer: {
    marginVertical: 20,
  },
});

export default VerifyPassScreen;
