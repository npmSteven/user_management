import { User } from "./User";

export interface UsersAction {
  type: string,
  users: Array<User>,
};
