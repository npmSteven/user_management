import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';

import { Auth } from '../../models/Auth';
import { AuthAction } from '../../models/AuthAction';
import { SET_AUTH } from '../../actions/types';

export function Login() {

  const dispatch = useDispatch();
  const auth: Auth = useSelector((state: any) => state.auth);
  
  const handleLogin = () => {
    // Set the state of auth status to loading while we process the users request
    const authAction: AuthAction = { type: SET_AUTH, auth: { status: 'loading' } };
    dispatch(authAction);

    // Call authentication endpoint

    // Set state of auth status to authorized and redirect to users component

  };

  return (
    <Form>
      <Form.Field>
        <label>Username</label>
        <input />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input />
      </Form.Field>
      <Button loading={auth.status === 'loading'} onClick={handleLogin}>Login</Button>
    </Form>
  );
}
