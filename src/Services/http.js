import axios from 'axios';
import {apiPath} from '../config';

const post = (
  url = '',
  body = {},
  headers = {},
  params = {},
  otherConfigs = {},
) => {
  return axios.post(apiPath + url, body, {
    headers,
    params,
    ...otherConfigs,
  });
};

export default {
  post,
};
