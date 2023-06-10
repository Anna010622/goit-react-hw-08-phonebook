import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { formatContact } from 'utils';

export const ContactItem = ({ contact }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  return (
    <li key={contact.id}>
      <span>{contact.name}: </span>
      <span>{formatContact(contact.phone)}</span>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact.id));
          setIsDeleting(true);
        }}
        disabled={isDeleting}
      >
        {isDeleting ? <span>deleting...</span> : 'Delete'}
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
