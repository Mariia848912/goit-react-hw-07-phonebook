import { useSelector } from 'react-redux';
import { List, ItemContact, Button } from './ContactsList.styled';
import {  useDeleteContactMutation, useGetContactsQuery } from 'redux/api';
import { selectFilter } from 'redux/selectors';

export const ContactsList = () => {
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(selectFilter);
    const filterContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter)
  );
  
  return (
                 <List>
      {filterContacts.map(({ id, name, phone }) => (
        <ItemContact key={id}>
          {name}: {phone}
          <Button type="button" onClick={() => deleteContact(id)}>
            Delete
          </Button>
        </ItemContact>
      ))}
      </List>
         
   
  );
};
