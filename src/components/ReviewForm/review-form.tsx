import { FC, FormEvent } from "react";
import { RATING_MAX, RATING_MIN, useReviewForm } from "./use-review-form";
import { Counter } from "../Counter/counter";

export const ReviewForm: FC = () => {
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
    <div className="review-form">
      <form onSubmit={handleSubmit} onReset={resetForm}>
        <div>
          <label htmlFor="user">Name: </label>
          <input
            name="user"
            type="text"
            id="user"
            required
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={user}
          />
        </div>
        <div>
          <label htmlFor="text">Text: </label>
          <textarea
            name="text"
            id="text"
            required
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
        </div>
        <div>
          <label>Rating: </label>
          <Counter
            count={rating}
            onIncrement={incrementRating}
            onDecrement={decrementRating}
            min={RATING_MIN}
            max={RATING_MAX}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </div>
  );
};
