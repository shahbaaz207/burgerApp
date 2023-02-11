import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const addToItemsSlice = createSlice({
  name: "addToItems",
  initialState,
  reducers: {
    addToItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {},
  },
});

export const { addToItem, removeItem } = addToItemsSlice.actions;

export const selectItem = (state) => state.reducer.items;

export default addToItemsSlice;
