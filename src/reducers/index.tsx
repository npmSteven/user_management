import { combineReducers } from 'redux';

import authReducer from './auth.reducer';

const allReducers = combineReducers({
  auth: authReducer
});

export default allReducers;
