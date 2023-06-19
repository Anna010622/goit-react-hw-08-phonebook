import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Heading,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { signup } from 'redux/auth/authOperations';

const schema = yup
  .object({
    name: yup
      .string()
      .required()
      .trim()
      .min(3, 'Name must be no less than 3 characters long')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces'
      ),
    email: yup.string().required().email().trim(),
    password: yup.string().required().trim().min(7),
  })
  .required();

const Register = () => {
  const bg = useColorModeValue('gray.100', '#0a192f');

  // const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {}, []);
  // const contacts = useSelector(getContacts);
  // const isLoading = useSelector(getLoading);

  // useEffect(() => {
  //   if (!isLoading) {
  //     setIsClicked(false);
  //   }
  // }, [isLoading]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(signup(data))
      .unwrap()
      .then(() => toast.success(`Registration is successfully`))
      .catch(() => toast.error(`User with this email address already exists`));
  };

  return (
    <VStack
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      mx="auto"
      w={{ base: '90%', md: 500 }}
      p="4"
    >
      <Heading>Registration</Heading>

      <FormControl isInvalid={errors.name} isRequired>
        <FormLabel>Name</FormLabel>
        <Input type="text" {...register('name')} bg={bg} />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.email} isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" {...register('email')} bg={bg} />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.password} isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" {...register('password')} bg={bg} />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        variant="outline"
        colorScheme="teal"
        isLoading={isSubmitting}
      >
        Sign Up
      </Button>

      <Button
        onClick={() => navigate('/login')}
        colorScheme="teal"
        variant="ghost"
      >
        Login
      </Button>
    </VStack>
  );
};

export default Register;
