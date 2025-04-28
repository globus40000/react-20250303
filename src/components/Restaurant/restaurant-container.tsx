import { FC } from "react";
import { Identifier } from "../../types";
import { Restaurant } from "./restaurant";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import { getErrorMessage } from "../../redux/utils";

interface IRestaurantContainerProps {
  id: Identifier;
}

export const RestaurantContainer: FC<IRestaurantContainerProps> = ({ id }) => {
  const {
    isLoading,
    isError,
    error,
    data: restaurant,
  } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id: restaurantId }) => id === restaurantId),
    }),
  });

  const errorMessage = getErrorMessage(error);

  return (
    <Restaurant
      restaurant={restaurant}
      isLoading={isLoading}
      isError={isError}
      errorMessage={errorMessage}
    />
  );
};
