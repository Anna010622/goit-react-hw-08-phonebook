import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from 'components/ContactForm/ContactForm';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/selectors';

export const EditForm = ({ onCancel, contact }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
  const contacts = useSelector(selectContacts);
  const toast = useToast();
  const dispatch = useDispatch();

  const onSubmit = data => {
    const { name, number } = data;
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
    dispatch(updateContact({ id: contact.id, body: { name, number } }))
      .unwrap()
      .then(() => {
        toast({
          title: `Contact updated`,
          isClosable: true,
          position: 'top-right',
          status: 'success',
          duration: 3000,
        });
        onCancel();
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
  };

  const bg = useColorModeValue('teal.50', '#0a192f');
  return (
    <VStack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)} p={6}>
      <FormControl isInvalid={errors.name} isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          {...register('name')}
          defaultValue={contact?.name}
          bg={bg}
        />
      </FormControl>

      <FormControl isInvalid={errors.number} isRequired>
        <FormLabel>Phone</FormLabel>
        <Input
          type="tel"
          {...register('number')}
          defaultValue={contact?.number}
          bg={bg}
        />
      </FormControl>

      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button onClick={onCancel} variant="outline" colorScheme="teal">
          Cancel
        </Button>
        <Button
          isLoading={isSubmitting}
          type="submit"
          isDisabled={!isValid}
          colorScheme="teal"
        >
          Save
        </Button>
      </ButtonGroup>
    </VStack>
  );
};
