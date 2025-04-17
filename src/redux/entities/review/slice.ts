import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IReviewNormalized } from "../../../types";
import { IRootState } from "../../store";

const entityAdapter = createEntityAdapter<IReviewNormalized>();

export const reviewsSlice = createSlice({
  name: "reviewsSlice",
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

const selectReviewsSlice = (state: IRootState) => {
  return state[reviewsSlice.name];
};

export const { selectIds: selectReviewsIds, selectById: selectReviewById } =
  entityAdapter.getSelectors(selectReviewsSlice);

export const { selectErrorMessage } = reviewsSlice.selectors;
