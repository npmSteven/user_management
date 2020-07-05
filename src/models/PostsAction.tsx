import { Post } from './Post';

export interface PostsAction {
  type: string;
  posts: Array<Post>;
}
