import React from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Divider,
  Input,
  Button,
  useToast,
} from '@chakra-ui/core';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SignUpProps } from '../interfaces/formInterfaces';

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .max(50, 'Name should not be more than 50 character long!')
    .required("Name can't be empty!"),
  email: Yup.string()
    .email('Invalid email address!')
    .required("Email can't be empty!"),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('No password provided.'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password')],
    'Password not matched!'
  ),
});

const Signup = () => {
  const toast = useToast();
  const form = useFormik({
    initialValues,
    onSubmit: (values: SignUpProps) => {
      console.log('values:', values);
      toast({
        position: 'top',
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    },
    validationSchema,
  });
  return (
    <Box w="50%" mx="auto">
      <Heading as="h1">Join in</Heading>
      <Divider />
      <Box p={6}>
        <form onSubmit={form.handleSubmit}>
          <FormControl
            isRequired
            isInvalid={form.touched.name && Boolean(form.errors.name)}
          >
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              id="name"
              name="name"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.name}
            />
            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
          </FormControl>
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
              aria-describedby="email-helper-text"
            />
            <FormHelperText id="email-helper-text">
              We will never share your email.
            </FormHelperText>
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
          <FormControl
            isRequired
            isInvalid={
              form.touched.passwordConfirmation &&
              Boolean(form.errors.passwordConfirmation)
            }
          >
            <FormLabel htmlFor="passwordConfirmation">
              Password confirmation
            </FormLabel>
            <Input
              type="password"
              id="passwordConfirmation"
              name="passwordConfirmation"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.passwordConfirmation}
            />
            <FormErrorMessage>
              {form.errors.passwordConfirmation}
            </FormErrorMessage>
          </FormControl>
          <Button mt={4} variantColor="teal" type="submit">
            Create account
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
