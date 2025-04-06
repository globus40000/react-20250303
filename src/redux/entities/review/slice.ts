import { createSlice } from "@reduxjs/toolkit";
import { Identifier, IReviewNormalized } from "../../../types";
import { getEntities, getIds } from "../../utils";
import { normalizedReviews } from "../../../mocks/normalized/reviews";

type ReviewsEntities = Record<Identifier, IReviewNormalized>;

interface IReviewsState {
  entities: ReviewsEntities;
  ids: Identifier[];
}

const initialState: IReviewsState = {
  entities: getEntities(normalizedReviews),
  ids: getIds(normalizedReviews),
};

export const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState,
  reducers: {},
  selectors: {
    selectReviewById: (
      state,
      id: Identifier
    ): IReviewNormalized | undefined => {
      return state.entities[id];
    },
    selectReviewsIds: (state) => {
      return state.ids;
    },
  },
});

export const { selectReviewById, selectReviewsIds } = reviewsSlice.selectors;
