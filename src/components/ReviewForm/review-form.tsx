import { FC, FormEvent } from "react";
import { RATING_MAX, RATING_MIN, useReviewForm } from "./use-review-form";
import { Counter } from "../Counter/counter";
import { Button } from "../Button/button";
import classNames from "classnames";
import { FormField } from "../FormField/form-field";

import styles from "./review-form.module.css";

interface IReviewFormProps {
  className?: string;
}

const IS_NAME_REQUIRED = true;
const IS_TEXT_REQUIRED = true;

export const ReviewForm: FC<IReviewFormProps> = ({ className }) => {
  const {
    user,
    text,
    rating,
    setUser,
    setText,
    incrementRating,
    decrementRating,
    resetForm,
  } = useReviewForm();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      onReset={resetForm}
      className={classNames(styles.root, className)}
    >
      <FormField
        className={styles.field}
        label="Name"
        name="user"
        required={IS_NAME_REQUIRED}
        onChange={(e) => {
          setUser(e.target.value);
        }}
        value={user}
      />
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
        <Button type="submit" className={styles.control}>
          Submit
        </Button>
        <Button type="reset" className={styles.control}>
          Clear
        </Button>
      </div>
    </form>
  );
};
