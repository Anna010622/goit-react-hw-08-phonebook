import { Search2Icon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const bg = useColorModeValue('#ffffff', '#172a46');
  const boxShadow = useColorModeValue(
    '#086F83 0px 0px 10px',
    '#5ff0d0 0px 0px 10px'
  );
  return (
    <>
      {contacts.length !== 0 && (
        <FormControl mb={6}>
          <FormLabel fontSize="lg" fontWeight="600">
            Find contacts by name
          </FormLabel>
          <Input
            name="filter"
            type="text"
            value={filterValue}
            onChange={event => dispatch(setFilter(event.target.value))}
            pos="relative"
            bg={bg}
            boxShadow={boxShadow}
          />
          <Search2Icon
            pos="absolute"
            top="50%"
            transform="translateY(50%)"
            right="16px"
            zIndex={2}
          />
        </FormControl>
      )}
    </>
  );
};
