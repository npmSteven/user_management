import { Auth } from '../models/Auth';
import { SET_AUTH } from '../actions/types';
import { AuthAction } from '../models/AuthAction';

const initialState: Auth = {
  status: 'authorized'
};

export const authReducer = (state: Auth = initialState, action: AuthAction) => {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}
