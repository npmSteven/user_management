import { combineReducers } from 'redux';

import authReducer from './auth.reducer';

// Combine all of the reducers that we create
const allReducers = combineReducers({
  auth: authReducer
});

export default allReducers;
