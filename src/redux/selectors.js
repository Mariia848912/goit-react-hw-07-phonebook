import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.value;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => {
  console.log('work');
  return state.contacts.items;
};

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (items, value) => {
    console.log('hy');
    const normalizedFilter = value.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
