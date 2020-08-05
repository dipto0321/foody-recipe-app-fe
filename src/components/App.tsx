import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Button } from 'antd';
import Navbar from './Header/Navbar';

import '../styles/App.less';

const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
