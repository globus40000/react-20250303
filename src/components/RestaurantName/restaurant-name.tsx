import { FC } from "react";
import { IRestaurantNormalized } from "../../types";
import { Skeleton } from "../Skeleton/skeleton";
import { Notification } from "../Notification/notification";

interface IRestaurantNameProps {
  restaurant: IRestaurantNormalized | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  className?: string;
}

export const RestaurantName: FC<IRestaurantNameProps> = ({
  restaurant,
  isLoading,
  isError,
  errorMessage,
  className,
}) => {
  if (isLoading) {
    return (
      <Skeleton
        variant="text"
        width={200}
        fontSize={24}
        className={className}
      />
    );
  }

  if (isError) {
    return <Notification message={errorMessage} />;
  }

  return <h2>{restaurant?.name}</h2>;
};
