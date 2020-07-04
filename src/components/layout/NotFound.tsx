import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

export function NotFound() {
  return (
    <Header as='h2' textAlign='center' icon>
      <Icon name='settings' />
        404
      <Header.Subheader>
        Page not found
      </Header.Subheader>
    </Header>
  );

}
