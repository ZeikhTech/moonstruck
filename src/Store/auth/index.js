import {combineReducers} from 'redux';
import xAuthTokenReducer from './authState';
import userReducer from './user';

export default combineReducers({
  state: xAuthTokenReducer,
  user: userReducer,
});
