import { FC } from "react";
import { useParams } from "react-router";
import { RestaurantContainer } from "../../components/Restaurant/restaurant-container";

export const RestaurantPage: FC = () => {
  const { restaurantId } = useParams();

  return <div>{restaurantId && <RestaurantContainer id={restaurantId} />}</div>;
};
