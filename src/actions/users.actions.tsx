import { Dispatch } from 'react';

import { User } from '../models/User'
import { SET_USERS } from './types';
import { get } from '../utils/api';
import { UsersAction } from '../models/UsersAction';
import { getGravatar } from '../utils/lib';

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

