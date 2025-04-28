import { FC, FormEvent, use } from "react";
import { RATING_MAX, RATING_MIN, useReviewForm } from "./use-review-form";
import { Counter } from "../Counter/counter";
import { Button } from "../Button/button";
import { FormField } from "../FormField/form-field";
import { IAddReviewBody } from "../../redux/services/api";
import { AuthContext } from "../AuthContextProvider/auth-context";

import styles from "./review-form.module.css";

interface IReviewFormProps {
  onSubmit: (review: IAddReviewBody) => void;
  isAddReviewLoading: boolean;
  className?: string;
}

const IS_TEXT_REQUIRED = true;

export const ReviewForm: FC<IReviewFormProps> = ({
  onSubmit,
  isAddReviewLoading,
  className,
}) => {
  const { text, rating, setText, incrementRating, decrementRating, resetForm } =
    useReviewForm();

  const { user } = use(AuthContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      throw new Error("Can not submit without user");
    }

    onSubmit({ userId: user.id, text, rating });
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
        <Button
          type="submit"
          className={styles.control}
          disabled={isAddReviewLoading}
        >
          Add review
        </Button>
        <Button type="reset" className={styles.control}>
          Clear
        </Button>
      </div>
    </form>
  );
};
