import React, { useState } from 'react';
import { Box, Divider, Heading, Stack } from '@chakra-ui/core';
import RecipeInsert from './RecipeInsert';

const Dashboard = (): JSX.Element => {
  return (
    <Stack maxW="lg" mx="auto" mt={2}>
      <Heading>Recipes</Heading>
      <Divider />
      <RecipeInsert />
      <Box mt={2}>Body</Box>
      <p>Pagination</p>
    </Stack>
  );
};

export default Dashboard;
