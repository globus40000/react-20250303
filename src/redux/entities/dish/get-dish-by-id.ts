import { createAsyncThunk } from "@reduxjs/toolkit";
import { Identifier, IDishNormalized } from "../../../types";
import { IRootState } from "../../store";
import { API_BASE_URL } from "../../../config";
import { selectDishById } from "./slice";

export const getDishById = createAsyncThunk<
  IDishNormalized,
  Identifier,
  {
    state: IRootState;
    rejectValue: string;
  }
>(
  "dishesSlice/getDishById",
  async (dishId, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE_URL}/dish/${dishId}`);

    if (Number(response.headers.get("content-length")) === 0) {
      return rejectWithValue("No data");
    }

    const result = (await response.json()) as IDishNormalized;

    return result;
  },
  {
    condition: (dishId, { getState }) => {
      return !selectDishById(getState(), dishId);
    },
  }
);
