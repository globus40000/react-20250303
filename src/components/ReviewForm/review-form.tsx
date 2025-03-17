import { FC, FormEvent } from "react";
import { useReviewForm } from "./use-review-form";
import { RATING_MAX, RATING_MIN } from "./config";

interface ReviewFormProps {
  restaurantId: string;
}

export const ReviewForm: FC<ReviewFormProps> = ({ restaurantId }) => {
  const { user, text, rating, setUser, setText, setRating } = useReviewForm();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ user, text, rating }, restaurantId);
  };

  return (
    <div className="review-form">
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="rating">Rating: </label>
          <input
            name="rating"
            type="number"
            min={RATING_MIN}
            max={RATING_MAX}
            id="rating"
            required
            onChange={(e) => {
              setRating(Number(e.target.value));
            }}
            value={rating}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
