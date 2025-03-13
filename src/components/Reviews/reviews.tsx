import { IReview } from "../../../types";
import { Review } from "../Review/review";

export const Reviews = ({ reviews }: { reviews: IReview[] }) => {
  return (
    <div className="reviews">
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
