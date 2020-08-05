import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Text, useToast } from '@chakra-ui/core';
import serverAPI from '../apis/baseApi';
import {
  configData,
  endPointPaths,
  menuNames,
  rootPath,
} from '../utils/configs';
import { removeItem } from '../utils/sessionStorage';
import { SignOutProps } from '../interfaces/signout';

const Signout = ({
  accessData,
  handleAccessData,
}: SignOutProps): JSX.Element => {
  const { refresh } = accessData;
  const toast = useToast();
  const history = useHistory();
  const handleYesClick = async () => {
    try {
      await serverAPI.post(endPointPaths.refreshTokenPath, { refresh });
      removeItem(configData.accessTokenKeyName);
      handleAccessData();
      toast({
        position: 'top',
        title: `Sign out Success!`,
        description: 'Bye Bye, See u again!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      history.push(rootPath);
    } catch (error) {
      toast({
        position: 'top',
        title: `Opps! Something is wrong!`,
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleNoClick = () => {
    history.push(`/${menuNames.dash}`);
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      p={5}
      mx="auto"
      my="15%"
    >
      <Box my="2" lineHeight="tight" textAlign="center">
        <Text fontSize="xl" fontWeight="semibold">
          Are you want to leave?
        </Text>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button mr={2} variantColor="red" onClick={handleYesClick}>
          Yes
        </Button>
        <Button ml={2} variantColor="teal" onClick={handleNoClick}>
          No
        </Button>
      </Box>
    </Box>
  );
};

export default Signout;
