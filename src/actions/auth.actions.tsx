import { SET_AUTH } from './types';

export function setAuth(status: string) {
  return { type: SET_AUTH, status };
}
