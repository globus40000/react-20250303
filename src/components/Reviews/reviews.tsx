import { FC, use } from "react";
import { IReview } from "../../types";
import { Review } from "../Review/review";
import { ReviewForm } from "../ReviewForm/review-form";
import { AuthContextProvider } from "../AuthContext/provider";

import styles from "./reviews.module.css";

interface IReviewsProps {
  reviews: IReview[];
  textNoReviews?: string;
}

export const Reviews: FC<IReviewsProps> = ({ reviews, textNoReviews }) => {
  const { authorized } = use(AuthContextProvider);

  return (
    <div className={styles.root}>
      <h3>Reviews</h3>
      {reviews.length === 0 && typeof textNoReviews === "string" ? (
        <div>{textNoReviews}</div>
      ) : (
        <ul role="list">
          {reviews.map((review) => (
            <li key={review.id}>
              <Review review={review} />
            </li>
          ))}
        </ul>
      )}
      {authorized && <ReviewForm className={styles.form} />}
    </div>
  );
};
