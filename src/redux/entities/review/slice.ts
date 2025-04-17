import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IReviewNormalized } from "../../../types";
import { IRootState } from "../../store";

const entityAdapter = createEntityAdapter<IReviewNormalized>();

export const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState: entityAdapter.getInitialState(),
  reducers: {},
});

const selectReviewsSlice = (state: IRootState) => {
  return state[reviewsSlice.name];
};

export const { selectIds: selectReviewsIds, selectById: selectReviewById } =
  entityAdapter.getSelectors(selectReviewsSlice);
