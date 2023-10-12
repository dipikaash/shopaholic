import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_ITEMS = 'GET_ITEMS';
const hostname = 'http://localhost:4000';
const initialState = {
  productList: [],
  cart: []
};
export const fetchProductList = createAsyncThunk(
    'counter/fetchCount',
    async (state, action) => {
      const res = await fetch(`${hostname}/products/`, { method: 'GET' });
      const data = res.json();
      return data;
    }
  );
  export const products = createSlice({
    name: GET_ITEMS,
    initialState,
    reducers: {
      DeleteFromCart: (state, id) => {
        state.cart = state.cart.filter(
          (el) => el.id !== id.payload
        );
      },
      AddToCart: (state, inputs) => {   
        let oldCart = state.cart;
        const newCart = [...oldCart,inputs.payload];
        state.cart= newCart;
      },
      CartItemIncrement: (state, inputs) => {
        state.cart.forEach((item)=>{
          if(item.id === inputs.payload.id)
          item.count = item.count + 1;
        })
      },
      CartItemDecrement: (state, inputs) => {
        state.cart.forEach((item)=>{
          if(item.id === inputs.payload.id)
          item.count = item.count - 1;
        })
      }      
    },
    extraReducers: (builder) => {
      builder.addCase(fetchProductList.fulfilled, (state, action) => {
        state.productList = action.payload;
      });
    },
  });
  export const { DeleteFromCart, AddToCart, CartItemDecrement, CartItemIncrement} = products.actions;