import { FC } from "react";
import { IReviewNormalized } from "../../types";
import { Review } from "./review";
import {
  IUpdateReviewBody,
  useUpdateReviewMutation,
} from "../../redux/services/api";
import { getErrorMessage } from "../../redux/utils";

interface IReviewContainerProps {
  review: IReviewNormalized;
}

export const ReviewContainer: FC<IReviewContainerProps> = ({ review }) => {
  const [
    updateReview,
    {
      isLoading: isUpdateReviewLoading,
      isError: isUpdateReviewError,
      error: errorUpdateReview,
    },
  ] = useUpdateReviewMutation();

  const errorMessageUpdateReview = getErrorMessage(errorUpdateReview);

  const handleUpdateReview = (fields: IUpdateReviewBody) => {
    void updateReview({ reviewId: review.id, fields });
  };

  return (
    <Review
      review={review}
      onUpdateReview={handleUpdateReview}
      isUpdateReviewLoading={isUpdateReviewLoading}
      isUpdateReviewError={isUpdateReviewError}
      errorMessageUpdateReview={errorMessageUpdateReview}
    />
  );
};
