import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import Profile from '../components/Profile/Profile';
import Signout from '../components/Signout';
import Dashboard from '../components/Dashboard/Dashboard';
import { getItem } from '../utils/sessionStorage';
import { configData } from '../utils/configs';

const Routes = (): JSX.Element => {
  const [accessData, setAccessData] = useState(
    getItem(configData.accessTokenKeyName)
  );

  const handleAccessData = () => {
    setAccessData(getItem(configData.accessTokenKeyName));
  };
  return (
    <Switch>
      <Route exact path="/sign-up" render={() => <Signup />} />
      <Route
        exact
        path="/sign-in"
        render={() => <Signin handleAccessData={handleAccessData} />}
      />
      <Route
        exact
        path="/profile"
        render={() => (
          <Profile
            accessData={accessData}
            handleAccessData={handleAccessData}
          />
        )}
      />
      <Route
        exact
        path="/sign-out"
        render={() => (
          <Signout
            accessData={accessData}
            handleAccessData={handleAccessData}
          />
        )}
      />
      <Route exact path="/dashboard" render={() => <Dashboard />} />
    </Switch>
  );
};

export default Routes;
