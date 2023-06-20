import { EditForm } from 'components/EditForm/EditForm';

const { EditIcon } = require('@chakra-ui/icons');
const {
  useDisclosure,
  Popover,
  PopoverTrigger,
  IconButton,
  PopoverContent,
  FocusLock,
  PopoverArrow,
  PopoverCloseButton,
} = require('@chakra-ui/react');

const { useRef } = require('react');

export const PopoverForm = ({ contact }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef(null);

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        closeOnBlur={true}
      >
        <PopoverTrigger>
          <IconButton
            w={8}
            h={8}
            icon={<EditIcon />}
            variant="outline"
            colorScheme="teal"
            _hover={{ bg: 'teal.100' }}
            _focus={{ bg: 'teal.100' }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <EditForm onCancel={onClose} contact={contact} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};
