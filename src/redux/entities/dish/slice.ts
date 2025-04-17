import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IDishNormalized } from "../../../types";
import { IRootState } from "../../store";
import { getDishesForRestaurant } from "./get-dishes-for-restaurant";
import { getDishById } from "./get-dish-by-id";

const entityAdapter = createEntityAdapter<IDishNormalized>();

export const dishesSlice = createSlice({
  name: "dishesSlice",
  initialState: entityAdapter.getInitialState({
    errorMessage: "",
  }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getDishesForRestaurant.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getDishesForRestaurant.rejected, (state, { payload }) => {
        state.errorMessage = payload ?? "Error";
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      })
      .addCase(getDishById.rejected, (state, { payload }) => {
        state.errorMessage = payload ?? "Error";
      }),
  selectors: {
    selectErrorMessage: (state) => {
      return state.errorMessage;
    },
  },
});

const selectDishesSlice = (state: IRootState) => {
  return state[dishesSlice.name];
};

export const { selectIds: selectDishesIds, selectById: selectDishById } =
  entityAdapter.getSelectors(selectDishesSlice);

export const { selectErrorMessage } = dishesSlice.selectors;
