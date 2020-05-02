import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
