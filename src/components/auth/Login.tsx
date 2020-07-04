import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../utils/authentication';

import { Auth } from '../../models/Auth';
import { AuthAction } from '../../models/AuthAction';
import { SET_AUTH } from '../../actions/types';
import { useFormInput } from '../hooks/customHooks';

export function Login() {
  const dispatch = useDispatch();
  
  const username = useFormInput('');
  const password = useFormInput('');

  const auth: Auth = useSelector((state: any) => state.auth);
  
  const handleLogin = () => {
    const authAction: AuthAction = { type: SET_AUTH, auth: { status: 'loading' } };
    dispatch(authAction);

    login(username.value, password.value, dispatch);
  };

  return (
    <Form>
      <Form.Field>
        <label>Username</label>
        <Form.Input { ...username } />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Form.Input type='password' { ...password } />
      </Form.Field>
      <Button loading={auth.status === 'loading'} onClick={handleLogin}>Login</Button>
    </Form>
  );
}
