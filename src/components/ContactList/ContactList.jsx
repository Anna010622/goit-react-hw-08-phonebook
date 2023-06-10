import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts, getFilter, getLoading } from 'redux/selectors';
import { RotatingLines } from 'react-loader-spinner';

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
    <div>
      {/* {error && <p>Something went wrong, please try again later</p>} */}
      {contacts.length === 0 && isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      {contacts.length === 0 ? (
        <p>There is no contacts yet.</p>
      ) : (
        <ul>
          {getVisibleContacts().map(contact => {
            return <ContactItem key={contact.id} contact={contact} />;
          })}
        </ul>
      )}
    </div>
  );
};
