import { Dispatch } from 'react';
import { toast } from 'react-toastify';

import { User } from '../models/User'
import { SET_USERS } from './types';
import { get } from '../utils/api';
import { UsersAction } from '../models/UsersAction';
import { getGravatar } from '../utils/lib';

export const setUsers = (users: Array<User>) => {
  return { type: SET_USERS, users };
}

export const getUsers = async (dispatch: Dispatch<UsersAction>): Promise<void> => {
  try {
    let users: Array<User> = await get('/users');
    users = users.map((user: User) => {
      user.avatar = getGravatar(user.email)
      return user;
    });
    dispatch({ type: SET_USERS, users });
  } catch (error) {
    toast.error('Something went wrong when trying to get users');
  }
}

