import { combineReducers } from 'redux';

import authReducer from './auth';
import registerReducer from './register';


const reducers = combineReducers({
  auth: authReducer,
  register: registerReducer
});

export default reducers;
