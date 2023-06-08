export const getFilter = state => state.filter;

export const getContacts = ({ contacts, filter }) => {
  const normalizedFilter = filter.value.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
