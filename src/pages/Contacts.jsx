import { Box } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  return (
    <>
      <Box display={{ lg: 'flex' }} gap={8} alignItems="flex-start">
        <ContactForm />
        <Box flexGrow={1}>
          {/* <Heading fontSize="3em" mb={6}>
            Contacts
          </Heading> */}
          <Filter />
          <ContactList />
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
