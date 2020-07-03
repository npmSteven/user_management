import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useSelector } from 'react-redux';

function Navbar() {

  const { status } = useSelector((state: any) => state.auth);

  return (
    <Menu>
      <Menu.Item header>User Management</Menu.Item>
      <Menu.Menu position='right'>
        {status === 'authorized'
        ? 
          <>
            <Menu.Item
              name='Users'
              icon='users'
            />
            <Menu.Item
              name='Logout'
              icon='sign-out'
            />
          </>
        :
          <>
            <Menu.Item
              name='Login'
              icon='sign-in'
            />
            <Menu.Item
              name='Register'
              icon='signup'
            />
          </>
        }
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar;
