import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/core';
import Navlink from './Navlink';

const menus = ['Home', 'About', 'Sign-in', 'Sign-up'];

const Navbar = () => (
  <Flex
    bg="tomato"
    w="100%"
    px={5}
    py={4}
    justifyContent="space-between"
    alignItems="center"
  >
    <Flex flexDirection="row" justifyContent="center" alignItems="center">
      <Text pl={3} color="white">
        Foody App
      </Text>
    </Flex>
    <Box>
      {menus.map((menu) => (
        <Navlink>{menu}</Navlink>
      ))}
    </Box>
  </Flex>
);

export default Navbar;
