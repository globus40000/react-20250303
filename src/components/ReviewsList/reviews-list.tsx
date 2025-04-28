import { FC } from "react";
import { Identifier, RequestStatus } from "../../types";
import { Notification } from "../Notification/notification";
import { ReviewContainer } from "../Review/review-container";
import { Skeleton } from "../Skeleton/skeleton";

interface IReviewsListProps {
  reviewsIds: Identifier[];
  textNoReviews?: string;
  requestStatus: RequestStatus;
  errorMessage: string;
}

export const ReviewsList: FC<IReviewsListProps> = ({
  reviewsIds,
  textNoReviews,
  requestStatus,
  errorMessage,
}) => {
  if (requestStatus === RequestStatus.pending) {
    return <Skeleton variant="rectangular" width={200} height={50} />;
  }

  if (requestStatus === RequestStatus.rejected) {
    return <Notification message={errorMessage} />;
  }

  if (reviewsIds.length === 0 && typeof textNoReviews === "string") {
    return <div>{textNoReviews}</div>;
  }

  return (
    <ul role="list">
      {reviewsIds.map((id) => (
        <li key={id}>
          <ReviewContainer id={id} />
        </li>
      ))}
    </ul>
  );
};
