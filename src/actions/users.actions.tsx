import { Dispatch } from 'react';
import { toast } from 'react-toastify';

import { User } from '../models/User'
import { SET_USERS } from './types';
import { get, deleteApi, post, update } from '../utils/api';
import { UsersAction } from '../models/UsersAction';
import { getGravatar } from '../utils/lib';

export const setUsers = (users: Array<User>) => {
  return { type: SET_USERS, users };
};

export const getUsers = async (dispatch: Dispatch<UsersAction>): Promise<void> => {
  try {
    const users: Array<User> = await get('/users');
    const usesWithAvatar: Array<User> = users.map((user: User) => {
      user.avatar = getGravatar(user.email)
      return user;
    });
    dispatch({ type: SET_USERS, users: usesWithAvatar });
  } catch (error) {
    toast.error('Something went wrong when trying to get users');
  }
};

export const deleteUser = async (id: number | undefined, users: Array<User>, dispatch: Dispatch<UsersAction>): Promise<void> => {
  try {
    await deleteApi(id, 'users');
    const newUsers: Array<User> = users.filter((user: User) => user.id !== id);
    dispatch({ type: SET_USERS, users: newUsers });
  } catch (error) {
    toast.error('Something went wrong when trying to delete the user');
  }
};

export const addUser = async (user: User, users: Array<User>, dispatch: Dispatch<UsersAction>): Promise<void> => {
  try {
    const newUser: User = await post('/users', user);
    newUser.avatar = getGravatar(newUser.email);
    users.unshift(newUser);
    const newUsers: Array<User> = users;
    dispatch({ type: SET_USERS, users: [...newUsers] });
  } catch (error) {
    toast.error('Something went wrong when trying to add a user');
  }
};

export const updateUser = async (user: User, users: Array<User>, dispatch: Dispatch<UsersAction>): Promise<void> => {
  try {
    const updatedUser: User = await update(`/users/${user.id}`, user);
    const foundUser = users.find((u: User) => u.id === user.id);
    Object.assign(foundUser, updatedUser);
    dispatch({ type: SET_USERS, users: [...users] });
  } catch (error) {
    toast.error('Something went wrong when trying to update a user');
  }
};
