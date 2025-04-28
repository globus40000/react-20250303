import { FC } from "react";
import { RestaurantsPage } from "./restaurants-page";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import { getErrorMessage } from "../../redux/utils";

export const RestaurantsPageContainer: FC = () => {
  const {
    isLoading,
    isError,
    error,
    data: restaurants = [],
  } = useGetRestaurantsQuery(undefined);

  const errorMessage = getErrorMessage(error);

  return (
    <RestaurantsPage
      restaurants={restaurants}
      isLoading={isLoading}
      isError={isError}
      errorMessage={errorMessage}
    />
  );
};
