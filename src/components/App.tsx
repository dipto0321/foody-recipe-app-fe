import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Navbar from './Header/Navbar';

const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
