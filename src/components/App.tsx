import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from '../routes';
import '../styles/App.less';

const App = (): JSX.Element => {
  const { Header, Content, Footer } = Layout;

  return (
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
  );
};

export default App;
