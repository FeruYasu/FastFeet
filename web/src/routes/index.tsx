import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import DeliveriesDashboard from '../pages/DeliveriesDashboard';
import HandleDelivery from '../pages/HandleDelivery';
import CouriersDashboard from '../pages/CouriersDashboard';
import HandleCouriers from '../pages/HandleCourier';

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
      <Route
        path="/deliveries/edit/:id"
        component={HandleDelivery}
        isPrivate
        exact
      />
      <Route path="/deliveries/new" component={HandleDelivery} isPrivate />
      <Route path="/couriers" component={CouriersDashboard} isPrivate exact />
      <Route
        path="/couriers/edit/:id"
        component={HandleCouriers}
        isPrivate
        exact
      />
      <Route path="/couriers/new" component={HandleCouriers} isPrivate />
    </Switch>
  );
};

export default Routes;
