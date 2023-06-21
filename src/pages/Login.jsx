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
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';
import { selectAuthLoading } from 'redux/selectors';
import { useState } from 'react';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const schema = yup
  .object({
    email: yup.string().required().email().trim(),
    password: yup.string().required().trim().min(7),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthLoading);
  const navigate = useNavigate();
  const toast = useToast();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(login(data))
      .unwrap()
      .catch(() =>
        toast({
          title: `Email or password is incorrect`,
          isClosable: true,
          position: 'top-right',
          status: 'error',
          duration: 3000,
        })
      );
  };

  const bg = useColorModeValue('gray.100', '#0a192f');
  const iconBg = useColorModeValue('teal.800', 'teal.500');

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
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EmailIcon color={iconBg} />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="Enter your email"
            _placeholder={{ opacity: 0.5, color: 'inherit' }}
            {...register('email')}
            bg={bg}
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.password} isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            _placeholder={{ opacity: 0.5, color: 'inherit' }}
            {...register('password')}
            bg={bg}
          />
          <InputLeftElement pointerEvents="none">
            <LockIcon color={iconBg} />
          </InputLeftElement>
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={handleClick}
              background="transparent"
            >
              {show ? (
                <ViewOffIcon color={iconBg} />
              ) : (
                <ViewIcon color={iconBg} />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
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
        Don't have an account yet? Register
      </Button>
    </VStack>
  );
};

export default Login;
