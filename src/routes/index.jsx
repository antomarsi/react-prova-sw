import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import Order from "../pages/Order";
import Missions from "../pages/Missions";
import history from "./history";
import { ConnectedRouter } from "connected-react-router";

const Routes = () => (
  <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/order" component={Order} />
        <Route path="/missions" component={Missions} />
      </Switch>
  </ConnectedRouter>
);

export default Routes;
