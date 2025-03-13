import { IReview } from "../../types";

export const Review = ({ review }: { review: IReview }) => {
  return <div className="review">{review.text}</div>;
};
