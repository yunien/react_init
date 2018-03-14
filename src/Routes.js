import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import EMap from './containers/EMap';
import Noc from './containers/Noc';

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/EMap" component={EMap} />
    <Route path="/Noc" component={Noc} />
  </Switch>;
