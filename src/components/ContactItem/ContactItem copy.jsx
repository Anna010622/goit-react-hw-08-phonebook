import { DeleteIcon } from '@chakra-ui/icons';
import { Button, CircularProgress, Flex, Td, Tr } from '@chakra-ui/react';
import { PopoverForm } from 'components/Popover/Popover';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { formatContact } from 'utils';

export const ContactItem = ({ contact }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Tr key={contact.id}>
        <Td p={{ base: '5px', md: '8px' }}>{contact.name}</Td>
        <Td p={{ base: '5px', md: '8px' }}>{formatContact(contact.number)}</Td>
        <Td p={{ base: '5px', md: '8px' }}>
          <Flex gap="2" alignItems="center" justifyContent="flex-end">
            <PopoverForm contact={contact} />
            <Button
              type="button"
              onClick={() => {
                dispatch(deleteContact(contact.id));
                setIsDeleting(true);
              }}
              disabled={isDeleting}
              p={0}
              w={8}
              h={8}
              variant="outline"
              colorScheme="teal"
            >
              {isDeleting ? (
                <CircularProgress
                  isIndeterminate
                  color="teal.800"
                  size="16px"
                />
              ) : (
                <DeleteIcon boxSize={4} p="0" />
              )}
            </Button>
          </Flex>
        </Td>
      </Tr>
    </>
    // <li key={contact.id}>
    //   <span>{contact.name}: </span>
    //   <span>{formatContact(contact.number)}</span>
    //   <PopoverForm contact={contact} />
    //   <button
    //     type="button"
    //     onClick={() => {
    //       dispatch(deleteContact(contact.id));
    //       setIsDeleting(true);
    //     }}
    //     disabled={isDeleting}
    //   >
    //     {isDeleting ? <span>deleting...</span> : <DeleteIcon />}
    //   </button>
    // </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
