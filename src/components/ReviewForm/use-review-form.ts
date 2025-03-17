import { useReducer } from "react";
import { RATING_MAX, RATING_MIN } from "./config";
import { keepInRange } from "../../utils";

interface IReviewFormState {
  user: string;
  text: string;
  rating: number;
}

enum ReviewFormActionType {
  SET_USER_ACTION = "SET_USER_ACTION",
  SET_TEXT_ACTION = "SET_TEXT_ACTION",
  SET_RATING_ACTION = "SET_RATING_ACTION",
  INCREMENT_RATING_ACTION = "INCREMENT_RATING_ACTION",
  DECREMENT_RATING_ACTION = "DECREMENT_RATING_ACTION",
  RESET_FORM_ACTION = "RESET_FORM_ACTION",
}

interface ISetUserAction {
  type: ReviewFormActionType.SET_USER_ACTION;
  payload: string;
}

interface ISetTextAction {
  type: ReviewFormActionType.SET_TEXT_ACTION;
  payload: string;
}

interface ISetRatingAction {
  type: ReviewFormActionType.SET_RATING_ACTION;
  payload: number;
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
  | ISetUserAction
  | ISetTextAction
  | ISetRatingAction
  | IIncrementRatingAction
  | IDecrementRatingAction
  | IResetFormAction;

const DEFAULT_FORM_VALUE: IReviewFormState = {
  user: "",
  text: "",
  rating: RATING_MAX,
};

const reducer = (
  state: IReviewFormState,
  action: IReviewFormAction
): IReviewFormState => {
  switch (action.type) {
    case ReviewFormActionType.SET_USER_ACTION:
      return { ...state, user: action.payload };
    case ReviewFormActionType.SET_TEXT_ACTION:
      return { ...state, text: action.payload };
    case ReviewFormActionType.SET_RATING_ACTION:
      return {
        ...state,
        rating: keepInRange(action.payload, RATING_MIN, RATING_MAX),
      };
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

export const useReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const { user, text, rating } = form;

  const setUser = (user: string) => {
    dispatch({ type: ReviewFormActionType.SET_USER_ACTION, payload: user });
  };
  const setText = (text: string) => {
    dispatch({ type: ReviewFormActionType.SET_TEXT_ACTION, payload: text });
  };
  const setRating = (rating: number) => {
    dispatch({ type: ReviewFormActionType.SET_RATING_ACTION, payload: rating });
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
    user,
    text,
    rating,
    setUser,
    setText,
    setRating,
    incrementRating,
    decrementRating,
    resetForm,
  };
};
