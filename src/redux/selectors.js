export const getContacts = state =>
  [...state.contacts.items].sort((a, b) => a.name.localeCompare(b.name));
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter.value;

// export const selectAccessToken = state => state.auth.access_token;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectUser = state => state.auth.user;

// const authSelectors = {
//   selectIsLoggedIn,
//   getUserName,
// };
// export default authSelectors;
