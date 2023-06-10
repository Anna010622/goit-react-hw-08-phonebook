import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addContact } from 'redux/operations';
import { getContacts, getLoading } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';

const schema = yup
  .object({
    name: yup
      .string()
      .required('Name is required')
      .min(3, 'Name must be no less than 3 characters long')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces'
      ),
    phone: yup
      .string()
      .transform(currentValue => currentValue.replace(/\D+/g, ''))
      .min(7, 'Number phone must be no less than 7 characters long')
      .max(12, 'Number phone must be no more than 12 digits')
      .required('Number is required')
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      ),
  })
  .required();

export const ContactForm = () => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    if (!isLoading) {
      setIsClicked(false);
    }
  }, [isLoading]);

  const { register, handleSubmit, reset, formState } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ name, phone }) => {
    setIsClicked(true);
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.warn(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, phone }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input type="text" {...register('name')} />
        {formState.errors.name && <p>{formState.errors.name.message}</p>}
      </div>

      <div>
        <label>Phone</label>
        <input type="tel" {...register('phone')} />
        {formState.errors.phone && <p>{formState.errors.phone.message}</p>}
      </div>

      <button
        type="submit"
        disabled={(isLoading && isClicked) || !formState.isValid}
      >
        <span>Add contact</span>
        {isLoading && isClicked && (
          <RotatingLines strokeColor="grey" width="20px" />
        )}
      </button>
    </form>
  );
};
