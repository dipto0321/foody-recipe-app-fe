import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from '@chakra-ui/core';

const RecipeForm = (): JSX.Element => {
  return (
    <form>
      <Stack>
        <FormControl isRequired>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input type="text" name="title" id="title" placeholder="Title" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="ingredients">Ingredients</FormLabel>
          <Select
            placeholder="Select Ingredients"
            name="ingredients"
            id="ingredients"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="tags">Tags</FormLabel>
          <Select placeholder="Select Tags" name="tags" id="tags">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="price">Price in USD</FormLabel>
          <NumberInput defaultValue={0} min={0}>
            <NumberInputField name="price" id="price" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="making_time_minutes">
            Making time in minutes
          </FormLabel>
          <NumberInput defaultValue={0} min={0}>
            <NumberInputField
              name="making_time_minutes"
              id="making_time_minutes"
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="recipe_link">Recipe link</FormLabel>
          <Input
            type="url"
            name="recipe_link"
            id="recipe_link"
            placeholder="Add recipe link (optional)"
          />
        </FormControl>
        <Button mt={4} variantColor="teal" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default RecipeForm;
