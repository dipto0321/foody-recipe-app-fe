import React, { useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import _ from 'lodash';
import Navlink from './Navlink';
import Signup from './Signup';
import Signin from './Signin';
import { getItem } from '../utils/sessionStorage';
import { configData } from '../utils/configs';

const menusWithoutSigned = ['Sign-in', 'Sign-up'];
const menusWithSigned = ['Me', 'Recipes', 'Sign-out'];

const Navbar = () => {
  const [accessData, setAccessData] = useState(
    getItem(configData.accessTokenKeyName)
  );

  const renderMenus = () => {
    const isLoggedIn = _.isEmpty(accessData);
    if (!isLoggedIn) {
      return menusWithSigned.map((menu) => (
        <Navlink key={menusWithSigned.indexOf(menu)} path={menu.toLowerCase()}>
          {menu}
        </Navlink>
      ));
    }
    return menusWithoutSigned.map((menu) => (
      <Navlink key={menusWithoutSigned.indexOf(menu)} path={menu.toLowerCase()}>
        {menu}
      </Navlink>
    ));
  };

  return (
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
        <Box>{renderMenus()}</Box>
      </Flex>
      <Switch>
        <Route exact path="/sign-up" render={() => <Signup />} />
        <Route
          exact
          path="/sign-in"
          render={() => (
            <Signin
              handleAccessData={(value: object) => {
                setAccessData(value);
              }}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default Navbar;
