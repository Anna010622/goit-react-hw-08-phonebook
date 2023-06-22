import { Box, Center, CircularProgress, Container } from '@chakra-ui/react';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectAuthLoading } from 'redux/selectors';

export const Layout = () => {
  const isLoading = useSelector(selectAuthLoading);

  return (
    <Container
      maxW={{
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }}
    >
      <Header />
      <Box as="main">
        <Suspense
          fallback={
            <Center>
              <CircularProgress isIndeterminate color="teal.800" />
            </Center>
          }
        >
          {!isLoading && <Outlet />}
        </Suspense>
      </Box>
    </Container>
  );
};
