import { createAsyncThunk } from "@reduxjs/toolkit";
import { Identifier, IReviewNormalized } from "../../../types";
import { API_BASE_URL } from "../../../config";

export const getReviewsForRestaurant = createAsyncThunk<
  IReviewNormalized[],
  Identifier,
  {
    rejectValue: string;
  }
>("reviewsSlice/getReviewsForRestaurant", async (restaurantId) => {
  const response = await fetch(
    `${API_BASE_URL}/reviews?restaurantId=${restaurantId}`
  );
  const result = (await response.json()) as IReviewNormalized[];

  return result;
});
