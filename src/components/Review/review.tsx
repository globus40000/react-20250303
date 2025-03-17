import { FC } from "react";
import { IReview } from "../../types";

interface IReviewProps {
  review: IReview;
}

export const Review: FC<IReviewProps> = ({ review }) => {
  return <div className="review">{review.text}</div>;
};
