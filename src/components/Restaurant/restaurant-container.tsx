import { FC } from "react";
import { Identifier } from "../../types";
import { useSelector } from "react-redux";
import {
  selectErrorMessage,
  selectRestaurantById,
} from "../../redux/entities/restaurant/slice";
import { Restaurant } from "./restaurant";
import { IRootState } from "../../redux/store";
import { useRequest } from "../../redux/hooks/use-request";
import { getRestaurantById } from "../../redux/entities/restaurant/get-restaurant-by-id";

interface IRestaurantContainerProps {
  id: Identifier;
}

export const RestaurantContainer: FC<IRestaurantContainerProps> = ({ id }) => {
  // @ts-expect-error: Type 'unknown' is not assignable to type 'string'.
  const requestStatus = useRequest(getRestaurantById, id);
  const restaurant = useSelector<
    IRootState,
    ReturnType<typeof selectRestaurantById>
  >((state) => selectRestaurantById(state, id));

  const errorMessage = useSelector(selectErrorMessage);

  return (
    <Restaurant
      restaurant={restaurant}
      requestStatus={requestStatus}
      errorMessage={errorMessage}
    />
  );
};
