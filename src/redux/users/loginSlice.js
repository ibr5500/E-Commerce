import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import baseURL from '../api';

const initialState = {
  login: [],
  error: '',
};

export const loginUser = createAsyncThunk('login/loginUser', (currentUser) => {
  const res = fetch(`${baseURL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  return res;
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const stateFulfilled = state;
      stateFulfilled.login = action.payload;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.error = action.error.message;
    });
  },
});

const loginReducer = loginSlice.reducer;
export default loginReducer;
