import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CountryList from '../pages/Country';
import ShowCountry from '../pages/Country/Show';
import EditCountry from '../pages/Country/Edit';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/country" exact component={CountryList} />
    <Route path="/country/:id" exact component={ShowCountry} />
    <Route path="/country/:id/edit" component={EditCountry} />
    <Route path="*" exact render={() => <Redirect to="/country" />} />
  </Switch>
);

export default Routes;
