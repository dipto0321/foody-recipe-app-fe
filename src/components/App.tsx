import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Layout } from 'antd';

import Navbar from './Navbar';
import Routes from '../routes';

import configureStore from '../store/configureStore';

import '../styles/App.less';

const App = (): JSX.Element => {
  const { Header, Content, Footer } = Layout;
  const store = configureStore();

  return (
    <Provider store={store}>
      <Layout className="app">
        <Router>
          <Header className="app__header">
            <Navbar />
          </Header>
          <Content className="app__content">
            <Routes />
          </Content>
          <Footer className="app__footer">Foody App © 2020</Footer>
        </Router>
      </Layout>
    </Provider>
  );
};

export default App;
