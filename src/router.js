import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './Containers/App';
import TestComp from './Containers/FirstLayout';

const Routes = props => (
  <Switch {...props}>
    <Route exact path="/" component={App} />
    <Route exact path="/test-1" component={TestComp} />
  </Switch>
);

export default Routes;
