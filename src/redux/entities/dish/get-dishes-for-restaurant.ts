import { createAsyncThunk } from "@reduxjs/toolkit";
import { Identifier, IDishNormalized } from "../../../types";
import { API_BASE_URL } from "../../../config";

export const getDishesForRestaurant = createAsyncThunk<
  IDishNormalized[],
  Identifier,
  {
    rejectValue: string;
  }
>(
  "dishesSlice/getDishesForRestaurant",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `${API_BASE_URL}/dishes?restaurantId=${restaurantId}`
    );
    const result = (await response.json()) as IDishNormalized[];

    if (!result.length) {
      return rejectWithValue("No data");
    }

    return result;
  }
);
