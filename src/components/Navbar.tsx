import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navlink from './Navlink';
import Signup from './Signup';
import Signin from './Signin';

const menus = ['Sign-in', 'Sign-up'];

const Navbar = () => (
  <Router>
    <Flex
      bg="tomato"
      w="100%"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Heading as="h1" pl={3} color="white">
          <Link to="/">Foody Recipe App</Link>
        </Heading>
      </Flex>
      <Box>
        {menus.map((menu) => (
          <Navlink key={menus.indexOf(menu)} path={menu.toLowerCase()}>
            {menu}
          </Navlink>
        ))}
      </Box>
    </Flex>
    <Switch>
      <Route exact path="/sign-up" component={Signup} />
      <Route exact path="/sign-in" component={Signin} />
    </Switch>
  </Router>
);

export default Navbar;
