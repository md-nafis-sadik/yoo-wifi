import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./module/api/apiSlice";
import authSlice from "./module/auth/authSlice";
import sharedSlice from "./module/shared/sharedSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    shared: sharedSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
