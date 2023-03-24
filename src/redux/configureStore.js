import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import userReducer from './users/userSlice';
import productReducer from './products/productSlice';

const logger = createLogger();

const store = configureStore({
  reducer: {
    users: userReducer,
    products: productReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
