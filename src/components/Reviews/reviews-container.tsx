import { FC } from "react";
import { Reviews } from "./reviews";
import { Identifier } from "../../types";
import { useRequest } from "../../redux/hooks/use-request";
import { getReviewsForRestaurant } from "../../redux/entities/review/get-reviews-for-restaurant";
import { useSelector } from "react-redux";
import {
  selectErrorMessage,
  selectReviewsIds,
} from "../../redux/entities/review/slice";

interface IReviewsContainerProps {
  id: Identifier;
}

export const ReviewsContainer: FC<IReviewsContainerProps> = ({ id }) => {
  // @ts-expect-error: Type 'unknown' is not assignable to type 'string'.
  const requestStatus = useRequest(getReviewsForRestaurant, id);
  const reviewsIds = useSelector(selectReviewsIds);
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <Reviews
      reviewsIds={reviewsIds}
      textNoReviews="No reviews yet."
      requestStatus={requestStatus}
      errorMessage={errorMessage}
    />
  );
};
