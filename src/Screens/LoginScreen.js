import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  PermissionsAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Geolocation from '@react-native-community/geolocation';
import {useSelector, useDispatch} from 'react-redux';
import * as Yup from 'yup';

import BackgroundVideo from '../Components/Common/BackgroundVideo';
import Screen from '../Components/Common/Screen';
import Colors from '../Constants/Colors';
import Routes from '../Navigation/routes';
import Images from '../Constants/Images';
import Loader from '../Components/Common/Loader';

import {login} from '../Store/api/auth';

import {ErrorMessage, Form, FormField, SubmitButton} from '../Components/Forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('*Email'),
  password: Yup.string().required().min(4).label('*Password'),
});

function LoginScreen(props) {
  const [error, setError] = useState();
  const [currentLongitude, setCurrentLongitude] = useState();
  const [currentLatitude, setCurrentLatitude] = useState();

  const {showLoader} = useSelector((state) => state.ui.login);
  const dispatch = useDispatch();

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const handleSubmit = async (values) => {
    let formData = new FormData();
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('latitude', currentLatitude);
    formData.append('longitude', currentLongitude);

    dispatch(
      login({
        body: formData,
        onSuccess: (res) => {
          console.log('login success', res.data);
          if (res.data.error) {
            requestLocationPermission();
            setError(res.data.error);
          } else {
            setError('');
            props.navigation.navigate(Routes.ON_BOARDING);
          }
        },
      }),
    );
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      getOneTimeLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'Moonstruck needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          getOneTimeLocation();
        } else {
          Alert.alert('Warning', 'Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        console.log(error.message);
      },
      {
        enableHighAccuracy: false,
        // timeout: 30000,
        // maximumAge: 1000,
      },
    );
  };

  const subscribeLocationLocation = () => {
    Geolocation.watchPosition(
      (position) => {
        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        console.log(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
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

export default LoginScreen;
