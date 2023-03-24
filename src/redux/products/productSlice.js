import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import baseURL from '../api';

const initialState = {
  products: [],
  error: '',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch(`${baseURL}/products`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const stateFulfilled = state;
      stateFulfilled.data = action.payload;
    });

    builder.addCase(fetchProducts.pending, () => {
      console.log('Loading ....');
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.error = action.error.message;
    });
  },
});

const productReducer = productSlice.reducer;
export default productReducer;
