import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  return (
    <>
      {contacts.length !== 0 && (
        <label>
          <p>Find contacts by name</p>
          <input
            name="filter"
            type="text"
            value={filterValue}
            onChange={event => dispatch(setFilter(event.target.value))}
          />
        </label>
      )}
    </>
  );
};
