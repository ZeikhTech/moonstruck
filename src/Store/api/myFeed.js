import http from '../../Services/http';
import storage from '../../Services/storage';

import {loadingFeed, setFeed, resetFeed} from '../entities/myFeed';
import {setPercentage, loadingPercentage} from '../entities/percentage';

const path = '/users';

export const loadFeed = ({onSuccess, onError}) => {
  return async (dispatch, getState) => {
    const {entities, auth} = getState();
    const loading = entities.myFeed.loading;
    if (loading) return;

    const token = auth.state.token;
    const user = auth.user.data[0];
    // const token = await storage.get('xAuthToken');
    // const usr = await storage.get('user');

    // const user = usr[0];

    try {
      dispatch(loadingFeed(true));

      const data = new FormData();
      const userId = user.id;
      data.append('token', token);
      data.append('id', userId);
      data.append('lower_age', user.lower_age);
      data.append('max_age', user.max_age);
      data.append('man', user.man);
      data.append('woman', user.woman);
      data.append('distance_range', user.distance_range);
      data.append('search_worldwide', user.search_worldwide);
      data.append('latitude', user.latitude);
      data.append('longitude', user.longitude);

      const res = await http.post(path, data);

      const list = res.data;
      await storage.store('allUsers', list);
      dispatch(setFeed(list));

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('error===========', err);
    } finally {
      dispatch(loadingFeed(false));
    }
  };
};

export const numerology = ({body, onSuccess, onError}) => {
  return async (dispatch, getState) => {
    const {entities} = getState();
    const loading = entities.percentage.loading;
    if (loading) return;

    try {
      dispatch(loadingPercentage(true));
      const res = await http.post(path + '/numbers', body);

      dispatch(setPercentage(res.data));

      if (onSuccess) onSuccess(res);
    } catch (err) {
      if (onError) onError(err);
      console.log('ERR======>', err);
    } finally {
      dispatch(loadingPercentage(false));
    }
  };
};
