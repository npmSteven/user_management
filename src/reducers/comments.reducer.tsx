import { SET_COMMENTS } from '../actions/types';
import { CommentsAction } from '../models/CommentsAction';

const initialState: Array<Comment> = [];

export const commentsReducer = (state: Array<Comment> = initialState, action: CommentsAction) => {
  switch (action.type) {
    case SET_COMMENTS:
      return action.comments;
    default:
      return state;
  }
}
