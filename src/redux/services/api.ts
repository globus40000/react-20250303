import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config";
import { IRestaurantNormalized } from "../../types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<IRestaurantNormalized[], unknown>({
      query: () => "/restaurants",
    }),
  }),
});

export const { useGetRestaurantsQuery, useLazyGetRestaurantsQuery } = api;
