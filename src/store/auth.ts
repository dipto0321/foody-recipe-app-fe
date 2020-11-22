import { createSlice } from '@reduxjs/toolkit';

import { apiCallBegan } from './api';
import { SignIn, SignUp } from '../configs/types/auth';

const slice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    loading: false,
  },
  reducers: {
    authLoginRequested: (auth, action) => {
      auth.loading = true;
    },
    authLoginSuccess: (auth, action) => {
      auth.isAuthenticated = true;
      auth.loading = false;
    },
    authLoginFailed: (auth, action) => {
      auth.loading = false;
    },
    authLoggedOut: (auth, action) => {
      auth.isAuthenticated = false;
    },
    authSignUpRequested: (auth, action) => {
      auth.loading = true;
    },
    authSignUpSuccess: (auth, action) => {
      auth.loading = false;
    },
  },
});

export const {
  authLoggedOut,
  authLoginRequested,
  authSignUpRequested,
  authLoginSuccess,
  authSignUpSuccess,
  authLoginFailed,
} = slice.actions;
export default slice.reducer;

// Action creators
const url = '/user';

export const login = (user: SignIn) =>
  apiCallBegan({
    url: `${url}/token/`,
    method: 'post',
    data: user,
    onStart: authLoginRequested.type,
    onSuccess: authLoginSuccess.type,
    onError: authLoginFailed.type,
  });

export const signUp = (data: SignUp) =>
  apiCallBegan({
    url: `${url}/create/`,
    method: 'post',
    data,
    onStart: authSignUpRequested.type,
    onSuccess: authSignUpSuccess.type,
  });
