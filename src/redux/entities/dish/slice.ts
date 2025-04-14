import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IDishNormalized } from "../../../types";
import { IRootState } from "../../store";

const entityAdapter = createEntityAdapter<IDishNormalized>();

export const dishesSlice = createSlice({
  name: "dishesSlice",
  initialState: entityAdapter.getInitialState({
    errorMessage: "",
  }),
  reducers: {},
  selectors: {
    selectErrorMessage: (state) => {
      return state.errorMessage;
    },
  },
});

const selectDishesSlice = (state: IRootState) => {
  return state[dishesSlice.name];
};

export const {
  selectIds: selectDishesIds,
  selectById: selectDishById,
  selectTotal: selectDishesTotal,
} = entityAdapter.getSelectors(selectDishesSlice);

export const { selectErrorMessage } = dishesSlice.selectors;
