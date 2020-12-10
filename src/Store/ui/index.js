import {combineReducers} from 'redux';

import loginUIReducer from './loginUI';
import signupUIReducer from './signupUI';
import chatUIReducer from './chatUI';

export default combineReducers({
  login: loginUIReducer,
  signup: signupUIReducer,
  chat: chatUIReducer,
});
