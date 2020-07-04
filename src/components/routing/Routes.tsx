import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Login } from '../auth/Login';
import { Register } from '../auth/Register';
import { Users } from '../Users/Users';
import { AuthenticatedRoute } from './AuthenticatedRoute';

export const Routes = () => {
  return (
    <Container>
      <ToastContainer />
      <Switch>
        <Route exect path='/login' component={Login} />
        <Route exect path='/register' component={Register} />
        <AuthenticatedRoute exect path='/' component={Users} />
      </Switch>
    </Container>
  );
};
