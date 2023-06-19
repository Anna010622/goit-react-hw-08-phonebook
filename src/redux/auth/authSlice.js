import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signup, login, logout, currentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  access_token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.user = action.payload.user;
        state.access_token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.user = action.payload.user;
        state.access_token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.name = null;
        state.user.email = null;
        state.access_token = null;
        state.isLoggedIn = false;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addMatcher(
        isAnyOf(
          signup.pending,
          login.pending,
          logout.pending,
          currentUser.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          signup.rejected,
          login.rejected,
          logout.rejected,
          currentUser.rejected
        ),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
