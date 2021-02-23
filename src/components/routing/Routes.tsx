import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Login } from '../auth/Login';
import { Register } from '../auth/Register';
import { AuthenticatedRoute } from './AuthenticatedRoute';
import { Posts } from '../posts/Posts';
import { NotFound } from '../layout/NotFound';
import { Comments } from '../comments/Comments';
import { Users } from '../users/Users';

export const Routes = () => {
  return (
    <Container>
      <ToastContainer />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <AuthenticatedRoute exact path='/users' component={Users} />
        <AuthenticatedRoute exact path='/posts/:id' component={Posts} />
        <AuthenticatedRoute exact path='/comments/:id' component={Comments} />
        <AuthenticatedRoute path='/' to='/users' />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};
