import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config";
import {
  Identifier,
  IDishNormalized,
  IRestaurantNormalized,
  IReviewNormalized,
  IUserNormalized,
} from "../../types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<IRestaurantNormalized[], unknown>({
      query: () => "/restaurants",
    }),
    getUsers: builder.query<IUserNormalized[], unknown>({
      query: () => "/users",
    }),
    getReviewsForRestaurant: builder.query<IReviewNormalized[], Identifier>({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
    }),
    getDishesForRestaurant: builder.query<IDishNormalized[], Identifier>({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getDishById: builder.query<IDishNormalized, Identifier>({
      query: (dishId) => `/dish/${dishId}`,
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetUsersQuery,
  useGetReviewsForRestaurantQuery,
  useGetDishesForRestaurantQuery,
  useGetDishByIdQuery,
} = api;
