import axios from 'axios';

export const deletingItem = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export const addNewContact = async newContactData => {
  const { data } = await axios.post(`/contacts/`, newContactData);
  return data;
};
