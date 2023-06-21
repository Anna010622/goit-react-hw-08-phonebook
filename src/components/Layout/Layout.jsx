import { Box, Center, CircularProgress, Container } from '@chakra-ui/react';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
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
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
};
