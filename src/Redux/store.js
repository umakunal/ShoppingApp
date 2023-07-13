import {configureStore} from '@reduxjs/toolkit';
import ProductsReducer from '../Redux/Slices/Products/ProductSlice';

export default store = configureStore({
  reducer: {
    products: ProductsReducer,
  },
});
