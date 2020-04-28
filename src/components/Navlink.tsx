/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from '@chakra-ui/core';

interface Navprops {
  children: string;
}
const Navlink = ({ children, ...props }: Navprops) => (
  <Link px={2} color="white" {...props}>
    {children}
  </Link>
);

export default Navlink;
