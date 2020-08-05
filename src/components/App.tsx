import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from '../routes';
import '../styles/App.less';

const App = (): JSX.Element => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout style={{ background: 'transparent' }}>
      <Router>
        <Header style={{ background: 'transparent' }}>
          <Navbar />
        </Header>
        <Content>
          <Routes />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
          }}
        >
          Foody App © 2020
        </Footer>
      </Router>
    </Layout>
  );
};

export default App;
