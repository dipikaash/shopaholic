import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_ITEMS = 'GET_ITEMS';
const hostname = 'http://localhost:4000';
const initialState = {
  productList: [],
  cart: [],
  totalBill: 0,
  orderedItems: []
};
export const fetchProductList = createAsyncThunk(
  'counter/fetchCount',
  async (state, action) => {
    const res = await fetch(`${hostname}/products/`, { method: 'GET' });
    const data = await res.json();
    return data;
  }
);
export const products = createSlice({
  name: GET_ITEMS,
  initialState,
  reducers: {
    DeleteFromCart: (state, inputs) => {
      state.cart = state.cart.filter(
        (el) => el.id !== inputs.payload.id
      );
    },
    AddToCart: (state, inputs) => {
      let oldCart = state.cart;
      let existingItem = oldCart.find((item) => item.id === inputs.payload.id)
      if (existingItem)
        window.alert("Item already added to cart, update the quantity in cart")
      else {
        const newCart = [...oldCart, inputs.payload];
        state.cart = newCart;
      }
    },
    CartItemIncrement: (state, inputs) => {
      state.cart.forEach((item) => {
        if (item.id === inputs.payload.id)
          item.count = item.count + 1;
      })
    },
    CartItemDecrement: (state, inputs) => {
      state.cart.forEach((item) => {
        if (item.id === inputs.payload.id)
        if(item.count>1)
          item.count = item.count - 1;
        else
         window.alert("minimum amount can't be reduced, try removing item");
      })
    },
    CartBill: (state, inputs) => {
      let total = 0;
      inputs.payload.forEach((item) => total = total + item.count * item.price);
      state.totalBill = total;
    },
    ConfirmOrder: (state, inputs) => {
      state.orderedItems = JSON.parse(JSON.stringify(state.cart));
      state.cart = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
  },
});
export const { DeleteFromCart, AddToCart, CartItemDecrement, CartItemIncrement, CartBill, ConfirmOrder } = products.actions;