import React, {useState} from 'react';
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
import {useSelector, useDispatch, connect} from 'react-redux';
import * as Yup from 'yup';

import axios from 'axios';

import BackgroundVideo from '../Components/Common/BackgroundVideo';
import Screen from '../Components/Common/Screen';
import Colors from '../Constants/Colors';
import Routes from '../Navigation/routes';
import Images from '../Constants/Images';
import Loader from '../Components/Common/Loader';

import {deleteUser} from '../Store/api/auth';

import {ErrorMessage, Form, FormField, SubmitButton} from '../Components/Forms';

const {width, height} = Dimensions.get('screen');

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('*Email'),
  password: Yup.string().required().min(4).label('*Password'),
});

function DeleteAccountScreen(props) {
  const [error, setError] = useState();
  const {showLoader} = useSelector((state) => state.ui.login);
  const dispatch = useDispatch();

  const handleDelete = async (values) => {
    dispatch(
      deleteUser({
        body: values,
        onSuccess: (res) => {
          console.log('res=============', res.data);
        },
      }),
    );
  };

  return (
    <Screen>
      <BackgroundVideo />
      {showLoader ? (
        <Loader />
      ) : (
        <KeyboardAvoidingView
          behavior="padding"
          enabled={Platform.OS === 'ios'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
          <View style={styles.container}>
            <ScrollView
              style={{height: '100%'}}
              showsVerticalScrollIndicator={false}>
              <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <Animatable.Image
                    style={styles.backIcon}
                    delay={1500}
                    animation={'fadeIn'}
                    resizeMode="contain"
                    source={Images.BackArrow}
                  />
                </TouchableOpacity>
                <Animatable.Image
                  delay={1500}
                  animation={'zoomIn'}
                  style={styles.logo}
                  source={Images.Logo}
                  resizeMode="contain"
                />
              </View>
              {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
              <View style={styles.form}>
                <Animatable.View delay={1500} animation={'fadeIn'}>
                  <Form
                    initialValues={{email: '', password: ''}}
                    onSubmit={handleDelete}
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

                    <SubmitButton title="Delete" marginTop={50} />
                  </Form>
                </Animatable.View>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    // marginRight: 30,
    // bottom: 10,
    height: 35,
    width: 35,
  },
  logo: {
    width: '80%',
    height: 50,

    // marginBottom: 20,
  },
  form: {
    marginVertical: 20,
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

export default DeleteAccountScreen;
