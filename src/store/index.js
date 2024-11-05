import { configureStore } from "@reduxjs/toolkit";
import aboutSlice from "./module/about/aboutSlice";
import { apiSlice } from "./module/api/apiSlice";
import authSlice from "./module/auth/slice";
import howItWorksReducer from "./module/howItWorks/HowItWorksSlice";
import pocketWifiSlice from "./module/pocketWifi/slice";
import routerSlice from "./module/router/slice";
import sharedSlice from "./module/shared/sharedSlice";
import testimonialsSlice from "./module/testimonials/testimonialsSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    pocketWifi: pocketWifiSlice,
    router: routerSlice,
    shared: sharedSlice,
    testimonials: testimonialsSlice,
    howItWorks: howItWorksReducer,
    about: aboutSlice,
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
          "router.features",
          "router.cart.startDate",
          "pocketWifi.cart.startDate",
          "howItWorks",
        ],
      },
    }).concat(apiSlice.middleware),
});
