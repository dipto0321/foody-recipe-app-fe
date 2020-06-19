import React, { useState, useEffect } from 'react';
import {
  Box,
  Avatar,
  Text,
  ButtonGroup,
  Heading,
  Divider,
  Stack,
  useToast,
} from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';
import { ProfileProps } from '../../interfaces/profile';
import { ProfileDataObject } from '../../types/common';
import { configData, endPointPaths, menuNames } from '../../utils/configs';
import getGravatar from '../../utils/gravatar';
import serverAPI from '../../apis/baseApi';
import { removeItem } from '../../utils/sessionStorage';
import Delete from './Delete';
import Update from './Update';

const Profile = ({
  accessData,
  handleAccessData,
}: ProfileProps): JSX.Element => {
  const initialValues = { name: '', email: '', avatarUrl: '' };
  const [profileData, setProfileData] = useState(initialValues);
  const toast = useToast();
  const history = useHistory();
  const handleGetProfileData = async () => {
    try {
      const response = await serverAPI.get(endPointPaths.profilePath, {
        headers: {
          Authorization: `Bearer ${accessData.access}`,
        },
      });
      const { data } = response;
      setProfileData({ ...data, avatarUrl: getGravatar(data.email) });
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

  const handleDelete = async () => {
    try {
      await serverAPI.delete(endPointPaths.profilePath, {
        headers: {
          Authorization: `Bearer ${accessData.access}`,
        },
      });
      removeItem(configData.accessTokenKeyName);
      handleAccessData();
      history.push(`/${menuNames.signUp}`);
    } catch (error) {
      toast({
        position: 'top',
        title: `Opps! Something is wrong!`,
        description: error.code,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleUpdate = async (proData: ProfileDataObject) => {
    try {
      const response = await serverAPI.patch(
        endPointPaths.profilePath,
        {
          name: proData.name,
          email: proData.email,
        },
        {
          headers: {
            Authorization: `Bearer ${accessData.access}`,
          },
        }
      );
      const { data } = response;
      setProfileData({ ...data, avatarUrl: getGravatar(data.email) });
      toast({
        position: 'top',
        title: 'Update profile information',
        description: 'Update operation successful!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        position: 'top',
        title: `Opps! Something is wrong!`,
        description: error.code,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    handleGetProfileData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack maxW="lg" mx="auto" mt={2}>
      <Heading as="h1" textAlign="center">
        PROFILE
      </Heading>
      <Divider />
      <Box
        maxW="lg"
        mx="auto"
        my="10px"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        d="flex"
        justifyItems="center"
        alignItems="center"
        p={5}
      >
        <Avatar
          size="2xl"
          name={profileData.name}
          src={profileData.avatarUrl}
          m={5}
        />
        <Box>
          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            color="#2c3e50"
          >
            {profileData.name}
          </Text>
          <Text color="#2980b9">{profileData.email}</Text>
          <ButtonGroup spacing={2} mt={2}>
            <Update profileData={profileData} handleUpdate={handleUpdate} />
            <Delete userName={profileData.name} handleDelete={handleDelete} />
          </ButtonGroup>
        </Box>
      </Box>
    </Stack>
  );
};

export default Profile;
