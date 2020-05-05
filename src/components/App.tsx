import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Navbar from './Navbar';
import SignUp from './Signup';

const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Navbar />
      <SignUp />
    </ThemeProvider>
  );
};

export default App;
