import { useDispatch, useSelector } from 'react-redux';
import { List, ItemContact, Button } from './ContactsList.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <ItemContact key={id}>
          {name}: {phone}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </ItemContact>
      ))}
    </List>
  );
};
