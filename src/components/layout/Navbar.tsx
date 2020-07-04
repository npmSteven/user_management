import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';

import { Auth } from '../../models/Auth';
import { logout } from '../../utils/authentication';

function Navbar() {
  const dispatch = useDispatch();
  const auth: Auth = useSelector((state: any) => state.auth);

  const handleLogout = () => {
    logout(dispatch);
  }

  return (
    <Menu>
      <Menu.Item header>User Management</Menu.Item>
      <Menu.Menu position='right'>
        {auth.status === 'authorized'
        ? 
          <>
            <Menu.Item
              name='Users'
              icon='users'
            />
            <Menu.Item
              name='Logout'
              icon='sign-out'
              onClick={handleLogout}
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
  );

}

export default Navbar;
