import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserNormalized } from "../../../types";
import { IRootState } from "../../store";
import { API_BASE_URL } from "../../../config";
import { selectUsersTotal } from "./slice";

export const getUsers = createAsyncThunk<
  IUserNormalized[],
  undefined,
  {
    state: IRootState;
    rejectValue: string;
  }
>(
  "usersSlice/getUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE_URL}/users`);
    const result = (await response.json()) as IUserNormalized[];

    if (!result.length) {
      return rejectWithValue("No data");
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return !selectUsersTotal(getState());
    },
  }
);
