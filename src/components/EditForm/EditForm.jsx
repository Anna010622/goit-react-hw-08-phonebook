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
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';

export const EditForm = ({ onCancel, contact }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
  const toast = useToast();
  const dispatch = useDispatch();

  const onSubmit = data => {
    const { name, number } = data;
    dispatch(updateContact({ id: contact.id, body: { name, number } }))
      .unwrap()
      .then(() => {
        toast({
          title: `Contact updated`,
          variant: 'subtle',
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
          variant: 'subtle',
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
        {/*  */}
        {/* <FormErrorMessage>
          {errors.name && toast.error(`${errors.name.message}`)}
        </FormErrorMessage> */}
      </FormControl>

      <FormControl isInvalid={errors.number} isRequired>
        <FormLabel>Phone</FormLabel>
        <Input
          type="tel"
          {...register('number')}
          defaultValue={contact?.number}
          bg={bg}
        />
        {/* <FormErrorMessage>
          <Box>{errors.number && errors.number.message}</Box>
        </FormErrorMessage> */}
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
