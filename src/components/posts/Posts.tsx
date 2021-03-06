import React, { Dispatch } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Item, Header } from 'semantic-ui-react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { createSelector } from 'reselect';

import { Post } from '../../models/Post';
import { State } from '../../models/State';
import { Params } from '../../models/Params';
import { AddPost } from './AddPost';
import { deletePost } from '../../actions/posts.actions';
import { PostsAction } from '../../models/PostsAction';
import { toast } from 'react-toastify';
import { EditPost } from './EditPost';

export function Posts(props: RouteComponentProps<Params>) {
  // Get userId from params
  const { id } = props.match.params;
  const userId: number = Number(id);

  const postDispatch: Dispatch<PostsAction> = useDispatch();

  // Create a selector to get posts by the user from state
  const selectUserPosts = createSelector(
    (state: State) => state.posts,
    (posts: Array<Post>) => posts.filter((post: Post) => post.userId === userId),
  );
  
  // Use the created selector to get the posts from state
  const userPosts = useSelector(selectUserPosts);

  const handlePostDelete = async (id: number | undefined): Promise<void> => {
    try {
      await deletePost(id, userPosts, postDispatch);
    } catch (error) {
      toast.error('There was an issue trying to delete the user');
    }
  }

  return (
    <Item.Group divided>
      <Button icon='arrow left' as={Link} to='/users' content='Back to Users' style={{ marginBottom: 10 }} />

      <Header as='h3'>
        Posts
      </Header>

      <AddPost userId={userId} />

      {userPosts.map((post: Post) =>
        <Item key={post.id}>
          <Item.Content verticalAlign='middle'>
            <Item.Header>{ post.title }</Item.Header>
            <Item.Description>{ post.body }</Item.Description>
            <Item.Extra>
              <Button icon='comments' content='View comments' as={Link} to={`/comments/${post.id}`} />
              <EditPost post={post} />
              <Button style={{ marginTop: 5 }} color='red' onClick={() => handlePostDelete(post.id)} icon='remove' content='Delete' />
            </Item.Extra>
          </Item.Content>
        </Item>
      )}
      {userPosts.length === 0 && <p>No posts</p>}
    </Item.Group>
  );
}
