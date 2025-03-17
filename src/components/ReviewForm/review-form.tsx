import { FC, FormEvent } from "react";
import { useReviewForm } from "./use-review-form";
import { Counter } from "../Counter/counter";

interface IReviewFormProps {
  restaurantId: string;
}

export const ReviewForm: FC<IReviewFormProps> = ({ restaurantId }) => {
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

    console.log({ user, text, rating }, restaurantId);
  };
  const handleReset = () => {
    resetForm();
  };

  return (
    <div className="review-form">
      <form onSubmit={handleSubmit} onReset={handleReset}>
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
          />
        </div>
        <div>
          <input type="submit" />
          <input type="reset" value="Clear" />
        </div>
      </form>
    </div>
  );
};
