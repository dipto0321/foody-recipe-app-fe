import React from 'react';
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
import { SignInProps } from '../interfaces/formInterfaces';

const initialValues: SignInProps = {
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

const Signin = () => {
  const toast = useToast();
  const history = useHistory();
  const form = useFormik({
    initialValues,
    onSubmit: (values: SignInProps) => {
      console.log('sign in values:', values);
      toast({
        position: 'top',
        title: 'Login Success',
        description: "We've created your token for you.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      history.push('/');
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
            isInvalid={form.touched.email && Boolean(form.values.email)}
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
          <Button mt={4} variantColor="teal" type="submit">
            Sign in
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Signin;
