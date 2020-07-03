import { ReducerAction } from 'react';


// TODO: Set ReducerAction type
const authReducer = (state: boolean = false, action: any) => {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return true;
    case 'AUTH_REGISTER':
      return true;
    case 'AUTH_LOGOUT':
      return false;
    case 'AUTH_ERROR':
      return false;
    default:
      return state;
  }
}

export default authReducer;
