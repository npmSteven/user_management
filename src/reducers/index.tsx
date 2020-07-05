import { combineReducers } from 'redux';

import { authReducer } from './auth.reducer';
import { usersReducer } from './users.reducer';
import { postsReducer } from './posts.reducer';
import { commentsReducer } from './comments.reducer';

// Combine all of the reducers that we create
const allReducers = combineReducers({
  auth: authReducer,
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

export default allReducers;
