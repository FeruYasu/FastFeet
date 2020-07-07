import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import DeliveriesDashboard from '../pages/DeliveriesDashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route
        path="/deliveries"
        component={DeliveriesDashboard}
        isPrivate
        exact
      />
    </Switch>
  );
};

export default Routes;
