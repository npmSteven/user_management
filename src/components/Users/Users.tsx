import React from 'react'
import { Card, Image, Button, Header } from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { User } from '../../models/User';
import { State } from '../../models/State';

export function Users() {
  // Get the users from state
  const users: Array<User> = useSelector((state: State) => state.users);

  return (
    <div>
      <Header dividing as='h2'>
        Users
      </Header>
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
                View posts
              </Button>
            </Card.Content>
          </Card>
        )}
        {users.length === 0 && <p>No users</p>}
      </Card.Group>
    </div>
  );
}
