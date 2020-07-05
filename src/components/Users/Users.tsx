import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { useSelector } from 'react-redux';

import { User } from '../../models/User';
import { Link } from 'react-router-dom';

export function Users() {
  const users: Array<User> = useSelector((state: any) => state.users);

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
            <Button as={Link} to={`/posts/${user.id}`} basic>
              Posts
            </Button>
          </Card.Content>
        </Card>
      )}
      {users.length === 0 && <p>No users</p>}
    </Card.Group>
  );
}
