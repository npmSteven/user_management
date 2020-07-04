import React, { useEffect, Dispatch } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Icon, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { Post } from '../../models/Post';
import { getUserPosts } from '../../actions/posts.actions';
import { PostsAction } from '../../models/PostsAction';
import { User } from '../../models/User';

export function Posts(props: any) {
  const { id } = props.match.params;
  const dispatch: Dispatch<PostsAction> = useDispatch();
  const posts: Array<Post> = useSelector((state: any) => state.posts);

  useEffect(() => {
    getUserPosts(id, dispatch);
  }, []);

  return (
    <Item.Group divided>
      <Button icon='arrow left' as={Link} to='/users' content='Back to Users' style={{ marginBottom: 10 }} />
      {posts.map((post: Post) =>
        <Item key={post.id}>
          <Item.Content verticalAlign='middle'>
            <Item.Header>{ post.title }</Item.Header>
            <Item.Description>{ post.body }</Item.Description>
            <Item.Extra>
              <Button floated='right' icon='comments' content='View comments' />
            </Item.Extra>
          </Item.Content>
        </Item>
      )}
    </Item.Group>
  );
}
