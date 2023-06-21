import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Heading,
  Button,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';
import { selectAuthLoading } from 'redux/selectors';

const schema = yup
  .object({
    email: yup.string().required().email().trim(),
    password: yup.string().required().trim().min(7),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const toast = useToast();

  const onSubmit = data => {
    dispatch(login(data))
      .unwrap()
      .catch(() =>
        toast({
          title: `Email or password is incorrect`,
          variant: 'subtle',
          isClosable: true,
          position: 'top-right',
          status: 'error',
          duration: 3000,
        })
      );
  };

  const bg = useColorModeValue('gray.100', '#0a192f');

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
        isLoading={isLoading}
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
