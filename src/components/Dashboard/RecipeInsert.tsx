import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/core';
import RecipeForm from './RecipeForm';

const RecipeInsert = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Add recipe item</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Recipe Add</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RecipeForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RecipeInsert;
