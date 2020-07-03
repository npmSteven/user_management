import { Auth } from '../models/Auth';
import { SET_AUTH, CLEAR_AUTH } from '../actions/types';
import { AuthAction } from '../models/AuthAction';

const initialState: Auth = {
  status: 'unauthorized'
};

const authReducer = (state: Auth = initialState, action: AuthAction) => {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    case CLEAR_AUTH:
      return initialState;
    default:
      return state;
  }
}

export default authReducer;
