export const selectContacts = state =>
  [...state.contacts.items].sort((a, b) => a.name.localeCompare(b.name));
export const selectContactsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;

export const selectFilter = state => state.filter.value;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectUser = state => state.auth.user;
export const selectAuthLoading = state => state.auth.isLoading;
