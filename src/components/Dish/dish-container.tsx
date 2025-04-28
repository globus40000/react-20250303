import { FC } from "react";
import { Identifier } from "../../types";
import { Dish } from "./dish";
import { useGetDishByIdQuery } from "../../redux/services/api";
import { getErrorMessage } from "../../redux/utils";

interface IDishContainerProps {
  id: Identifier;
}

export const DishContainer: FC<IDishContainerProps> = ({ id }) => {
  const { isLoading, isError, error, data: dish } = useGetDishByIdQuery(id);

  const errorMessage = getErrorMessage(error);

  return (
    <Dish
      dish={dish}
      isLoading={isLoading}
      isError={isError}
      errorMessage={errorMessage}
    />
  );
};
