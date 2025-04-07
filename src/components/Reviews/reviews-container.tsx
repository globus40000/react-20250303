import { FC } from "react";
import { Reviews } from "./reviews";
import { Identifier } from "../../types";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";

interface IReviewsContainerProps {
  id: Identifier;
}

export const ReviewsContainer: FC<IReviewsContainerProps> = ({ id }) => {
  const restaurant = useSelector<
    IRootState,
    ReturnType<typeof selectRestaurantById>
  >((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { reviews } = restaurant;

  return <Reviews reviewsIds={reviews} textNoReviews="No reviews yet." />;
};
