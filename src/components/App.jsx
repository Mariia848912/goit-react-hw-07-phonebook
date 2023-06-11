import { Container } from './Container/Container';
import { FormContacts } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { ErrorText } from './ErrorText/ErrorText';
import {  useGetContactsQuery } from 'redux/api';
 import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const { isLoading, isError } = useGetContactsQuery();
 
  return (
    <Container>
      <h1>Phonebook</h1>
      <FormContacts />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !isError && <Loader />}
      {!isLoading && !isError && <ContactsList />}
      {isError && <ErrorText />}
       </Container>
  );
}
