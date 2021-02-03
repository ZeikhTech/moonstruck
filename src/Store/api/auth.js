import {Alert} from 'react-native';
import RNRestart from 'react-native-restart';
import http from '../../Services/http';
import storage from '../../Services/storage';
import errorHandler from '../../helpers/errors';
//auth
import {setToken} from '../auth/authState';
import {updateUser, editUser, loadingUser} from '../auth/user';
//ui
import {showLoginLoader, showResetLoader} from '../ui/loginUI';
import {showSignupLoader} from '../ui/signupUI';
import {showVerifyEmailLoader} from '../ui/verifyEmailUI';

import {setProfile} from '../entities/profile';

const url = '/users';

export const signup = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    try {
      dispatch(showSignupLoader(true));
      const res = await http.post(url + '/store', body);
      const {data} = res;
      dispatch(updateUser(data.user));
      await storage.store('user', data.user);

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error==========', err);
    } finally {
      dispatch(showSignupLoader(false));
    }
  };
};

export const login = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoginLoader(true));
      const res = await http.post(url + '/login', body);
      const {data} = res;
      const {token} = data;
      dispatch(updateUser(data.user));
      dispatch(setToken(token));
      await storage.store('xAuthToken', token);
      await storage.store('user', data.user);

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error===========', err);
    } finally {
      dispatch(showLoginLoader(false));
    }
  };
};

export const verifyEmail = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    try {
      dispatch(showVerifyEmailLoader(true));

      const res = await http.post('/VerifyEmail/verified', body);

      const user = res.data.user;
      dispatch(updateUser(user));
      await storage.store('user', user);

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error===========', err);
    } finally {
      showVerifyEmailLoader(false);
    }
  };
};

export const forgetPassword = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    const data = new FormData();
    data.append('email', body.email);

    try {
      dispatch(showLoginLoader(true));

      const res = await http.post('/ForgetPassword', data);

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error===========', err);
    } finally {
      dispatch(showLoginLoader(false));
    }
  };
};

export const verifyPassCode = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    try {
      dispatch(showVerifyEmailLoader(true));

      const res = await http.post('/ForgetPassword/resetPassword', body);

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error=============', err);
    } finally {
      dispatch(showVerifyEmailLoader(false));
    }
  };
};

export const newPassword = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    try {
      dispatch(showVerifyEmailLoader(true));
      const res = await http.post('/ForgetPassword/reset', body);

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error==============', err);
    } finally {
      dispatch(showVerifyEmailLoader(false));
    }
  };
};

export const logout = ({onSuccess, onError}) => {
  return async (dispatch, getState) => {
    try {
      const store = getState();
      // const token = store.auth.state.token;
      const token = await storage.get('xAuthToken');
      const data = new FormData();
      data.append('token', token);
      const res = await http.post(url + '/logout', data);

      if (onSuccess) onSuccess(res);

      await storage.remove('xAuthToken');
      // await storage.remove('userAsset');
      await storage.remove('user');
      RNRestart.Restart();
    } catch (err) {
      if (onError) onError(err);
      console.log('error===============', err);
    }
  };
};

export const deleteUser = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoginLoader(true));
      const data = new FormData();
      data.append('email', body.email);
      data.append('password', body.password);

      const res = await http.post(url + '/delete', data);

      await storage.remove('user');
      await storage.remove('xAuthToken');
      await storage.store('allUsers');

      RNRestart.Restart();

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error===========', err);
    } finally {
      dispatch(showLoginLoader(false));
    }
  };
};

export const updateMe = ({onSuccess, onError}) => {
  return async (dispatch, getState) => {
    try {
      const token = await storage.get('xAuthToken');
      const user = await storage.get('user');
      const userId = user[0].id;

      const formData = new FormData();
      formData.append('token', token);
      formData.append('id', userId);

      dispatch(loadingUser(true));
      const res = await http.post(url + '/show', formData);

      const data = res.data.user;

      await storage.store('user', data);

      dispatch(updateUser(data));

      //onSuccess event firing
      if (onSuccess) onSuccess(res);
    } catch (err) {
      //onError event firing
      if (onError) onError(err);
      console.log('ERRR=======', err);
    } finally {
      //hiding loader from ui
      dispatch(loadingUser(false));
    }
  };
};
