import { useNavigate } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/react';

const {
  Heading,
  Center,
  Text,
  Flex,
  Button,
  Box,
  Avatar,
} = require('@chakra-ui/react');

const Home = () => {
  const navigate = useNavigate();

  const color = useColorModeValue('#ffffff', '#ffffff');
  const gradient = useColorModeValue(
    'linear(to-b, white, teal.200)',
    'linear(to-b, #172a46, teal.900)'
  );
  const blue = useColorModeValue('cyan.200', 'cyan.800');
  const green = useColorModeValue('green.200', 'green.700');
  const red = useColorModeValue('red.200', 'cyan.800');
  const yellow = useColorModeValue('yellow.200', 'green.700');
  return (
    <Flex
      h="80vh"
      w={{ base: '100%', md: '90%', xl: '70%' }}
      justifyContent="center"
      paddingLeft={{ md: '10%', lg: '20%' }}
      pb={6}
    >
      <Box display="flex" h="100%" w="100%">
        <Box
          w="90%"
          h="100%"
          bg={'teal.500'}
          borderRadius="10px"
          p={6}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="center"
          bgGradient={gradient}
          boxShadow="rgba(0, 0, 0, 0.3) 3px 3px 4px;"
        >
          <Center height="100%" flexDirection="column" minH="270px">
            <Avatar bg="transparent" size="2xl" />
            <Heading
              as="h1"
              mb={10}
              size={{ base: 'md', sm: 'xl', md: 'xl', lg: 'xl' }}
              fontFamily="Seymour One"
            >
              ContactBook
            </Heading>

            <Text mb={4} fontSize={{ base: 'sm', md: 'xl' }} textAlign="center">
              Please log in to use this application
            </Text>
            <Flex gap={2}>
              <Button onClick={() => navigate('/login')} colorScheme="teal">
                Login
              </Button>
              <Button onClick={() => navigate('/register')} colorScheme="teal">
                Register
              </Button>
            </Flex>
          </Center>
        </Box>

        <Flex
          w="7%"
          flexDirection="column"
          justifyContent="space-evenly"
          zIndex={-1}
        >
          <Center
            h="15%"
            w="100%"
            bg={blue}
            borderTopRightRadius="5px"
            borderBottomRightRadius="5px"
          >
            <Text fontSize="2em%" color={color} textAlign="center">
              A
            </Text>
          </Center>
          <Center
            h="15%"
            w="100%"
            bg={green}
            borderTopRightRadius="5px"
            borderBottomRightRadius="5px"
          >
            <Text fontSize="2em%" color={color} textAlign="center">
              B
            </Text>
          </Center>
          <Center
            h="15%"
            w="100%"
            bg={red}
            borderTopRightRadius="5px"
            borderBottomRightRadius="5px"
          >
            <Text fontSize="2em%" color={color} textAlign="center">
              C
            </Text>
          </Center>
          <Center
            h="15%"
            w="100%"
            bg={yellow}
            borderTopRightRadius="5px"
            borderBottomRightRadius="5px"
          >
            <Text fontSize="2em%" color={color} textAlign="center">
              D
            </Text>
          </Center>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;
