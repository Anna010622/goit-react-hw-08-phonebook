import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { getContacts, getFilter, getLoading } from 'redux/selectors';
import { formatContact } from 'utils';

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
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul>
      {getVisibleContacts().map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name}: </span>
            <span>{formatContact(contact.phone)}</span>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
              disabled={isLoading}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
