import { FC } from "react";
import { IReview } from "../../types";
import { Review } from "../Review/review";
import { ReviewForm } from "../ReviewForm/review-form";

interface IReviewsProps {
  reviews: IReview[];
  textNoReviews?: string;
  restaurantId: string;
}

export const Reviews: FC<IReviewsProps> = ({
  reviews,
  textNoReviews,
  restaurantId,
}) => {
  return (
    <div className="reviews">
      <h3>Reviews</h3>
      {reviews.length === 0 && typeof textNoReviews === "string" ? (
        <div className="no-reviews">{textNoReviews}</div>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <Review review={review} />
            </li>
          ))}
        </ul>
      )}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};
