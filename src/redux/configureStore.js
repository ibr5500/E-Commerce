import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import registerReducer from './users/registerSlice';

const logger = createLogger();

const store = configureStore({
  reducer: {
    users: registerReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
