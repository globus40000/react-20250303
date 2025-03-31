import { useReducer } from "react";

interface IReviewFormState {
  user: string;
  text: string;
  rating: number;
}

enum ReviewFormActionType {
  SET_USER_ACTION = "SET_USER_ACTION",
  SET_TEXT_ACTION = "SET_TEXT_ACTION",
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
  | IIncrementRatingAction
  | IDecrementRatingAction
  | IResetFormAction;

export const RATING_MIN = 1;
export const RATING_MAX = 5;

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
    incrementRating,
    decrementRating,
    resetForm,
  };
};
