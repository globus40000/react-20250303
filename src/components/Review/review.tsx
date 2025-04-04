import { FC } from "react";
import { IReview } from "../../types";

interface IReviewProps {
  review: IReview;
}

export const Review: FC<IReviewProps> = ({ review }) => {
  const { user, text, rating } = review;

  return <div>{`${user}: ${String(rating)}, ${text}`}</div>;
};
