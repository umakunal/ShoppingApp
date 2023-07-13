import {createSlice, createAs} from '@reduxjs/toolkit';
import {fetchProducts} from '../../Api/ProductApi/fetchProduct';

const initialState = {
  isLoading: false,
  error: '',
  productData: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.productData = action.payload;
    },
    getProductsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productData = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {getProducts, getProductsSuccess, getProductsError} =
  productSlice.actions;

export default productSlice.reducer;
