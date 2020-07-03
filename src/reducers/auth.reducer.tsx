import { SET_AUTH, CLEAR_AUTH } from '../actions/types';

const initialState = {
  status: 'unauthorized'
};

const authReducer = (state = initialState, action: any) => {
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
