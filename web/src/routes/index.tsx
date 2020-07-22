import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import DeliveriesDashboard from '../pages/DeliveriesDashboard';
import HandleDelivery from '../pages/HandleDelivery';
import CouriersDashboard from '../pages/CouriersDashboard';
import HandleCouriers from '../pages/HandleCourier';
import RecipientDashboard from '../pages/RecipientsDashboard';
import ProblemsDashboard from '../pages/ProblemsDashboard';
import HandleRecipient from '../pages/HandleRecipient';

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

      <Route
        path="/recipients"
        component={RecipientDashboard}
        isPrivate
        exact
      />

      <Route
        path="/recipients/edit/:id"
        component={HandleRecipient}
        isPrivate
      />

      <Route path="/recipients/new" component={HandleRecipient} isPrivate />

      <Route path="/problems" component={ProblemsDashboard} isPrivate exact />
    </Switch>
  );
};

export default Routes;
