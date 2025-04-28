import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config";
import {
  Identifier,
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
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetUsersQuery,
  useGetReviewsForRestaurantQuery,
} = api;
