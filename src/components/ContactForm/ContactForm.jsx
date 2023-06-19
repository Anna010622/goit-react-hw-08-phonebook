import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addContact } from 'redux/contacts/contactsOperations';
import { getContacts, getLoading } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

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
  const contacts = useSelector(getContacts);
  // const isLoading = useSelector(getLoading);

  // useEffect(() => {
  //   if (!isLoading) {
  //     setIsClicked(false);
  //   }
  // }, [isLoading]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isLoading },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
  console.log(useForm());
  console.log(isSubmitting);

  const onSubmit = ({ name, number }) => {
    setIsClicked(true);
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.warn(`${name} is already in contacts`);
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
        isLoading={isSubmitting}
      >
        Add contact
      </Button>
    </VStack>

    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <div>
    //     <label>Name</label>
    //     <input type="text" {...register('name')} />
    //     {formState.errors.name && <p>{formState.errors.name.message}</p>}
    //   </div>

    //   <div>
    //     <label>Phone</label>
    //     <input type="tel" {...register('number')} />
    //     {formState.errors.number && <p>{formState.errors.number.message}</p>}
    //   </div>

    //   <button
    //     type="submit"
    //     disabled={(isLoading && isClicked) || !formState.isValid}
    //   >
    //     <span>Add contact</span>
    //     {isLoading && isClicked && (
    //       <RotatingLines strokeColor="grey" width="20px" />
    //     )}
    //   </button>
    // </form>
  );
};
