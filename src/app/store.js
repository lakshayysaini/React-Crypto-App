import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoDetailsApi } from "../services/cryptoDetails";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [cryptoDetailsApi.reducerPath]: cryptoDetailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoApi.middleware,
      cryptoNewsApi.middleware,
      cryptoDetailsApi.middleware
    ),
});
