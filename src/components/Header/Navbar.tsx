import React, { useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import _ from 'lodash';
import Navlink from './Navlink';
import Signup from './Signup';
import Signin from './Signin';
import Signout from './Signout';
import { getItem } from '../../utils/sessionStorage';
import { configData, menuNames } from '../../utils/configs';

const menusInitial = [menuNames.signIn, menuNames.signUp];
const menusForLoggedIn = [menuNames.dash, menuNames.profile, menuNames.signOut];

const Navbar = () => {
  const [accessData, setAccessData] = useState(
    getItem(configData.accessTokenKeyName)
  );

  const renderMenus = () => {
    const isLoggedIn = _.isEmpty(accessData);
    let menus = [...menusInitial];
    if (!isLoggedIn) {
      menus = [...menusForLoggedIn];
    }
    return menus.map((menu) => (
      <Navlink key={menus.indexOf(menu)} path={menu}>
        {menu.toUpperCase()}
      </Navlink>
    ));
  };

  const handleAccessData = () => {
    setAccessData(getItem(configData.accessTokenKeyName));
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
          render={() => <Signin handleAccessData={handleAccessData} />}
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
      </Switch>
    </Router>
  );
};

export default Navbar;
