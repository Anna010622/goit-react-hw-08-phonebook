import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/selectors';
import { HeaderNav, HeaderNavLink } from './Header.styled';
import { MobileMenu } from 'components/Drawer/Drawer';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('#ffffff', '#172a46');
  const boxShadow = useColorModeValue(
    '#086F83 0px 0px 10px',
    '#5ff0d0 0px 0px 10px'
  );
  return (
    <Flex
      as="header"
      alignItems="center"
      mb={6}
      bg={bg}
      borderRadius={10}
      p={4}
      boxShadow={boxShadow}
      gap={2}
    >
      <HeaderNav className="navigation">
        {!isLoggedIn ? (
          <HeaderNavLink to="/">
            <Heading size="md">Home</Heading>
          </HeaderNavLink>
        ) : (
          <HeaderNavLink to="/contacts">
            {' '}
            <Heading size="md">Contacts</Heading>
          </HeaderNavLink>
        )}
      </HeaderNav>

      <Spacer />

      <Flex display={{ base: 'none', md: 'flex' }} alignItems="center" gap={3}>
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </Flex>

      <Button
        type="button"
        onClick={toggleColorMode}
        variant="outline"
        colorScheme="teal"
      >
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>

      <Box display={{ md: 'none' }}>
        <MobileMenu>
          <Flex flexDirection="column" gap={3} alignItems="flex-start">
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Flex>
        </MobileMenu>
      </Box>
    </Flex>
  );
};
