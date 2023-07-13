import {createAsyncThunk} from '@reduxjs/toolkit';
import constant from '../../../Constant/baseApi';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  constant.BASE_URL + 'products?',
  async (limit, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        constant.BASE_URL + 'products?limit=' + limit,
      );
      console.log('Product Data====>', response);
      return response.data?.products;
    } catch (error) {
      console.log('Error occured in fetchProducts', error);
      return rejectWithValue(error);
    }
  },
);
