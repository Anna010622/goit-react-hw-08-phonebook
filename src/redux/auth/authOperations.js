import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signup = createAsyncThunk('auth/signup', async (arg, thunkAPI) => {
  try {
    const response = await axios.post('/users/signup', arg);
    token.set(response.data.token);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const login = createAsyncThunk('auth/login', async (arg, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', arg);
    token.set(response.data.token);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (arg, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.access_token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
