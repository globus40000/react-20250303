import { FC, use } from "react";
import { Identifier, RequestStatus } from "../../types";
import { ReviewForm } from "../ReviewForm/review-form";
import { AuthContext } from "../AuthContextProvider/auth-context";
import { ReviewsList } from "../ReviewsList/reviews-list";

import styles from "./reviews.module.css";

interface IReviewsProps {
  reviewsIds: Identifier[];
  textNoReviews?: string;
  requestStatus: RequestStatus;
  errorMessage: string;
}

export const Reviews: FC<IReviewsProps> = ({
  reviewsIds,
  textNoReviews,
  requestStatus,
  errorMessage,
}) => {
  const { isAuthorized } = use(AuthContext);

  return (
    <div className={styles.root}>
      <h3>Reviews</h3>
      <ReviewsList
        reviewsIds={reviewsIds}
        textNoReviews={textNoReviews}
        requestStatus={requestStatus}
        errorMessage={errorMessage}
      />
      {isAuthorized && <ReviewForm className={styles.form} />}
    </div>
  );
};
