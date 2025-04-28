import { FC } from "react";
import { IReviewNormalized } from "../../types";
import { Notification } from "../Notification/notification";
import { Skeleton } from "../Skeleton/skeleton";
import { Review } from "../Review/review";

interface IReviewsListProps {
  reviews: IReviewNormalized[];
  textNoReviews?: string;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export const ReviewsList: FC<IReviewsListProps> = ({
  reviews,
  textNoReviews,
  isLoading,
  isError,
  errorMessage,
}) => {
  if (isLoading) {
    return <Skeleton variant="rectangular" width={200} height={50} />;
  }

  if (isError) {
    return <Notification message={errorMessage} />;
  }

  if (reviews.length === 0 && typeof textNoReviews === "string") {
    return <div>{textNoReviews}</div>;
  }

  return (
    <ul role="list">
      {reviews.map((review) => (
        <li key={review.id}>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
};
