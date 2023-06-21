import { Box, ListItem } from '@chakra-ui/react';
import { PopoverForm } from 'components/Popover/Popover';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { formatContact } from 'utils';
import { WarningAlert } from '../AlertDialog/AlertDialog';

export const ContactItem = ({ contact }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    setIsDeleting(true);
  };

  return (
    <ListItem
      key={contact.id}
      paddingLeft={{ base: '12px', md: '35px', lg: '40px' }}
      paddingRight={{ base: '12px', md: '20px' }}
      paddingTop={1}
      paddingBottom={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box flexBasis="40%">{contact.name}: </Box>
      <Box flexBasis="40%">{formatContact(contact.number)}</Box>
      <Box
        flexBasis="20%"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        gap={{ base: '5px', md: '10px' }}
      >
        <PopoverForm contact={contact} />
        <WarningAlert onClick={handleDelete} isDeleting={isDeleting} />
      </Box>
    </ListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
