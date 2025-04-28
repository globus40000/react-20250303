import { configureStore } from "@reduxjs/toolkit";
import { dishesSlice } from "./entities/dish/slice";
import { cartSlice } from "./entities/cart/slice";
import { requestsSlice } from "./entities/request/slice";
import { api } from "./services/api";

export const store = configureStore({
  reducer: {
    [dishesSlice.name]: dishesSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestsSlice.name]: requestsSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware),
});

export type IRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
