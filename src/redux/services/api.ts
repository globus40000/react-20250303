import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config";
import {
  Identifier,
  IDishNormalized,
  IRestaurantNormalized,
  IReviewNormalized,
  IUserNormalized,
} from "../../types";

export type IAddReviewBody = Omit<IReviewNormalized, "id">;

interface IAddReviewArg {
  restaurantId: Identifier;
  review: IAddReviewBody;
}

export type IUpdateReviewBody = Partial<
  Omit<IReviewNormalized, "id" | "userId">
>;

interface IUpdateReviewArg {
  reviewId: Identifier;
  fields: IUpdateReviewBody;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ["reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query<IRestaurantNormalized[], unknown>({
      query: () => "/restaurants",
    }),
    getUsers: builder.query<IUserNormalized[], unknown>({
      query: () => "/users",
    }),
    getReviewsForRestaurant: builder.query<IReviewNormalized[], Identifier>({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: [{ type: "reviews", id: "all" }],
    }),
    addReview: builder.mutation<IReviewNormalized, IAddReviewArg>({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        body: review,
        method: "POST",
      }),
      invalidatesTags: [{ type: "reviews", id: "all" }],
    }),
    updateReview: builder.mutation<IReviewNormalized, IUpdateReviewArg>({
      query: ({ reviewId, fields }) => ({
        url: `/review/${reviewId}`,
        body: fields,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "reviews", id: "all" }],
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
  useAddReviewMutation,
  useUpdateReviewMutation,
  useGetDishesForRestaurantQuery,
  useGetDishByIdQuery,
} = api;
