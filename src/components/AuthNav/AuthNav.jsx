import { Heading } from '@chakra-ui/react';
import { HeaderNavLink } from 'components/Header/Header.styled';

export const AuthNav = () => {
  return (
    <>
      <HeaderNavLink to="/login">
        <Heading size="md">Login</Heading>
      </HeaderNavLink>
      <HeaderNavLink to="/register">
        <Heading size="md">Register</Heading>
      </HeaderNavLink>
    </>
  );
};
