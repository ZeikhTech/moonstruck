import http from '../../Services/http';
import storage from '../../Services/storage';

import {updateUser} from '../auth/user';
import {showProfileLoader} from '../ui/profileUI';

const url = '/users';

export const setSettings = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    const {auth} = getState();
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

    try {
      dispatch(showProfileLoader(true));
      const res = await http.post(url + '/settings', formData);

      const user = res.data.user;
      dispatch(updateUser(user));
      await storage.store('user', user);

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error=========', err);
    } finally {
      dispatch(showProfileLoader(false));
    }
  };
};

export const setBio = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    const {auth} = getState();
    const userId = auth.user.data[0].id;

    const formData = new FormData();
    formData.append('id', userId);
    formData.append('blurb', body.blurb);
    formData.append('push_notification', body.push_notification * 1);

    try {
      dispatch(showProfileLoader(true));
      const res = await http.post(url + '/settings', formData);

      const user = res.data.user;
      dispatch(updateUser(user));
      await storage.store('user', user);

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error=========', err);
    } finally {
      dispatch(showProfileLoader(false));
    }
  };
};

export const setProfilePicture = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    try {
      dispatch(showProfileLoader(true));

      const res = await http.post(url + '/userfiles', body);

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error=============', err);
    } finally {
      dispatch(showProfileLoader(false));
    }
  };
};
