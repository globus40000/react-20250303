import { useReducer } from "react";
import { IReviewNormalized } from "../../types";

interface IReviewFormState {
  text: string;
  rating: number;
}

enum ReviewFormActionType {
  SET_TEXT_ACTION = "SET_TEXT_ACTION",
  INCREMENT_RATING_ACTION = "INCREMENT_RATING_ACTION",
  DECREMENT_RATING_ACTION = "DECREMENT_RATING_ACTION",
  RESET_FORM_ACTION = "RESET_FORM_ACTION",
}

interface ISetTextAction {
  type: ReviewFormActionType.SET_TEXT_ACTION;
  payload: string;
}

interface IIncrementRatingAction {
  type: ReviewFormActionType.INCREMENT_RATING_ACTION;
}

interface IDecrementRatingAction {
  type: ReviewFormActionType.DECREMENT_RATING_ACTION;
}

interface IResetFormAction {
  type: ReviewFormActionType.RESET_FORM_ACTION;
}

type IReviewFormAction =
  | ISetTextAction
  | IIncrementRatingAction
  | IDecrementRatingAction
  | IResetFormAction;

export const RATING_MIN = 1;
export const RATING_MAX = 5;

const DEFAULT_FORM_VALUE: IReviewFormState = {
  text: "",
  rating: RATING_MAX,
};

const reducer = (
  state: IReviewFormState,
  action: IReviewFormAction
): IReviewFormState => {
  switch (action.type) {
    case ReviewFormActionType.SET_TEXT_ACTION:
      return { ...state, text: action.payload };
    case ReviewFormActionType.INCREMENT_RATING_ACTION:
      return { ...state, rating: Math.min(state.rating + 1, RATING_MAX) };
    case ReviewFormActionType.DECREMENT_RATING_ACTION:
      return { ...state, rating: Math.max(state.rating - 1, RATING_MIN) };
    case ReviewFormActionType.RESET_FORM_ACTION:
      return { ...DEFAULT_FORM_VALUE };
    default:
      return state;
  }
};

const getInitialFormValue = (review?: IReviewNormalized): IReviewFormState => {
  if (!review) {
    return DEFAULT_FORM_VALUE;
  }

  return {
    text: review.text,
    rating: review.rating,
  };
};

export const useReviewForm = (review?: IReviewNormalized) => {
  const [form, dispatch] = useReducer(reducer, getInitialFormValue(review));

  const { text, rating } = form;

  const setText = (text: string) => {
    dispatch({ type: ReviewFormActionType.SET_TEXT_ACTION, payload: text });
  };
  const incrementRating = () => {
    dispatch({ type: ReviewFormActionType.INCREMENT_RATING_ACTION });
  };
  const decrementRating = () => {
    dispatch({ type: ReviewFormActionType.DECREMENT_RATING_ACTION });
  };
  const resetForm = () => {
    dispatch({ type: ReviewFormActionType.RESET_FORM_ACTION });
  };

  return {
    text,
    rating,
    setText,
    incrementRating,
    decrementRating,
    resetForm,
  };
};
