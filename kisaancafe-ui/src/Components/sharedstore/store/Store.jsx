import { configureStore } from "@reduxjs/toolkit";
import GetAllProductsReducer from "../slices/GetAllProducts";
import GetAllProductFromCartReducer from "../slices/CartProduct"
export const store = configureStore({
  reducer: {
    AllProducts: GetAllProductsReducer,
    AllProductInCart: GetAllProductFromCartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});