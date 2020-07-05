import { Dispatch } from 'react';
import { toast } from 'react-toastify';

import { SET_COMMENTS } from './types';
import { get } from '../utils/api';
import { Comment } from '../models/Comment';
import { CommentsAction } from '../models/CommentsAction';

export const setComments = (comments: Array<Comment>) => {
  return { type: SET_COMMENTS, comments };
}

/**
 * Get comments from endpoint
 * @param dispatch set the comments to state
 */
export const getComments = async (dispatch: Dispatch<CommentsAction>): Promise<void> => {
  try {
    const comments: Array<Comment> = await get(`/comments`);
    dispatch({ type: SET_COMMENTS, comments });
  } catch (error) {
    toast.error('Something went wrong when trying to get comments');
  }
}
