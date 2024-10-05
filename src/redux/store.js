import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data/dataSlice";

export const store = configureStore({
  reducer: { dataReducer }, // Match the slice name (data) here
});
