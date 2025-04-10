import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IRestaurantNormalized } from "../../../types";
import { IRootState } from "../../store";

const entityAdapter = createEntityAdapter<IRestaurantNormalized>();

export const restaurantsSlice = createSlice({
  name: "restaurantsSlice",
  initialState: entityAdapter.getInitialState(),
  reducers: {},
});

const selectRestaurantsSlice = (state: IRootState) => {
  return state[restaurantsSlice.name];
};

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
} = entityAdapter.getSelectors(selectRestaurantsSlice);
