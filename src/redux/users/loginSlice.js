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
    .catch((error) => console.error(error));
  return res;
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const result = action.payload;
      const stateFulfilled = state;
      stateFulfilled.login = result;
      if (result) {
        sessionStorage.setItem('Token', result.token);
      }
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.error = action.error.message;
    });
  },
});

const loginReducer = loginSlice.reducer;
export default loginReducer;
