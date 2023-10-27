import React from 'react';
import Contacts from './ContactItem.syled';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/createSliceContacts';
import { useEffect } from 'react';
import { fetchTasks, deleteContact } from '../../redux/operations';

const ContactItems = () => {
  const contacts = useSelector(getContacts);
  console.log(useSelector(state => state.contacts.items));
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  // console.log(useSelector(state => state));

  // const { items, isLoading, error } = useSelector(getContacts);
  // console.log(items, isLoading, error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    console.log(contacts);
    return contacts;
    // console.log(contacts);
    // return contacts.filter(contact => {
    //   return contact.name.toLowerCase().includes(filter.toLowerCase());
    // });
  };

  return (
    <>
      {!!getFilteredContacts() > 0 && (
        <Contacts>
          {getFilteredContacts().map(el => {
            return (
              <li key={el.id}>
                {el.name}: {el.phone}
                <button onClick={() => handleDelete(el.id)}>Delete</button>
              </li>
            );
          })}
        </Contacts>
      )}
      <p></p>
    </>
  );
};

export default ContactItems;
