import { FC, FormEvent, use } from "react";
import { RATING_MAX, RATING_MIN, useReviewForm } from "./use-review-form";
import { Counter } from "../Counter/counter";
import { Button } from "../Button/button";
import { FormField } from "../FormField/form-field";
import { IAddReviewBody, IUpdateReviewBody } from "../../redux/services/api";
import { AuthContext } from "../AuthContextProvider/auth-context";
import { Notification } from "../Notification/notification";
import { IReviewNormalized } from "../../types";

import styles from "./review-form.module.css";

type CallbackAddReview = (review: IAddReviewBody) => void;
type CallbackUpdateReview = (fields: IUpdateReviewBody) => void;

interface IReviewFormProps {
  onSubmit: CallbackAddReview | CallbackUpdateReview;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  review?: IReviewNormalized;
  className?: string;
}

const IS_TEXT_REQUIRED = true;

export const ReviewForm: FC<IReviewFormProps> = ({
  onSubmit,
  isLoading,
  isError,
  errorMessage,
  review,
  className,
}) => {
  const { text, rating, setText, incrementRating, decrementRating, resetForm } =
    useReviewForm(review);

  const { user } = use(AuthContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (review) {
      (onSubmit as CallbackUpdateReview)({ text, rating });
    } else {
      if (!user) {
        throw new Error("Can not submit without user");
      }

      (onSubmit as CallbackAddReview)({ userId: user.id, text, rating });
    }
  };

  return (
    <form onSubmit={handleSubmit} onReset={resetForm} className={className}>
      <FormField
        className={styles.field}
        label="Text"
        name="text"
        required={IS_TEXT_REQUIRED}
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        isTextArea
      />
      <FormField className={styles.field} label="Rating">
        <Counter
          count={rating}
          onIncrement={incrementRating}
          onDecrement={decrementRating}
          min={RATING_MIN}
          max={RATING_MAX}
          className={styles.rating}
        />
      </FormField>
      <div className={styles.controls}>
        <Button type="submit" className={styles.control} disabled={isLoading}>
          {review ? "Update review" : "Add review"}
        </Button>
        <Button type="reset" className={styles.control}>
          Clear
        </Button>
      </div>
      {isError && <Notification message={errorMessage} />}
    </form>
  );
};
