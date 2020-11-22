import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './rootReducer';
import api from './middleware/api';

const middleware = [...getDefaultMiddleware(), logger, api];

export default () =>
  configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
  });
