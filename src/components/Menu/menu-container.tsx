import { FC } from "react";
import { Identifier } from "../../types";
import { Menu } from "./menu";
import { useGetDishesForRestaurantQuery } from "../../redux/services/api";
import { getErrorMessage } from "../../redux/utils";

interface IMenuContainerProps {
  id: Identifier;
}

export const MenuContainer: FC<IMenuContainerProps> = ({ id }) => {
  const {
    isLoading,
    isError,
    error,
    data: dishes = [],
  } = useGetDishesForRestaurantQuery(id);

  const errorMessage = getErrorMessage(error);

  return (
    <Menu
      dishes={dishes}
      isLoading={isLoading}
      isError={isError}
      errorMessage={errorMessage}
    />
  );
};
