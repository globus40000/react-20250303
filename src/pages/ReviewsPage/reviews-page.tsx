import { FC } from "react";
import { useParams } from "react-router";
import { ReviewsContainer } from "../../components/Reviews/reviews-container";

export const ReviewsPage: FC = () => {
  const { restaurantId } = useParams();

  return <div>{restaurantId && <ReviewsContainer id={restaurantId} />}</div>;
};
