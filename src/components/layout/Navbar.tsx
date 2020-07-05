import React, { Dispatch } from 'react'
import { Menu } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';

import { Auth } from '../../models/Auth';
import { logout } from '../../utils/authentication';
import { Link } from 'react-router-dom';
import { AuthAction } from '../../models/AuthAction';
import { State } from '../../models/State';

function Navbar() {
  const dispatch: Dispatch<AuthAction> = useDispatch();

  const auth: Auth = useSelector((state: State) => state.auth);

  const handleLogout = (): void => {
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
              as={Link}
              to='/users'
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
              as={Link}
              to='/login'
            />
            <Menu.Item
              name='Register'
              icon='signup'
              as={Link}
              to='/register'
            />
          </>
        }
      </Menu.Menu>
    </Menu>
  );

}

export default Navbar;
