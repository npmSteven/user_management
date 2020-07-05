import React from 'react'
import { useSelector } from 'react-redux';
import { Button, Comment, Header } from 'semantic-ui-react'
import { createSelector } from 'reselect';

import { Comment as CommentModal } from '../../models/Comment';
import { getGravatar } from '../../utils/lib';
import { useHistory } from 'react-router-dom';

export function Comments(props: any) {
  const { id } = props.match.params;

  const history = useHistory();

  const selectPostComments = createSelector(
    (state: any) => state.comments,
    (comments: Array<CommentModal>) => comments.filter((comment: CommentModal) => comment.postId == id),
  );

  const postComments = useSelector(selectPostComments);

  const handleBack = () => {
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
