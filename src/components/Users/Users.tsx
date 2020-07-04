import React, { Dispatch, useEffect } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions/users.actions';
import { UsersAction } from '../../models/UsersAction';
import { User } from '../../models/User';
import { Link } from 'react-router-dom';

export function Users() {
  const dispatch: Dispatch<UsersAction> = useDispatch();
  const users: Array<User> = useSelector((state: any) => state.users);


  useEffect(() => {
    getUsers(dispatch);
  }, []);

  return (
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
            <Button as={Link} to={`/${user.id}/posts`} basic>
              Posts
            </Button>
          </Card.Content>
        </Card>
      )}
    </Card.Group>
  );
}
