import React from 'react'
import { useSelector } from 'react-redux';
import { Button, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { createSelector } from 'reselect';

import { Post } from '../../models/Post';

export function Posts(props: any) {
  const { id } = props.match.params;

  const selectUserPosts = createSelector(
    (state: any) => state.posts,
    (posts: Array<Post>) => posts.filter((post: Post) => post.userId == id),
  );

  const userPosts = useSelector(selectUserPosts);

  return (
    <Item.Group divided>
      <Button icon='arrow left' as={Link} to='/users' content='Back to Users' style={{ marginBottom: 10 }} />
      {userPosts.map((post: Post) =>
        <Item key={post.id}>
          <Item.Content verticalAlign='middle'>
            <Item.Header>{ post.title }</Item.Header>
            <Item.Description>{ post.body }</Item.Description>
            <Item.Extra>
              <Button floated='right' icon='comments' content='View comments' as={Link} to={`/comments/${post.id}`} />
            </Item.Extra>
          </Item.Content>
        </Item>
      )}
      {userPosts.length === 0 && <p>No posts</p>}
    </Item.Group>
  );
}
