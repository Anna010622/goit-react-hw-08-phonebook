import PropTypes from 'prop-types';
import { formatContact } from 'utils';

export const ContactList = ({ getContacts, onDeleteContact }) => {
  return (
    <ul>
      {getContacts().map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name}: </span>
            <span>{formatContact(contact.number)}</span>
            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  getContacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
