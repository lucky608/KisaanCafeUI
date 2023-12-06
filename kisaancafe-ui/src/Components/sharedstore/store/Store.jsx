import { configureStore } from "@reduxjs/toolkit";
import GetAllProductsReducer from "../slices/GetAllProducts"
export const store = configureStore({
    reducer: {
       GetAllProducts:GetAllProductsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
