import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts, selectContactsLoading } from 'redux/selectors';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';

export const schema = yup
  .object({
    name: yup
      .string()
      .required('Name is required')
      .min(3, 'Name must be no less than 3 characters long')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces'
      ),
    number: yup
      .string()
      .required('Number is required')
      .transform(currentValue => currentValue.replace(/\D+/g, ''))
      .min(7, 'Number phone must be no less than 7 characters long')
      .max(12, 'Number phone must be no more than 12 digits'),
    // .matches(
    //   /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
    //   'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    // ),
  })
  .required();

export const ContactForm = () => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsLoading);

  const toast = useToast();
  useEffect(() => {
    if (!isLoading) {
      setIsClicked(false);
    }
  }, [isLoading]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ name, number }) => {
    setIsClicked(true);
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast({
        title: `${name} is already in contacts`,
        variant: 'subtle',
        isClosable: true,
        position: 'top-right',
        status: 'warning',
        duration: 3000,
      });
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  const bg = useColorModeValue('teal.50', '#0a192f');

  return (
    <VStack
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      mx="auto"
      justifyContent="center"
      mb={6}
      p="4"
      maxH="fit"
    >
      <Heading>Create new contact</Heading>

      <FormControl isInvalid={errors.name} isRequired>
        <FormLabel fontWeight="600">Name</FormLabel>
        <Input type="text" {...register('name')} bg={bg} />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.number} isRequired>
        <FormLabel fontWeight="600">Phone</FormLabel>
        <Input type="tel" {...register('number')} bg={bg} />
        <FormErrorMessage>
          {errors.number && errors.number.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        variant="outline"
        colorScheme="teal"
        isLoading={isLoading && isClicked}
      >
        Add contact
      </Button>
    </VStack>
  );
};
