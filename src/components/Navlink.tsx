/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from '@chakra-ui/core';

interface Navprops {
  children: string;
}
const Navlink = ({ children }: Navprops) => (
  <Link href="_" px={2} color="white">
    {children}
  </Link>
);

export default Navlink;
