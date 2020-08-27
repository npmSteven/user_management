import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Auth } from '../../models/Auth';
import { State } from '../../models/State';

// Check if the user is logged in
export function AuthenticatedRoute({ component: Component, ...rest }: any) {

  // Get auth state
  const auth: Auth = useSelector((state: State) => state.auth);

  return (
    <Route
      {...rest}
      render={props =>
        auth.status === 'authorized'
          ? <Component {...props} />
          : <Redirect
              to='/login'
            />}
    />
  );
}