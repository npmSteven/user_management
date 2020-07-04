import { Dispatch } from 'react';
import md5 from 'md5';

import { User } from '../models/User'
import { SET_USERS } from './types';
import { get } from '../utils/api';
import { UsersAction } from '../models/UsersAction';

export const setUsers = (users: Array<User>) => {
  return { type: SET_USERS, users };
}

export const getUsers = async (dispatch: Dispatch<UsersAction>) => {
  try {
    let users: Array<User> = await get('/users');
    users = users.map((user: User) => {
      user.avatar = getGravatar(user.email)
      return user;
    });
    dispatch({ type: SET_USERS, users });
  } catch (error) {

  }
}

const getGravatar = (email: string) => {
  const hash = md5(email);
  const img = `https://www.gravatar.com/avatar/${hash}`;
  return img;
};

