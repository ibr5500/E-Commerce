import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import baseURL from '../api';

const initialState = {
  register: [],
  error: '',
};

export const createNewUser = createAsyncThunk('register/createNewUser', (newUser) => {
  const res = fetch(`${baseURL}/users`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newUser),
  }).then((res) => res.json());
  return res;
});

const registerSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      const stateFulfilled = state;
      stateFulfilled.register = action.payload;
    });

    builder.addCase(createNewUser.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.error = action.error.message;
    });
  },
});

const registerReducer = registerSlice.reducer;
export default registerReducer;
