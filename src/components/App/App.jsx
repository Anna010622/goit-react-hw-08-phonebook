import React from 'react';
import previousContacts from '../../data/previousContacts';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: previousContacts,
    filter: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleAddContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getVisibleContacts = () => {
    let normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          onSubmit={this.handleAddContact}
        />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleInputChange} />
        <ContactList
          getContacts={this.getVisibleContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
