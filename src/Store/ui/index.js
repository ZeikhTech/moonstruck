import {combineReducers} from 'redux';

import loginUIReducer from './loginUI';
import signupUIReducer from './signupUI';
import chatUIReducer from './chatUI';
import profileUIReducer from './profileUI';
import verifyEmailUI from './verifyEmailUI';

export default combineReducers({
  login: loginUIReducer,
  signup: signupUIReducer,
  chat: chatUIReducer,
  profile: profileUIReducer,
  verifyEmail: verifyEmailUI,
});
