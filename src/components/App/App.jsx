import { useState, useEffect, useRef } from 'react';
import previousContacts from '../../data/previousContacts';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(previousContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleInputChange = event => {
    setFilter(event.target.value);
  };

  const handleAddContact = contact => {
    setContacts(prevState => [...prevState, contact]);
  };

  const handleDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const getVisibleContacts = () => {
    let normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={handleAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleInputChange} />
      <ContactList
        getContacts={getVisibleContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
