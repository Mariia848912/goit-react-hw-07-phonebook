import { useSelector } from 'react-redux';
import { List } from './ContactsList.styled';
import { useGetContactsQuery } from 'redux/api';
import { selectFilter } from 'redux/selectors';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { Loader } from 'components/Loader/Loader';
import { ErrorText } from 'components/ErrorText/ErrorText';

export const ContactsList = () => {
  const { data: contacts, isError, isLoading, isSuccess } = useGetContactsQuery();
const filter = useSelector(selectFilter);
  
  const getVisibleContacts = () => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
}
  let filterContacts = getVisibleContacts();
 
  return (
    <List>
{isLoading && <Loader />}
      {isSuccess &&filterContacts.map(({ id, name, phone }) => (
        <ContactsListItem key={id} id={id} name={name} phone={phone} />
      ))}
      {isError && <ErrorText />}
    </List>
  );
};
