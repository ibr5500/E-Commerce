import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import baseURL from '../api';

const initialState = {
  register: [],
  login: [],
  error: '',
};

export const createNewUser = createAsyncThunk('register/createNewUser', async (userInfo) => {
  const res = await fetch(`${baseURL}/users`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .catch((error) => console.error(error));
  return res;
});

export const updateUser = createAsyncThunk('update/updateUser', async (id, userInfo) => {
  const res = await fetch(`${baseURL}/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .catch((error) => console.error(error));
  return res;
});

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

const userSlice = createSlice({
  name: 'user',
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

    builder.addCase(loginUser.fulfilled, (state, action) => {
      const result = action.payload;
      const stateFulfilled = state;
      stateFulfilled.login = result;
      if (result) sessionStorage.setItem('userToken', result.token);
    });

    builder.addCase(loginUser.pending, () => {
      console.log('Loading ....');
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.error = action.error.message;
    });
  },
});

const userReducer = userSlice.reducer;
export default userReducer;
