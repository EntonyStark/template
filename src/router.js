import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './Containers/App';
import TestComp from './Containers/test';

const Routes = props => (
  <Switch {...props}>
    <Route exact path="/" component={App} />
    <Route exact path="/test" component={TestComp} />
  </Switch>
);

export default Routes;
