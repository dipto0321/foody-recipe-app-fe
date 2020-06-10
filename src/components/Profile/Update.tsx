import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UpdateProps } from '../../interfaces/profile';

const validationSchema = Yup.object({
  name: Yup.string()
    .max(50, 'Name should not be more than 50 character long!')
    .required("Name can't be empty!"),
  email: Yup.string()
    .email('Invalid email address!')
    .required("Email can't be empty!"),
  avatarUrl: Yup.string(),
});
const Update = ({ profileData, handleUpdate }: UpdateProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialValues = { ...profileData };
  const upForm = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values) => {
      handleUpdate(values);
      onClose();
    },
    validationSchema,
  });
  return (
    <>
      <Button
        rightIcon="edit"
        variantColor="yellow"
        variant="solid"
        onClick={onOpen}
        mr={2}
      >
        Edit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={upForm.handleSubmit}>
          <ModalContent>
            <ModalHeader>{`Update ${profileData.name} account`}</ModalHeader>
            <ModalBody>
              <FormControl
                isRequired
                isInvalid={upForm.touched.name && Boolean(upForm.errors.name)}
              >
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  onChange={upForm.handleChange}
                  onBlur={upForm.handleBlur}
                  value={upForm.values.name}
                />
                <FormErrorMessage>{upForm.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={upForm.touched.email && Boolean(upForm.errors.email)}
              >
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  onChange={upForm.handleChange}
                  onBlur={upForm.handleBlur}
                  value={upForm.values.email}
                />
                <FormErrorMessage>{upForm.errors.email}</FormErrorMessage>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                variantColor="teal"
                variant="outline"
                mr={3}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button variantColor="yellow" variant="outline" type="submit">
                Update
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default Update;
