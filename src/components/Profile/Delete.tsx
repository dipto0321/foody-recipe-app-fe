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
} from '@chakra-ui/core';

import { DeleteProps } from '../../interfaces/profile';

const Delete = ({ userName, handleDelete }: DeleteProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        rightIcon="delete"
        variantColor="red"
        variant="solid"
        onClick={onOpen}
      >
        Delete
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`Delete ${userName} account`}</ModalHeader>
          <ModalBody>Are you sure you want to leave for ever :( ?</ModalBody>
          <ModalFooter>
            <Button
              variantColor="teal"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Nope
            </Button>
            <Button variantColor="red" variant="outline" onClick={handleDelete}>
              Yeah!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Delete;
