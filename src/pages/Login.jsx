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

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';

const schema = yup
  .object({
    email: yup.string().required().email().trim(),
    password: yup.string().required().trim().min(7),
  })
  .required();

const Login = () => {
  const bg = useColorModeValue('gray.100', '#0a192f');
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = data => {
    dispatch(login(data))
      .unwrap()
      .catch(() => toast.error(`Email or password is incorrect`));
  };

  return (
    <VStack
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      mx="auto"
      w={{ base: '90%', md: 500 }}
      p="4"
    >
      <Heading>Login to the account</Heading>

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
        Login
      </Button>

      <Button
        onClick={() => navigate('/register')}
        colorScheme="teal"
        variant="ghost"
      >
        Sign up
      </Button>
    </VStack>
  );
};

export default Login;
