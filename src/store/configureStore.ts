import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './rootReducer';
import api from './middleware/api';

export default () =>
  configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger, api],
    devTools: process.env.NODE_ENV !== 'production',
  });
