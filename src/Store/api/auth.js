import {Alert} from 'react-native';
import RNRestart from 'react-native-restart';
import http from '../../Services/http';
import storage from '../../Services/storage';
import errorHandler from '../../helpers/errors';
//auth
import {setToken} from '../auth/authState';
import {updateUser, setUser, loadingUser, setEmail} from '../auth/user';
//ui
import {showLoginLoader, showResetLoader} from '../ui/loginUI';
import {showSignupLoader} from '../ui/signupUI';
import {showVerifyEmailLoader} from '../ui/verifyEmailUI';

const url = '/users';

export const signup = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    let formData = new FormData();
    formData.append('first_name', body.first_name);
    formData.append('middle_name', body.middle_name);
    formData.append('last_name', body.last_name);
    formData.append('uName', body.uName);
    formData.append('password', body.password);
    formData.append('passconf', body.passconf);
    formData.append('email', body.email);
    formData.append('gender', body.gender);
    formData.append('birth_date', body.birth_date);

    try {
      dispatch(showSignupLoader(true));
      const res = await http.post(url + '/store', formData);
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
    let formData = new FormData();
    formData.append('email', body.email);
    formData.append('password', body.password);

    try {
      dispatch(showLoginLoader(true));
      const res = await http.post(url + '/login', formData);
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
    const user = await storage.get('user');
    const email = user[0].email;
    // const {auth} = getState();
    // const email = auth.user.data[0].email;

    const formData = new FormData();
    formData.append('code', body.code);
    formData.append('email', email);

    try {
      dispatch(showVerifyEmailLoader(true));

      const res = await http.post('/verifyemail/verified', formData);

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

      const res = await http.post('/forgetpassword', data);

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

      const res = await http.post('/forgetpassword/resetpassword', body);

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
      const res = await http.post('/forgetpassword/reset', body);

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
      const token = store.auth.state.token;
      const res = await http.post(url + '/logout', {}, {token});

      if (onSuccess) onSuccess(res);

      await storage.remove('xAuthToken');
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

      const res = await http.post(url + 'delete', data);

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error===========', err);
    } finally {
      dispatch(showLoginLoader(false));
    }
  };
};
