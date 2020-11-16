import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import authReducer from './auth';
import uiReducer from './ui';

const combineReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
});

const store = configureStore({
  reducer: combineReducer,
});

export default store;
