import { Dispatch } from 'react';

import { SET_COMMENTS } from './types';
import { get } from '../utils/api';
import { Comment } from '../models/Comment';
import { CommentsAction } from '../models/CommentsAction';

export const setComments = (comments: Array<Comment>) => {
  return { type: SET_COMMENTS, comments };
}

export const getComments = async (dispatch: Dispatch<CommentsAction>) => {
  try {
    const comments: Array<Comment> = await get(`/comments`);
    dispatch({ type: SET_COMMENTS, comments });
  } catch (error) {

  }
}
