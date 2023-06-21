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
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Avatar,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { signup } from 'redux/auth/authOperations';
import { selectAuthLoading } from 'redux/selectors';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectAuthLoading);
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
    dispatch(signup(data))
      .unwrap()
      .then(() =>
        toast({
          title: `Registration is successfully`,
          isClosable: true,
          position: 'top-right',
          status: 'success',
          duration: 3000,
        })
      )
      .catch(() =>
        toast({
          title: `User with this email address already exists`,
          isClosable: true,
          position: 'top-right',
          status: 'error',
          duration: 3000,
        })
      );
  };

  const bg = useColorModeValue('teal.50', '#0a192f');
  const iconBg = useColorModeValue('teal.800', 'teal.500');

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
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Avatar bg={iconBg} size="xs" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Enter your name"
            _placeholder={{ opacity: 0.5, color: 'inherit' }}
            {...register('name')}
            bg={bg}
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

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
