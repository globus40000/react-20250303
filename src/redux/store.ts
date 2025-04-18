import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurant/slice";
import { dishesSlice } from "./entities/dish/slice";
import { reviewsSlice } from "./entities/review/slice";
import { usersSlice } from "./entities/user/slice";
import { cartSlice } from "./entities/cart/slice";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
