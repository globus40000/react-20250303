import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Identifier, IDishNormalized } from "../../../types";
import { IRootState } from "../../store";
import { getDishesForRestaurant } from "./get-dishes-for-restaurant";
import { getDishById } from "./get-dish-by-id";

const entityAdapter = createEntityAdapter<IDishNormalized>();

export const dishesSlice = createSlice({
  name: "dishesSlice",
  initialState: entityAdapter.getInitialState<{
    menu: Identifier[];
    errorMessage: string;
  }>({
    menu: [],
    errorMessage: "",
  }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getDishesForRestaurant.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
        state.menu = payload.map(({ id }) => id);
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
    selectMenu: (state) => {
      return state.menu;
    },
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

export const { selectMenu, selectErrorMessage } = dishesSlice.selectors;
