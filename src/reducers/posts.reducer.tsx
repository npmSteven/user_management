import { SET_POSTS } from '../actions/types';
import { PostsAction } from '../models/PostsAction';
import { Post } from '../models/Post';

const initialState: Array<Post> = [];

export const postsReducer = (state: Array<Post> = initialState, action: PostsAction) => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;
    default:
      return state;
  }
}
