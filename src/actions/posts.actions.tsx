import { Dispatch } from 'react';

import { SET_POSTS } from './types';
import { get } from '../utils/api';
import { Post } from '../models/Post';
import { PostsAction } from '../models/PostsAction';

export const setPosts = (posts: Array<Post>) => {
  return { type: SET_POSTS, posts };
}

export const getUserPosts = async (id: number, dispatch: Dispatch<PostsAction>) => {
  try {
    const posts: Array<Post> = await get(`/users/${id}/posts`);
    dispatch({ type: SET_POSTS, posts });
  } catch (error) {

  }
}
