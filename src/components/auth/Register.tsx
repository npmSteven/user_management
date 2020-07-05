import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { register } from '../../utils/authentication';
import { Auth } from '../../models/Auth';
import { AuthAction } from '../../models/AuthAction';
import { SET_AUTH } from '../../actions/types';
import { State } from '../../models/State';
import { useFormInput } from '../hooks/customHooks';

export function Register() {
  const dispatch = useDispatch();
  
  const username = useFormInput('');
  const password = useFormInput('');

  const history = useHistory();

  const auth: Auth = useSelector((state: State) => state.auth);
  
  const handleRegister = () => {
    // Set auth status to loading
    const authAction: AuthAction = { type: SET_AUTH, auth: { status: 'loading' } };
    dispatch(authAction);

    // Pass credentials to register for validation and authing
    const hasRegistered: boolean = register(username.props.value, password.props.value, dispatch);
    if (hasRegistered) {
      history.push('/users');
    }
  };

  return (
    <Form>
      <Form.Field>
        <label>Username</label>
        <Form.Input { ...username.props } />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Form.Input type='password' { ...password.props } />
      </Form.Field>
      <Button loading={auth.status === 'loading'} onClick={handleRegister}>Register</Button>
    </Form>
  );
}
