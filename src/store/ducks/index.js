import { combineReducers } from 'redux';

import authReducer from './auth';
import registerReducer from './register';
import channelReducer from './channel';


const reducers = combineReducers({
  auth: authReducer,
  channel: channelReducer,
  register: registerReducer
});

export default reducers;
