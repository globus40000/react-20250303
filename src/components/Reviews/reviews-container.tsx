import { FC } from "react";
import { Reviews } from "./reviews";
import { Identifier } from "../../types";
import { getErrorMessage } from "../../redux/utils";
import {
  IAddReviewBody,
  useAddReviewMutation,
  useGetReviewsForRestaurantQuery,
  useGetUsersQuery,
} from "../../redux/services/api";

interface IReviewsContainerProps {
  id: Identifier;
}

export const ReviewsContainer: FC<IReviewsContainerProps> = ({ id }) => {
  const {
    isLoading: isReviewsLoading,
    isFetching: isReviewsFetching,
    isError: isReviewsError,
    error: reviewsError,
    data: reviews = [],
  } = useGetReviewsForRestaurantQuery(id);

  const {
    isLoading: isUsersLoading,
    isError: isUsersError,
    error: usersError,
  } = useGetUsersQuery(undefined);

  const reviewsErrorMessage = getErrorMessage(reviewsError);
  const usersErrorMessage = getErrorMessage(usersError);

  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();
  const handleAddReview = (review: IAddReviewBody) => {
    void addReview({ restaurantId: id, review });
  };

  return (
    <Reviews
      reviews={reviews}
      textNoReviews="No reviews yet."
      isLoading={isReviewsLoading || isReviewsFetching || isUsersLoading}
      isError={isReviewsError || isUsersError}
      errorMessage={reviewsErrorMessage || usersErrorMessage}
      onAddReview={handleAddReview}
      isAddReviewLoading={isAddReviewLoading}
    />
  );
};
