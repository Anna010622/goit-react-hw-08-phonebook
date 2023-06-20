import { useNavigate } from 'react-router-dom';

const {
  Heading,
  Center,
  Text,
  Flex,
  Button,
  Box,
  useColorModeValue,
  Avatar,
} = require('@chakra-ui/react');

const Home = () => {
  const navigate = useNavigate();

  const bookBg = useColorModeValue('teal.500', 'red.300');
  const color = useColorModeValue('white', 'red.300');
  return (
    <Flex
      h="80vh"
      w={{ base: '100%', md: '90%', lg: '80%' }}
      justifyContent="center"
      paddingLeft={{ md: '10%', lg: '20%' }}
      pb={6}
    >
      <Box display="flex" h="100%" w="100%">
        <Box w="90%" h="100%" bg={bookBg} borderRadius="10px" p={6}>
          <Center height="100%" flexDirection="column" minH="270px">
            <Avatar bg="transparent" size="2xl" />
            <Heading
              color={color}
              as="h1"
              mb={10}
              size={{ base: 'md', sm: '2xl', md: '2xl', lg: '2xl' }}
              fontFamily="Seymour One"
            >
              ContactBook
            </Heading>

            <Text
              mb={2}
              fontSize={{ base: 'sm', md: 'xl' }}
              textAlign="center"
              color={color}
            >
              Please log in to use this application
            </Text>
            <Flex gap={2}>
              <Button
                onClick={() => navigate('/login')}
                colorScheme="white"
                _hover={{ bg: 'teal.400' }}
              >
                Login
              </Button>
              <Button
                onClick={() => navigate('/register')}
                colorScheme="white"
                _hover={{ bg: 'teal.400' }}
              >
                Register
              </Button>
            </Flex>
          </Center>
        </Box>
        <Flex w="10%" flexDirection="column" justifyContent="space-evenly">
          <Center
            h="15%"
            w="100%"
            bg="cyan.200"
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
            bg="green.200"
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
            bg="red.200"
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
            bg="yellow.200"
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
