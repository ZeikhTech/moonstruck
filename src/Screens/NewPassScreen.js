import React from 'react';
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
import {newPassword} from '../Store/api/auth';

const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(6).label('*New Password'),
  passconf: Yup.string()
    .oneOf([Yup.ref('password'), null], '*Password must be match')
    .required()
    .min(6)
    .label('*Confirm New Password'),
});

function VerifyPassScreen(props) {
  const {email} = props.route.params;
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    console.log(values, email);

    const data = new FormData();
    data.append('email', email);
    data.append('password', values.password);
    data.append('passconf', values.passconf);

    dispatch(
      newPassword({
        body: data,
        onSuccess: (res) => {
          if (res.data.status_code === 200) {
            props.navigation.navigate(Routes.LOGIN);
          }
          return;
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
            initialValues={{password: '', passconf: ''}}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <View style={{marginHorizontal: 25}}>
              <Text style={styles.label}>New Password:</Text>
              <FormField
                name="password"
                placeholder="Enter password"
                secureTextEntry
              />
              <Text style={styles.label}>Confirm New Password:</Text>
              <FormField
                name="passconf"
                placeholder="Enter password"
                secureTextEntry
              />
            </View>
            <View style={styles.btnContainer}>
              <SubmitButton title="Confirm" />
            </View>
          </Form>
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
  label: {
    fontSize: 16,
    color: 'white',
  },
  btnContainer: {
    marginVertical: 20,
  },
});

export default VerifyPassScreen;
