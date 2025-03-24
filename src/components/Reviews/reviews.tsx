import { FC } from "react";
import { IReview } from "../../types";
import { Review } from "../Review/review";
import { ReviewForm } from "../ReviewForm/review-form";

interface IReviewsProps {
  reviews: IReview[];
  textNoReviews?: string;
}

export const Reviews: FC<IReviewsProps> = ({ reviews, textNoReviews }) => {
  return (
    <div className="reviews">
      <h3>Reviews</h3>
      {reviews.length === 0 && typeof textNoReviews === "string" ? (
        <div className="no-reviews">{textNoReviews}</div>
      ) : (
        <ul role="list">
          {reviews.map((review) => (
            <li key={review.id}>
              <Review review={review} />
            </li>
          ))}
        </ul>
      )}
      <ReviewForm />
    </div>
  );
};
