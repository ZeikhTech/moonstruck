import {showSignupLoader} from '../ui/signupUI';
import {showLoginLoader} from '../ui/loginUI';

import storage from '../../Services/storage';

export const signup = () => {
  return ({dispatch, getState}) => {
    try {
      dispatch(showSignupLoader(true));
      //...api calling
    } catch (error) {}
  };
};
