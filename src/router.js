import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./Containers/App";
import Test from "./Containers/test";

const Routes = props => (
	<Switch>
		<Route exact path="/" component={App} />
		<Route exact path="/test" component={Test} />
	</Switch>
);

export default Routes;
