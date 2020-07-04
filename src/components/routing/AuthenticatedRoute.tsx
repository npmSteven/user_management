import React from 'react';
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import { Auth } from "../../models/Auth";

export function AuthenticatedRoute({ component: Component, ...rest }: any) {
  const auth: Auth = useSelector((state: any) => state.auth);
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