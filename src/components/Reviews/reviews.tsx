import { FC, use } from "react";
import { Identifier } from "../../types";
import { ReviewForm } from "../ReviewForm/review-form";
import { AuthContext } from "../AuthContextProvider/auth-context";

import styles from "./reviews.module.css";
import { ReviewContainer } from "../Review/review-container";

interface IReviewsProps {
  reviewsIds: Identifier[];
  textNoReviews?: string;
}

export const Reviews: FC<IReviewsProps> = ({ reviewsIds, textNoReviews }) => {
  const { isAuthorized } = use(AuthContext);

  return (
    <div className={styles.root}>
      <h3>Reviews</h3>
      {reviewsIds.length === 0 && typeof textNoReviews === "string" ? (
        <div>{textNoReviews}</div>
      ) : (
        <ul role="list">
          {reviewsIds.map((id) => (
            <li key={id}>
              <ReviewContainer id={id} />
            </li>
          ))}
        </ul>
      )}
      {isAuthorized && <ReviewForm className={styles.form} />}
    </div>
  );
};
