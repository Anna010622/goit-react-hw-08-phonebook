export const getContacts = state =>
  [...state.contacts.items].sort((a, b) => a.name.localeCompare(b.name));
export const getLoading = state => state.contacts.isLoading;
export const getFilter = state => state.filter.value;
