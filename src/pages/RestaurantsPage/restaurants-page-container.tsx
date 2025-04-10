import { FC } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurant/slice";
import { RestaurantsPage } from "./restaurants-page";
import { getRestaurants } from "../../redux/entities/restaurant/get-restaurants";
import { useRequest } from "../../redux/hooks/use-request";

export const RestaurantsPageContainer: FC = () => {
  // @ts-expect-error: Type 'unknown' is not assignable to type 'undefined'.
  const requestStatus = useRequest(getRestaurants);
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <RestaurantsPage
      restaurantsIds={restaurantsIds}
      requestStatus={requestStatus}
    />
  );
};
