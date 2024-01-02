import { configureStore } from "@reduxjs/toolkit";
import GetAllProductsReducer from "../slices/GetAllProducts";
export const store = configureStore({
  reducer: {
    AllProducts: GetAllProductsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
