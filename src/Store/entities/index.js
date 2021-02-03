import {combineReducers} from 'redux';

import profileReducer from './profile';
import chatThreadsReducer from './chatThreads';
import messagesReducer from './messages.js';
import myFeedReducer from './myFeed';
import percentageReducer from './percentage';

export default combineReducers({
  profile: profileReducer,
  chatThreads: chatThreadsReducer,
  messages: messagesReducer,
  myFeed: myFeedReducer,
  percentage: percentageReducer,
});
