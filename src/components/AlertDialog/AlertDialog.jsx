import { DeleteIcon } from '@chakra-ui/icons';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  CircularProgress,
  useDisclosure,
} from '@chakra-ui/react';
import { PropTypes } from 'prop-types';
import { useRef } from 'react';

export const WarningAlert = ({ onClick, isDeleting }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <>
      <Button
        type="button"
        onClick={onOpen}
        disabled={isDeleting}
        colorScheme="teal"
        variant="outline"
        w={8}
        h={8}
        _hover={{ bg: 'teal.100' }}
        _focus={{ bg: 'teal.100' }}
      >
        {isDeleting ? (
          <CircularProgress isIndeterminate color="teal.800" size="16px" />
        ) : (
          <DeleteIcon color={'teal.700'} />
        )}
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} colorScheme="teal">
              No
            </Button>
            <Button
              colorScheme="red"
              isLoading={isDeleting}
              ml={3}
              onClick={onClick}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

WarningAlert.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDeleting: PropTypes.bool,
};
