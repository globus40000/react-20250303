import { FC } from "react";
import { Identifier } from "../../types";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { Restaurant } from "./restaurant";
import { IRootState } from "../../redux/store";

interface IRestaurantContainerProps {
  id: Identifier;
}

export const RestaurantContainer: FC<IRestaurantContainerProps> = ({ id }) => {
  const restaurant = useSelector((state: IRootState) =>
    selectRestaurantById(state, id)
  );

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant}></Restaurant>;
};
