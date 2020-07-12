import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import DeliveriesDashboard from '../pages/DeliveriesDashboard';
import HandleDelivery from '../pages/HandleDelivery';

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
      <Route path="/deliveries/edit/:id" component={HandleDelivery} isPrivate />
      <Route path="/deliveries/new" component={HandleDelivery} isPrivate />
    </Switch>
  );
};

export default Routes;
