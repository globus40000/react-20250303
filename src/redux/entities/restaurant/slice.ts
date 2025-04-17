import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IRestaurantNormalized } from "../../../types";
import { getRestaurants } from "./get-restaurants";
import { IRootState } from "../../store";
import { getRestaurantById } from "./get-restaurant-by-id";

const entityAdapter = createEntityAdapter<IRestaurantNormalized>();

export const restaurantsSlice = createSlice({
  name: "restaurantsSlice",
  initialState: entityAdapter.getInitialState({
    errorMessage: "",
  }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getRestaurants.rejected, (state, { payload }) => {
        state.errorMessage = payload ?? "Error";
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      })
      .addCase(getRestaurantById.rejected, (state, { payload }) => {
        state.errorMessage = payload ?? "Error";
      }),
  selectors: {
    selectErrorMessage: (state) => {
      return state.errorMessage;
    },
  },
});

const selectRestaurantsSlice = (state: IRootState) => {
  return state[restaurantsSlice.name];
};

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
  selectTotal: selectRestaurantsTotal,
} = entityAdapter.getSelectors(selectRestaurantsSlice);

export const { selectErrorMessage } = restaurantsSlice.selectors;
