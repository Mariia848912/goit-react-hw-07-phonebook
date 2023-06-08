import { Container } from './Container/Container';
import { FormContacts } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <FormContacts />

      <h2>Contacts</h2>

      <Filter />
      <ContactsList />
    </Container>
  );
}
