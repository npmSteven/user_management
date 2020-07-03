import { SET_AUTH } from './types';

export function setAuth(status) {
  return { type: SET_AUTH, status };
}
