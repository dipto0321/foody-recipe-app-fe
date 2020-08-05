import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Signup from './Signup';
import Signin from './Signin';
import Profile from './Profile/Profile';
import Signout from './Signout';
import Dashboard from './Dashboard/Dashboard';
import { getItem } from '../utils/sessionStorage';
import { configData } from '../utils/configs';
import '../styles/App.less';

const App = (): JSX.Element => {
  const { Header, Content, Footer } = Layout;
  const [accessData, setAccessData] = useState(
    getItem(configData.accessTokenKeyName)
  );

  const handleAccessData = () => {
    setAccessData(getItem(configData.accessTokenKeyName));
  };

  return (
    <Layout style={{ background: 'transparent' }}>
      <Router>
        <Header style={{ background: 'transparent' }}>
          <Navbar />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Switch>
            <Route exact path="/sign-up" render={() => <Signup />} />
            <Route exact path="/sign-in" render={() => <div>sign in</div>} />
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
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Foody App ©2020</Footer> */}
      </Router>
    </Layout>
  );
};

export default App;
