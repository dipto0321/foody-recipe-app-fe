import { createSlice } from '@reduxjs/toolkit';

import { apiCallBegan } from './api';
import { SignIn } from '../configs/types/auth';

const slice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    loading: false,
  },
  reducers: {
    authRequested: (auth, action) => {
      auth.loading = true;
    },
    authSuccess: (auth, action) => {
      auth.isAuthenticated = true;
      auth.loading = false;
    },
    authRemove: (auth, action) => {
      auth.isAuthenticated = false;
    },
    authRequestFailed: (auth, action) => {
      auth.isAuthenticated = false;
      auth.loading = false;
    },
  },
});

export const {
  authRequested,
  authSuccess,
  authRemove,
  authRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action creators
const url = '/user';

export const login = (user: SignIn) =>
  apiCallBegan({
    url: `${url}/token/`,
    method: 'post',
    data: user,
    onStart: authRequested.type,
    onSuccess: authSuccess.type,
    onError: authRequestFailed.type,
  });
