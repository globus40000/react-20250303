import { FC, use } from "react";
import { Identifier, RequestStatus } from "../../types";
import { ReviewForm } from "../ReviewForm/review-form";
import { AuthContext } from "../AuthContextProvider/auth-context";

import styles from "./reviews.module.css";
import { ReviewContainer } from "../Review/review-container";
import { Skeleton } from "../Skeleton/skeleton";
import { Notification } from "../Notification/notification";

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
      {requestStatus === RequestStatus.pending ? (
        <Skeleton variant="rectangular" width={200} height={50} />
      ) : requestStatus === RequestStatus.rejected ? (
        <Notification message={errorMessage} />
      ) : reviewsIds.length === 0 && typeof textNoReviews === "string" ? (
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
