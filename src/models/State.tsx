import { Auth } from './Auth';
import { User } from './User';
import { Post } from './Post';
import { Comment } from './Comment';

export interface State {
  auth: Auth;
  users: Array<User>;
  posts: Array<Post>;
  comments: Array<Comment>;
}
