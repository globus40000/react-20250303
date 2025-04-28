import { FC } from "react";
import { IRestaurantNormalized } from "../../types";
import { Notification } from "../Notification/notification";
import { Skeleton } from "../Skeleton/skeleton";
import { Tab } from "../Tab/tab";

interface IRestaurantsTabsProps {
  restaurants: IRestaurantNormalized[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export const RestaurantsTabs: FC<IRestaurantsTabsProps> = ({
  restaurants,
  isLoading,
  isError,
  errorMessage,
}) => {
  if (isLoading) {
    return <Skeleton variant="rectangular" width={400} height={35} />;
  }

  if (isError) {
    return <Notification message={errorMessage} />;
  }

  return (
    <>
      {restaurants.map(({ id, name }) => (
        <Tab key={id} title={name} to={id} />
      ))}
    </>
  );
};
