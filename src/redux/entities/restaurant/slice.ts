import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IRestaurantNormalized } from "../../../types";
import { getRestaurants } from "./get-restaurants";
import { IRootState } from "../../store";

const entityAdapter = createEntityAdapter<IRestaurantNormalized>();

export const restaurantsSlice = createSlice({
  name: "restaurantsSlice",
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

const selectRestaurantsSlice = (state: IRootState) => {
  return state[restaurantsSlice.name];
};

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
  selectTotal: selectRestaurantsTotal,
} = entityAdapter.getSelectors(selectRestaurantsSlice);
