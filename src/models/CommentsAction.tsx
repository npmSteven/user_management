import { Comment } from "./Comment";

export interface CommentsAction {
  type: string,
  comments: Array<Comment>,
};
