import {createRef} from 'react';
import {Alert} from 'react-native';
import storage from '../Services/storage';
import RNRestart from 'react-native-restart';

export const snackbarRef = createRef();
export const handleErrors = (error) => {
  let message = 'Error';
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    message = error.message;
  } else if (error.response.status === 400) {
    message = error.response.data;
  } else if (error.response.status === 401) {
    storage.remove('xAuthToken');
    storage.remove('user');
    RNRestart.Restart();
  } else if (error.response.status === 403) {
    message = error.response.data;
  } else {
    message = 'Something went wrong.';
  }
  console.log('Error', error);
  const {current} = snackbarRef;
  if (current) {
    current.error(message);
  } else {
    Alert.alert('Error', message);
  }
};
