import { Auth } from './Auth';

export interface AuthAction {
  type: string,
  auth: Auth,
};
