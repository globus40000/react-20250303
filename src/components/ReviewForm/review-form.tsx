import { FC, FormEvent } from "react";
import { RATING_MAX, RATING_MIN, useReviewForm } from "./use-review-form";
import { Counter } from "../Counter/counter";
import { Button } from "../Button/button";
import classNames from "classnames";

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
    <div className={classNames(styles.root, className)}>
      <form onSubmit={handleSubmit} onReset={resetForm}>
        <div className={styles.field}>
          <label
            htmlFor="user"
            className={classNames({ [styles.required]: IS_NAME_REQUIRED })}
          >
            Name:{" "}
          </label>
          <input
            name="user"
            type="text"
            id="user"
            required={IS_NAME_REQUIRED}
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={user}
          />
        </div>
        <div className={styles.field}>
          <label
            htmlFor="text"
            className={classNames({ [styles.required]: IS_TEXT_REQUIRED })}
          >
            Text:{" "}
          </label>
          <textarea
            name="text"
            id="text"
            required={IS_TEXT_REQUIRED}
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
        </div>
        <div className={styles.field}>
          <label>Rating: </label>
          <Counter
            count={rating}
            onIncrement={incrementRating}
            onDecrement={decrementRating}
            min={RATING_MIN}
            max={RATING_MAX}
            className={styles.rating}
          />
        </div>
        <div className={styles.controls}>
          <Button type="submit" className={styles.control}>
            Submit
          </Button>
          <Button type="reset" className={styles.control}>
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
};
