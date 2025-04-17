import { createAsyncThunk } from "@reduxjs/toolkit";
import { Identifier, IRestaurantNormalized } from "../../../types";
import { IRootState } from "../../store";
import { API_BASE_URL } from "../../../config";
import { selectRestaurantById } from "./slice";

export const getRestaurantById = createAsyncThunk<
  IRestaurantNormalized,
  Identifier,
  {
    state: IRootState;
    rejectValue: string;
  }
>(
  "restaurantsSlice/getRestaurantById",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE_URL}/restaurant/${restaurantId}`);

    if (Number(response.headers.get("content-length")) === 0) {
      return rejectWithValue("No data");
    }

    const result = (await response.json()) as IRestaurantNormalized;

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      return !selectRestaurantById(getState(), restaurantId);
    },
  }
);
