import { configureStore } from "@reduxjs/toolkit";
import riskReducer from "./risk/riskSlice";

export const store = configureStore({
  reducer: {
    risk: riskReducer,
  },
});
