import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export class ContactForm extends React.Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  createContact = () => {
    return {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
  };
  handleFormSubmit = event => {
    event.preventDefault();

    if (
      this.props.contacts.find(
        contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
      )
    ) {
      return alert(`${this.state.name} is already in contacts`);
    }

    this.props.onSubmit(this.createContact());
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.ContactForm} onSubmit={this.handleFormSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </label>

        <button className={css.ContactForm__Btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
