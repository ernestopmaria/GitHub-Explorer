import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';
import Repository from '../pages/Repository/index';

const Routes: React.FC = () => (
  <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
);

export default Routes;
