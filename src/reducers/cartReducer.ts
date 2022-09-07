import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../components/Products';

type CartProductType = ProductType&{
    quantity: number;
    price: number;
    color: string;
    size: string
}

export interface CartState {
  products: CartProductType[];
  quantity: number;
  total: number;
}

const initialState: CartState = {
  products: [],
  quantity: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload)
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
