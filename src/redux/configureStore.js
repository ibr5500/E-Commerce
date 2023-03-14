import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import registerReducer from './users/registerSlice';
import loginReducer from './users/loginSlice';

const logger = createLogger();

const store = configureStore({
  reducer: {
    users: registerReducer,
    login: loginReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
