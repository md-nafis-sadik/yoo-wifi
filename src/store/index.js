import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./module/api/apiSlice";
import authSlice from "./module/auth/slice";
import howItWorksReducer from "./module/howItWorks/HowItWorksSlice";
import pocketWifiSlice from "./module/pocketWifi/slice";
import sharedSlice from "./module/shared/sharedSlice";
import testimonialsSlice from "./module/testimonials/testimonialsSlice";
import aboutSlice from "./module/about/aboutSlice";
import contactSlice from "./module/contact/contactSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    pocketWifi: pocketWifiSlice,
    shared: sharedSlice,
    testimonials: testimonialsSlice,
    howItWorks: howItWorksReducer,
    about: aboutSlice,
    contact: contactSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [
          // "api/executeQuery/fulfilled",
        ],
        ignoredActionPaths: [
          "meta.baseQueryMeta.request",
          "meta.arg.originalArgs.data",
          "meta.baseQueryMeta.response",
          "payload",
        ],
        ignoredPaths: [
          "pocketWifi.features",
          "pocketWifi.cart.startDate",
          "howItWorks",
        ],
      },
    }).concat(apiSlice.middleware),
});
