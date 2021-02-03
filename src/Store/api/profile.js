import http from '../../Services/http';
import storage from '../../Services/storage';

import {updateUser, loadingUser} from '../auth/user';

const url = '/users';

export const setSettings = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    const {auth} = getState();

    const token = auth.state.token;
    const userId = auth.user.data[0].id;

    const formData = new FormData();
    formData.append('is_man', body.is_man * 1);
    formData.append('is_woman', body.is_woman * 1);
    formData.append('zip_code', body.zip_code);
    formData.append('lower_age', body.age[0]);
    formData.append('max_age', body.age[1]);
    formData.append('distance_range', body.distance_range);
    formData.append('search_worldwide', body.search_worldwide * 1);
    formData.append('man', body.man * 1);
    formData.append('woman', body.woman * 1);
    formData.append('id', userId);
    formData.append('token', token);

    try {
      dispatch(loadingUser(true));
      const res = await http.post(url + '/settings', formData);

      const user = res.data.user;
      await storage.store('user', user);
      dispatch(updateUser(user));

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error=========', err);
    } finally {
      dispatch(loadingUser(false));
    }
  };
};

export const setBio = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    const {auth} = getState();

    const token = auth.state.token;
    const user = await storage.get('user');
    const userId = user[0].id;

    const formData = new FormData();
    formData.append('token', token);
    formData.append('id', userId);
    formData.append('blurb', body.blurb);
    formData.append('push_notification', body.push_notification * 1);

    try {
      dispatch(loadingUser(true));
      const res = await http.post(url + '/settings', formData);

      const user = res.data.user;
      await storage.store('user', user);
      dispatch(updateUser(user));

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error=========', err);
    } finally {
      dispatch(loadingUser(false));
    }
  };
};

export const setProfilePicture = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loadingUser(true));

      const res = await http.post(url + '/userFiles', body);

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error=============', err);
    } finally {
      dispatch(loadingUser(false));
    }
  };
};

export const likedByMe = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    try {
      const res = await http.post('/likes', body);

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error==========', err);
    }
  };
};

export const updateProfile = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loadingUser(true));

      const res = await http.post(url + '/edit', body);

      const userData = res.data.user;
      await storage.store('user', userData);
      dispatch(updateUser(userData));

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('ERR=====>', err);
    } finally {
      dispatch(loadingUser(false));
    }
  };
};

export const updateAssets = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loadingUser(true));

      const res = await http.post('/assets/edit', body);

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('ERR======>', err);
    } finally {
      dispatch(loadingUser(false));
    }
  };
};
