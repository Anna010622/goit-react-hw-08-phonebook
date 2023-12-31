import { Avatar, Button, Flex, Heading } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectAuthLoading, selectUserName } from 'redux/selectors';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthLoading);

  return (
    <>
      <Flex gap={2} alignItems="center">
        <Avatar bg="teal.500" size="sm" />
        <Heading size="md">{userName}</Heading>
      </Flex>

      <Button
        type="button"
        onClick={() => dispatch(logout())}
        variant="outline"
        colorScheme="teal"
        isLoading={isLoading}
      >
        Log out
      </Button>
    </>
  );
};
