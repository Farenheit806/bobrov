import { createSlice } from "@reduxjs/toolkit";
import { productList } from "../products/products";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    selectedProducts: [],
    counter: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      var isExist = false;
      state.selectedProducts.map((product) => {
        if (product.id === action.payload.id) {
          product.amount++;
          state.counter++;
          isExist = true;
        }
      });
      if (!isExist) {
        action.payload.amount = 1;
        state.counter++;
        state.selectedProducts.push(action.payload);
      }
    },
    decrementAmount: (state, action) => {
      state.selectedProducts.map((product) => {
        if (product.id == action.payload) {
          if (product.amount > 1) {
            product.amount--;
            state.counter--;
          } else {
            const index = state.selectedProducts.indexOf(product);
            state.counter -= product.amount;
            state.selectedProducts.splice(index, 1);
          }
        }
      });
    },
    incrementAmount: (state, action) => {
      state.selectedProducts.map((product) => {
        if (product.id == action.payload && product.amount < 20) {
          product.amount++;
          state.counter++;
        }
      });
    },
    removeProduct: (state, action) => {
      state.selectedProducts.map((product) => {
        if (product.id == action.payload) {
          const index = state.selectedProducts.indexOf(product);
          state.counter -= product.amount;
          state.selectedProducts.splice(index, 1);
        }
      });
    },
  },
});

export const {
  addProductToCart,
  decrementAmount,
  incrementAmount,
  removeProduct,
} = cartSlice.actions;

export const selectSelectedProducts = (state) => state.cart.selectedProducts;
export const selectCounter = (state) => state.cart.counter;

export default cartSlice.reducer;
