import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsTotal } from "./slice";
import { API_BASE_URL } from "../../../config";
import { IRestaurantNormalized } from "../../../types";
import { IRootState } from "../../store";

export const getRestaurants = createAsyncThunk<
  IRestaurantNormalized[],
  undefined,
  { state: IRootState }
>(
  "restaurantsSlice/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE_URL}/restaurants`);
    const result = (await response.json()) as IRestaurantNormalized[];

    if (!result.length) {
      return rejectWithValue("No data");
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return !selectRestaurantsTotal(getState());
    },
  }
);
