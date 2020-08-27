import React, { Dispatch, useEffect } from 'react'
import { Card, Image, Button, Header } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { User } from '../../models/User';
import { State } from '../../models/State';
import { deleteUser, getUsers } from '../../actions/users.actions';
import { UsersAction } from '../../models/UsersAction';
import { AddUser } from './AddUser';
import { EditUser } from './EditUser';
import { getPosts } from '../../actions/posts.actions';
import { getComments } from '../../actions/comments.actions';
import { PostsAction } from '../../models/PostsAction';
import { CommentsAction } from '../../models/CommentsAction';

export function Users() {
  const userDispatch: Dispatch<UsersAction> = useDispatch();
  const postsDispatch: Dispatch<PostsAction> = useDispatch();
  const commentsDispatch: Dispatch<CommentsAction> = useDispatch();

  // Get the users from state
  const users: Array<User> = useSelector((state: State) => state.users);

  // Get all of the users, posts and comments and set to state
  useEffect(() => {
    (async function anyNameFunction() {
      await getUsers(userDispatch);
      await getPosts(postsDispatch);
      await getComments(commentsDispatch);
    })();
  }, [userDispatch, postsDispatch, commentsDispatch]);

  const handleUserDelete = async (id: number | undefined): Promise<void> => {
    try {
      await deleteUser(id, users, userDispatch);
    } catch (error) {
      toast.error('There was an issue trying to delete the user');
    }
  }

  return (
    <div>
      <Header dividing as='h2'>
        Users
      </Header>
      
      <AddUser />

      <Card.Group>
        {users.map((user: User) => 
          <Card key={user.id}>
            <Image src={user.avatar} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{user.name}</Card.Header>
              <Card.Meta>
                <span>{user.email}</span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button as={Link} to={`/posts/${user.id}`} content='View posts' icon='list' />
              <EditUser user={user} />
              <Button style={{ marginTop: 5 }} color='red' onClick={() => handleUserDelete(user.id)} icon='remove' content='Delete' />
            </Card.Content>
          </Card>
        )}
        {users.length === 0 && <p>No users</p>}
      </Card.Group>
    </div>
  );
}
