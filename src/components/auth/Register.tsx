import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../utils/authentication';

import { Auth } from '../../models/Auth';
import { AuthAction } from '../../models/AuthAction';
import { SET_AUTH } from '../../actions/types';

export function Register() {
  const dispatch = useDispatch();
  
  const username = useFormInput('');
  const password = useFormInput('');

  const auth: Auth = useSelector((state: any) => state.auth);
  
  const handleRegister = () => {
    const authAction: AuthAction = { type: SET_AUTH, auth: { status: 'loading' } };
    dispatch(authAction);

    register(username.value, password.value, dispatch);
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
      <Button loading={auth.status === 'loading'} onClick={handleRegister}>Register</Button>
    </Form>
  );
}

const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange
  }
}
