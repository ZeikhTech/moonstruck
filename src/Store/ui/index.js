import {combineReducers} from 'redux';

import loginUIReducer from './loginUI';
import signupUIReducer from './signupUI';

export default combineReducers({
  login: loginUIReducer,
  signup: signupUIReducer,
});
