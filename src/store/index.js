import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./module/api/apiSlice";
import authSlice from "./module/auth/slice";
import pocketWifiSlice from "./module/pocketWifi/slice";
import sharedSlice from "./module/shared/sharedSlice";
import testimonialsSlice from "./module/testimonials/testimonialsSlice";
import howItWorksReducer from "./module/howItWorks/HowItWorksSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    pocketWifi: pocketWifiSlice,
    shared: sharedSlice,
    testimonials: testimonialsSlice,
    howItWorks: howItWorksReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
