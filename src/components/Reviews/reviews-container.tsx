import { FC } from "react";
import { Reviews } from "./reviews";
import { Identifier } from "../../types";
import { useRequest } from "../../redux/hooks/use-request";
import { getReviewsForRestaurant } from "../../redux/entities/review/get-reviews-for-restaurant";
import { useSelector } from "react-redux";
import {
  selectErrorMessage as selectReviewsErrorMessage,
  selectReviewsIds,
} from "../../redux/entities/review/slice";
import { getUsers } from "../../redux/entities/user/get-users";
import { getCommonRequestStatus } from "../../redux/utils";
import { selectErrorMessage as selectUsersErrorMessage } from "../../redux/entities/user/slice";

interface IReviewsContainerProps {
  id: Identifier;
}

export const ReviewsContainer: FC<IReviewsContainerProps> = ({ id }) => {
  // @ts-expect-error: Type 'unknown' is not assignable to type 'string'.
  const reviewsRequestStatus = useRequest(getReviewsForRestaurant, id);
  // @ts-expect-error: Type 'unknown' is not assignable to type 'undefined'.
  const usersRequestStatus = useRequest(getUsers);
  const reviewsIds = useSelector(selectReviewsIds);
  const reviewsErrorMessage = useSelector(selectReviewsErrorMessage);
  const usersErrorMessage = useSelector(selectUsersErrorMessage);

  return (
    <Reviews
      reviewsIds={reviewsIds}
      textNoReviews="No reviews yet."
      requestStatus={getCommonRequestStatus([
        reviewsRequestStatus,
        usersRequestStatus,
      ])}
      errorMessage={reviewsErrorMessage || usersErrorMessage}
    />
  );
};
