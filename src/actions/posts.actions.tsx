import { Dispatch } from 'react';
import { toast } from 'react-toastify';

import { SET_POSTS } from './types';
import { get } from '../utils/api';
import { Post } from '../models/Post';
import { PostsAction } from '../models/PostsAction';

export const setPosts = (posts: Array<Post>) => {
  return { type: SET_POSTS, posts };
}

export const getPosts = async (dispatch: Dispatch<PostsAction>): Promise<void> => {
  try {
    const posts: Array<Post> = await get(`/posts`);
    dispatch({ type: SET_POSTS, posts });
  } catch (error) {
    toast.error('Something went wrong when trying to get posts');
  }
}
