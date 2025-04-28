import { FC } from "react";
import { IReviewNormalized } from "../../types";
import { UserNameContainer } from "../UserName/user-name-container";
import { Button } from "../Button/button";
import { ReviewForm } from "../ReviewForm/review-form";
import { useEditMode } from "./use-edit-mode";
import { IUpdateReviewBody } from "../../redux/services/api";

interface IReviewProps {
  review: IReviewNormalized;
  onUpdateReview: (fields: IUpdateReviewBody) => void;
  isUpdateReviewLoading: boolean;
  isUpdateReviewError: boolean;
  errorMessageUpdateReview: string;
}

export const Review: FC<IReviewProps> = ({
  review,
  onUpdateReview,
  isUpdateReviewLoading,
  isUpdateReviewError,
  errorMessageUpdateReview,
}) => {
  const { isAuthor, isEditMode, enableEditMode } = useEditMode(review);

  const { userId, text, rating } = review;

  return (
    <div>
      {isEditMode ? (
        <ReviewForm
          review={review}
          onSubmit={onUpdateReview}
          isLoading={isUpdateReviewLoading}
          isError={isUpdateReviewError}
          errorMessage={errorMessageUpdateReview}
        />
      ) : (
        <>
          <UserNameContainer id={userId} />: {`${String(rating)}, ${text}`}
          {isAuthor && (
            <div>
              <Button onClick={enableEditMode}>Edit</Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
