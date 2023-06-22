import { extendTheme } from '@chakra-ui/react';
import abstract from './../images/abstract.svg';

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  styles: {
    global: props => ({
      body: {
        color: props.colorMode === 'dark' ? '#5ff0d0' : 'gray.600',
        backgroundColor: props.colorMode === 'dark' ? '#0a192f' : 'teal.50',
        backgroundImage:
          props.colorMode === 'dark'
            ? `linear-gradient(rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.9)), url( ${abstract})`
            : `linear-gradient(rgba(230, 255, 250, 0.9), rgba(230, 255, 250, 0.9)), url( ${abstract})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      },

      form: {
        backgroundColor: props.colorMode === 'dark' ? '#172a46' : '#ffffff',
        border: props.colorMode === 'dark' ? '1px solid #5ff0d0' : 'teal.800',
        boxShadow:
          props.colorMode === 'dark'
            ? '#5ff0d0 0px 0px 10px'
            : '#086F83 0px 0px 10px',
        borderRadius: '10px',
      },
      label: { fontFamily: `'Open Sans', sans-serif` },
    }),
  },
});
