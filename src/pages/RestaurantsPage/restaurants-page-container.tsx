import { FC } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurant/slice";
import { RestaurantsPage } from "./restaurants-page";

export const RestaurantsPageContainer: FC = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return <RestaurantsPage restaurantsIds={restaurantsIds} />;
};
