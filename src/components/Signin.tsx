import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Divider,
  Input,
  Button,
  useToast,
} from '@chakra-ui/core';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { SignIn, SignInProps } from '../interfaces/signin';
import serverAPI from '../apis/baseApi';
import { setItem } from '../utils/sessionStorage';
import { configData, endPointPaths, menuNames } from '../utils/configs';

const initialValues: SignIn = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address!')
    .required("Email can't be empty!"),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('No password provided.'),
});

const Signin = ({ handleAccessData }: SignInProps): JSX.Element => {
  const [loadState, setLoadState] = useState(false);
  const toast = useToast();
  const history = useHistory();
  const form = useFormik({
    initialValues,
    onSubmit: async (values: SignIn) => {
      try {
        setLoadState(true);
        const response = await serverAPI.post(endPointPaths.signInPath, values);
        const { data } = response;
        setItem(configData.accessTokenKeyName, { ...data });
        toast({
          position: 'top',
          title: 'Welcome to foody Recipe App!',
          description: "You've logged in successfully",
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        handleAccessData();
        history.push(`/${menuNames.dash}`);
      } catch (error) {
        toast({
          position: 'top',
          title: `Opps! Something is wrong!`,
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        setLoadState(false);
      }
    },
    validationSchema,
  });

  return (
    <Box w="50%" mx="auto">
      <Heading as="h1">Sign in</Heading>
      <Divider />
      <Box p={6}>
        <form onSubmit={form.handleSubmit}>
          <FormControl
            isRequired
            isInvalid={form.touched.email && Boolean(form.errors.email)}
          >
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.email}
            />
            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={form.touched.password && Boolean(form.errors.password)}
          >
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.password}
            />
            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            variantColor="teal"
            type="submit"
            isLoading={loadState}
          >
            Sign in
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Signin;
