import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; //[] this wont work
    },
  },
});

export const { addItem, removItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
