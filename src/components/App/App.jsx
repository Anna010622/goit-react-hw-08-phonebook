import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { getError } from 'redux/selectors';
import { useEffect } from 'react';

export const App = () => {
  const error = useSelector(getError);

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong, please try again later');
    }
  }, [error]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer />
    </div>
  );
};
