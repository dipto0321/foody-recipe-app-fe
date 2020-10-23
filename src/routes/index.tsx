import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
// import Signout from '../components/Signout';

import { getItem } from '../utils/sessionStorage';
import { configData } from '../utils/configs';

const Routes = (): JSX.Element => {
  const [accessData, setAccessData] = useState({});

  const handleAccessData = () => {
    setAccessData(getItem(configData.accessTokenKeyName));
  };
  return (
    <Switch>
      <Route exact path="/sign-up" component={Signup} />
      <Route exact path="/sign-in" component={Signin} />
    </Switch>
  );
};

export default Routes;
