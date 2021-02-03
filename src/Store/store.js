import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import authReducer from './auth';
import uiReducer from './ui';
import entitiesReducer from './entities';

const combineReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  entities: entitiesReducer,
});

const store = configureStore({
  reducer: combineReducer,
});

export default store;
