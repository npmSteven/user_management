import React, { Dispatch } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';

import { login } from '../../utils/authentication';
import { Auth } from '../../models/Auth';
import { AuthAction } from '../../models/AuthAction';
import { SET_AUTH } from '../../actions/types';
import { useFormInput } from '../hooks/customHooks';
import { useHistory } from 'react-router-dom';
import { State } from '../../models/State';

export function Login() {
  const dispatch: Dispatch<AuthAction> = useDispatch();
  
  const username = useFormInput('');
  const password = useFormInput('');

  const history = useHistory();

  const auth: Auth = useSelector((state: State) => state.auth);
  
  const handleLogin = () => {
    // Set auth status to loading
    const authAction: AuthAction = { type: SET_AUTH, auth: { status: 'loading' } };
    dispatch(authAction);

    // Pass credentials to login for validation and authing
    const isLoggedIn: boolean = login(username.props.value, password.props.value, dispatch);
    if (isLoggedIn) {
      history.push('/users');
    }
  };

  return (
    <Form>
      <Form.Field>
        <label>Username: </label>
        <Form.Input { ...username.props } />
      </Form.Field>
      <Form.Field>
        <label>Password: </label>
        <Form.Input type='password' { ...password.props } />
      </Form.Field>
      <Button loading={auth.status === 'loading'} onClick={handleLogin}>Login</Button>
    </Form>
  );
}
