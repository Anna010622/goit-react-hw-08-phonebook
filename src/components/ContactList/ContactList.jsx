import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectContactsLoading,
  selectFilter,
} from 'redux/selectors';
import {
  Box,
  Center,
  CircularProgress,
  Heading,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectContactsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    let normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact?.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const stickyHeaders = getVisibleContacts()
    .map(contact => contact.name[0].toUpperCase())
    .filter((el, index, array) => array.indexOf(el) === index);

  const createContactGroup = el => {
    const contactGroup = getVisibleContacts().filter(
      contact => contact.name[0].toUpperCase() === el
    );
    return contactGroup;
  };

  const bg = useColorModeValue('teal.100', '#172a46');

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
        <Box position="relative">
          <List position="relative">
            {stickyHeaders.map(el => (
              <ListItem key={`section-${el}`}>
                <List>
                  <Heading
                    position="sticky"
                    top="15px"
                    bg={bg}
                    paddingLeft="5px"
                    opacity="0.8"
                    borderRadius="5px"
                  >
                    {el}
                  </Heading>
                  <Box>
                    {createContactGroup(el).map(contact => (
                      <ContactItem key={contact.id} contact={contact} />
                    ))}
                  </Box>
                </List>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </div>
  );
};
