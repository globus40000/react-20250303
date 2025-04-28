import { FC, use } from "react";
import { IReviewNormalized } from "../../types";
import { ReviewForm } from "../ReviewForm/review-form";
import { AuthContext } from "../AuthContextProvider/auth-context";
import { ReviewsList } from "../ReviewsList/reviews-list";

import styles from "./reviews.module.css";

interface IReviewsProps {
  reviews: IReviewNormalized[];
  textNoReviews?: string;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export const Reviews: FC<IReviewsProps> = ({
  reviews,
  textNoReviews,
  isLoading,
  isError,
  errorMessage,
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
      {isAuthorized && <ReviewForm className={styles.form} />}
    </div>
  );
};
