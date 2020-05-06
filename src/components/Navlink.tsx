/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/core';

interface Navprops {
  children: string;
  path: string;
}

const Navlink = ({ children, path }: Navprops) => (
  <Link
    /*
// @ts-ignore */
    as={ReactRouterLink}
    to={`/${path}`}
    px={2}
    color="white"
    _focus={{
      outline: 'none',
    }}
  >
    {children}
  </Link>
);

export default Navlink;
