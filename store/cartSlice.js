import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { PRODUCTS } from "../data";
// ("use strict");

let arr = [];
let newQty;
// const [ids, setIds] = useState();
const initialState = {
  num: 0,
  products: PRODUCTS,
  cart: [],
  cartNumber: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // let obj = [...action.payload];
      state.total = state.total + action.payload.price;
      if (!arr.includes(action.payload.id)) {
        newQty = 1;
        state.cart = [...state.cart, action.payload];
        state.cartNumber = state.cart.length;
        arr = [...arr, action.payload.id];
      } else {
        newQty = newQty + 1;
      }
      const tempItem = state.cart.find((item) => item.id === action.payload.id);
      if (tempItem) {
        const tempCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            let newTotalPrice = newQty * item.price;

            return {
              ...item,
              quantity: newQty,
              totalPrice: newTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.cart = tempCart;
        // console.log(state.cart);
      } else {
        // state.data.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      // const { productId } = action.payload;

      state.cart = state.cart.filter((product) => {
        return product.id !== action.payload.id;
      });

      state.cartNumber = state.cart.length;

      state.total = state.total - action.payload.totalPrice;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
