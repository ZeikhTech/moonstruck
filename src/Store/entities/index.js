import {combineReducers} from 'redux';

import profileReducer from './profile';
import chatThreadsReducer from './chatThreads';

export default combineReducers({
  profile: profileReducer,
  chatThreads: chatThreadsReducer,
});
