import { Center, CircularProgress, Container } from '@chakra-ui/react';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

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
      <main>
        <Suspense
          fallback={
            <Center>
              <CircularProgress isIndeterminate color="teal.800" />
            </Center>
          }
        >
          <Outlet />
        </Suspense>
        <ToastContainer />
      </main>
    </Container>
  );
};
