import { configureStore } from "@reduxjs/toolkit";
import { addToItemsSlice } from "../slice";

export const store = configureStore({
  reducer: addToItemsSlice,
});
