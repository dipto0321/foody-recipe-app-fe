import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from '../components/Signup';
import Signin from '../components/Signin';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/sign-up" component={Signup} />
      <Route exact path="/sign-in" component={Signin} />
    </Switch>
  );
};

export default Routes;
