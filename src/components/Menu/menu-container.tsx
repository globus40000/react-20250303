import { FC } from "react";
import { Identifier } from "../../types";
import { useSelector } from "react-redux";
import { Menu } from "./menu";
import { useRequest } from "../../redux/hooks/use-request";
import { getDishesForRestaurant } from "../../redux/entities/dish/get-dishes-for-restaurant";
import {
  selectDishesIds,
  selectErrorMessage,
} from "../../redux/entities/dish/slice";

interface IMenuContainerProps {
  id: Identifier;
}

export const MenuContainer: FC<IMenuContainerProps> = ({ id }) => {
  // @ts-expect-error: Type 'unknown' is not assignable to type 'string'.
  const requestStatus = useRequest(getDishesForRestaurant, id);
  const dishesIds = useSelector(selectDishesIds);
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <Menu
      dishesIds={dishesIds}
      requestStatus={requestStatus}
      errorMessage={errorMessage}
    />
  );
};
