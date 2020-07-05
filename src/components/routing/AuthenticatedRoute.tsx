import React, { useEffect, Dispatch } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Auth } from '../../models/Auth';
import { getUsers } from '../../actions/users.actions';
import { getPosts } from '../../actions/posts.actions';
import { getComments } from '../../actions/comments.actions';
import { UsersAction } from '../../models/UsersAction';
import { PostsAction } from '../../models/PostsAction';
import { CommentsAction } from '../../models/CommentsAction';
import { State } from '../../models/State';

// TODO: Change AuthenticatedRoute params to a better type

// Check if the user is logged in
export function AuthenticatedRoute({ component: Component, ...rest }: any) {
  const userDispatch: Dispatch<UsersAction> = useDispatch();
  const postsDispatch: Dispatch<PostsAction> = useDispatch();
  const commentsDispatch: Dispatch<CommentsAction> = useDispatch();

  // Get auth state
  const auth: Auth = useSelector((state: State) => state.auth);

  // Get all of the users, posts and comments and set to state
  useEffect((): void => {
    getUsers(userDispatch);
    getPosts(postsDispatch);
    getComments(commentsDispatch);
  }, [userDispatch, postsDispatch, commentsDispatch]);

  return (
    <Route
      {...rest}
      render={props =>
        auth.status === 'authorized'
          ? <Component {...props} />
          : <Redirect
              to='/login'
            />}
    />
  );
}