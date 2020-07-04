import { combineReducers } from 'redux';

import { authReducer } from './auth.reducer';
import { usersReducer } from './users.reducer';

// Combine all of the reducers that we create
const allReducers = combineReducers({
  auth: authReducer,
  users: usersReducer
});

export default allReducers;
