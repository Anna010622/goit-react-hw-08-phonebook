import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { getContacts, getFilter, getLoading } from 'redux/selectors';
import {
  Center,
  CircularProgress,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    let normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact?.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const bg = useColorModeValue('#ffffff', '#172a46');
  const boxShadow = useColorModeValue(
    '#086F83 0px 0px 10px',
    '#5ff0d0 0px 0px 10px'
  );
  const color = useColorModeValue('gray.600', '#5ff0d0');

  return (
    <div>
      {/* {error && <p>Something went wrong, please try again later</p>} */}
      {contacts.length === 0 && isLoading && (
        <Center>
          <CircularProgress isIndeterminate color="teal.800" />
        </Center>
      )}

      {contacts.length === 0 && !isLoading && (
        <Text textAlign="center" fontSize="2xl">
          There are no contacts yet. Please add a new contact
        </Text>
      )}
      {getVisibleContacts().length === 0 && contacts.length !== 0 && (
        <Text>There is no such contact</Text>
      )}

      {contacts.length !== 0 && getVisibleContacts().length > 0 && (
        // <ul>
        //   {getVisibleContacts().map(contact => {
        //     return <ContactItem key={contact.id} contact={contact} />;
        //   })}
        //   </ul>
        <TableContainer
          borderRadius={10}
          mb={6}
          boxShadow={boxShadow}
          p={4}
          bg={bg}
        >
          <Table colorScheme={color} overflow="hidden" size="sm">
            <Thead
              fontWeight="600"
              fontSize={8}
              borderBottom="2px solid"
              borderColor={color}
            >
              <Tr borderColor="teal.600">
                <Th>
                  <Text fontSize={16} color={color}>
                    Name
                  </Text>
                </Th>
                <Th colSpan="2">
                  <Text fontSize={16} color={color}>
                    Phone number
                  </Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {getVisibleContacts().map(contact => {
                return <ContactItem key={contact.id} contact={contact} />;
              })}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
