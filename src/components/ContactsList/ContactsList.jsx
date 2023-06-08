import { useDispatch, useSelector } from 'react-redux';
import { List, ItemContact, Button } from './ContactsList.styled';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ItemContact key={id}>
          {name}: {number}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </ItemContact>
      ))}
    </List>
  );
};
