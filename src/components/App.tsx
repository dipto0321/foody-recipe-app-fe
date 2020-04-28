import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Navbar from './Navbar';

const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
