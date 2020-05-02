import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/register" component={SignUp} />
      <Route path="/recover_password" component={ForgotPassword} />
    </Switch>
  );
};

export default Routes;
