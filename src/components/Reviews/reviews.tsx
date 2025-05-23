import { FC, use } from "react";
import { IReviewNormalized } from "../../types";
import { ReviewForm } from "../ReviewForm/review-form";
import { AuthContext } from "../AuthContextProvider/auth-context";
import { ReviewsList } from "../ReviewsList/reviews-list";
import { IAddReviewBody } from "../../redux/services/api";

import styles from "./reviews.module.css";

interface IReviewsProps {
  reviews: IReviewNormalized[];
  textNoReviews?: string;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  onAddReview: (review: IAddReviewBody) => void;
  isAddReviewLoading: boolean;
  isAddReviewError: boolean;
  errorMessageAddReview: string;
}

export const Reviews: FC<IReviewsProps> = ({
  reviews,
  textNoReviews,
  isLoading,
  isError,
  errorMessage,
  onAddReview,
  isAddReviewLoading,
  isAddReviewError,
  errorMessageAddReview,
}) => {
  const { isAuthorized } = use(AuthContext);

  return (
    <div className={styles.root}>
      <h3>Reviews</h3>
      <ReviewsList
        reviews={reviews}
        textNoReviews={textNoReviews}
        isLoading={isLoading}
        isError={isError}
        errorMessage={errorMessage}
      />
      {isAuthorized && (
        <ReviewForm
          onSubmit={onAddReview}
          isLoading={isAddReviewLoading}
          isError={isAddReviewError}
          errorMessage={errorMessageAddReview}
          className={styles.form}
        />
      )}
    </div>
  );
};
