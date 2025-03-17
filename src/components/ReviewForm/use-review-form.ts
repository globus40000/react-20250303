import { useReducer } from "react";
import { RATING_MAX } from "./config";

interface IReviewFormState {
  user: string;
  text: string;
  rating: number;
}

enum ReviewFormActionType {
  SET_USER_ACTION = "SET_USER_ACTION",
  SET_TEXT_ACTION = "SET_TEXT_ACTION",
  SET_RATING_ACTION = "SET_RATING_ACTION",
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

type IReviewFormAction = ISetUserAction | ISetTextAction | ISetRatingAction;

const DEFAULT_FORM_VALUE: IReviewFormState = {
  user: "",
  text: "",
  rating: RATING_MAX,
};

const reducer = (
  state: IReviewFormState,
  { type, payload }: IReviewFormAction
): IReviewFormState => {
  switch (type) {
    case ReviewFormActionType.SET_USER_ACTION:
      return { ...state, user: payload };
    case ReviewFormActionType.SET_TEXT_ACTION:
      return { ...state, text: payload };
    case ReviewFormActionType.SET_RATING_ACTION:
      return { ...state, rating: payload };
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

  return {
    user,
    text,
    rating,
    setUser,
    setText,
    setRating,
  };
};
