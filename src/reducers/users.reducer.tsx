import { SET_USERS, CLEAR_USERS } from '../actions/types';
import { User } from '../models/User';
import { UsersAction } from '../models/UsersAction';

const initialState: Array<User> = [];

export const usersReducer = (state: Array<User> = initialState, action: UsersAction) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    case CLEAR_USERS:
      return initialState;
    default:
      return state;
  }
}
