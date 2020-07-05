import React from 'react'
import { useSelector } from 'react-redux';
import { Button, Comment, Header } from 'semantic-ui-react'
import { createSelector } from 'reselect';
import { useHistory, RouteComponentProps } from 'react-router-dom';

import { Comment as CommentModal } from '../../models/Comment';
import { getGravatar } from '../../utils/lib';
import { Params } from '../../models/Params';
import { State } from '../../models/State';

export function Comments(props: RouteComponentProps<Params>) {
  // Get userId from params
  const { id } = props.match.params;
  const userId: number = Number(id);

  const history = useHistory();

  // Create a selector to get comments by the post from state
  const selectPostComments = createSelector(
    (state: State) => state.comments,
    (comments: Array<CommentModal>) => comments.filter((comment: CommentModal) => comment.postId === userId),
  );

  // Use the created selector to get the comments from state
  const postComments = useSelector(selectPostComments);

  const handleBack = (): void => {
    history.goBack();
  }

  return (
    <Comment.Group>
      <Button icon='arrow left' onClick={handleBack} content='Back to Posts' style={{ marginBottom: 10 }} />

      <Header as='h3' dividing>
        Comments
      </Header>
      {
        postComments.map((comment: CommentModal) =>
          <Comment key={comment.id}>
            <Comment.Avatar src={getGravatar(comment.email)} />
            <Comment.Content>
              <Comment.Author>{ comment.email }</Comment.Author>
              <Comment.Text>{ comment.body }</Comment.Text>
            </Comment.Content>
          </Comment>
        )
      }
      {postComments.length === 0 && <p>No comments</p>}
    </Comment.Group>
  );
}
