import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts, selectContactsLoading } from 'redux/selectors';
import {
  Avatar,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';

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
        isClosable: true,
        position: 'top-right',
        status: 'info',
        duration: 3000,
      });
    }
    if (contacts.find(contact => contact.number === number)) {
      return toast({
        title: `Number: ${number} is already in contacts`,
        isClosable: true,
        position: 'top-right',
        status: 'info',
        duration: 3000,
      });
    }

    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => {
        toast({
          title: `Contact has been added`,
          isClosable: true,
          position: 'top-right',
          status: 'success',
          duration: 3000,
        });
      })
      .catch(() =>
        toast({
          title: `Something went wrong. Please try again later`,
          isClosable: true,
          position: 'top-right',
          status: 'error',
          duration: 3000,
        })
      );
    reset();
  };

  const bg = useColorModeValue('teal.50', '#0a192f');
  const iconBg = useColorModeValue('teal.800', 'teal.500');

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
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Avatar bg={iconBg} size="xs" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Enter contact name"
            _placeholder={{ opacity: 0.5, color: 'inherit' }}
            {...register('name')}
            bg={bg}
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.number} isRequired>
        <FormLabel fontWeight="600">Phone</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color={iconBg} />
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="Enter phone number"
            _placeholder={{ opacity: 0.5, color: 'inherit' }}
            {...register('number')}
            bg={bg}
          />
        </InputGroup>
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
